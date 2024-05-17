import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_JobPrestoConfigLoggingConfig,
  Dataproc_JobPrestoConfigLoggingConfig_GetTypes,
} from "./Dataproc_JobPrestoConfigLoggingConfig";

export interface Dataproc_JobPrestoConfig {
  /*
The list of SQL queries or statements to execute as part of the job.
Conflicts with `query_file_uri`
*/
  QueryLists?: Array<string>;

  // Presto client tags to attach to this query.
  ClientTags?: Array<string>;

  // Whether to continue executing queries if a query fails. Setting to true can be useful when executing independent parallel queries. Defaults to false.
  ContinueOnFailure?: boolean;

  // The runtime logging config of the job
  LoggingConfig?: Dataproc_JobPrestoConfigLoggingConfig;

  /*
The format in which query output will be displayed. See the Presto documentation for supported output formats.

- `logging_config.driver_log_levels`- (Required) The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'
*/
  OutputFormat?: string;

  // A mapping of property names to values. Used to set Presto session properties Equivalent to using the --session flag in the Presto CLI.
  Properties?: Map<string, string>;

  /*
The HCFS URI of the script that contains SQL queries.
Conflicts with `query_list`
*/
  QueryFileUri?: string;
}

export function Dataproc_JobPrestoConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "OutputFormat",
      "The format in which query output will be displayed. See the Presto documentation for supported output formats.\n\n* `logging_config.driver_log_levels`- (Required) The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Properties",
      "A mapping of property names to values. Used to set Presto session properties Equivalent to using the --session flag in the Presto CLI.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "QueryFileUri",
      "The HCFS URI of the script that contains SQL queries.\nConflicts with `query_list`",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "QueryLists",
      "The list of SQL queries or statements to execute as part of the job.\nConflicts with `query_file_uri`",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ClientTags",
      "Presto client tags to attach to this query.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ContinueOnFailure",
      "Whether to continue executing queries if a query fails. Setting to true can be useful when executing independent parallel queries. Defaults to false.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "LoggingConfig",
      "The runtime logging config of the job",
      Dataproc_JobPrestoConfigLoggingConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
