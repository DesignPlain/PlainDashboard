import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_JobPigConfigLoggingConfig,
  Dataproc_JobPigConfigLoggingConfig_GetTypes,
} from "./Dataproc_JobPigConfigLoggingConfig";

export interface Dataproc_JobPigConfig {
  // Mapping of query variable names to values (equivalent to the Pig command: `name=[value]`).
  ScriptVariables?: Map<string, string>;

  // Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries. Defaults to false.
  ContinueOnFailure?: boolean;

  /*
HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. Can contain Pig UDFs.

- `logging_config.driver_log_levels`- (Required) The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'
*/
  JarFileUris?: Array<string>;

  // The runtime logging config of the job
  LoggingConfig?: Dataproc_JobPigConfigLoggingConfig;

  // A mapping of property names to values, used to configure Pig. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in `/etc/hadoop/conf/--site.xml`, `/etc/pig/conf/pig.properties`, and classes in user code.
  Properties?: Map<string, string>;

  /*
HCFS URI of file containing Hive script to execute as the job.
Conflicts with `query_list`
*/
  QueryFileUri?: string;

  /*
The list of Hive queries or statements to execute as part of the job.
Conflicts with `query_file_uri`
*/
  QueryLists?: Array<string>;
}

export function Dataproc_JobPigConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "ScriptVariables",
      "Mapping of query variable names to values (equivalent to the Pig command: `name=[value]`).",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ContinueOnFailure",
      "Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries. Defaults to false.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "JarFileUris",
      "HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. Can contain Pig UDFs.\n\n* `logging_config.driver_log_levels`- (Required) The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "LoggingConfig",
      "The runtime logging config of the job",
      Dataproc_JobPigConfigLoggingConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Properties",
      "A mapping of property names to values, used to configure Pig. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in `/etc/hadoop/conf/*-site.xml`, `/etc/pig/conf/pig.properties`, and classes in user code.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "QueryFileUri",
      "HCFS URI of file containing Hive script to execute as the job.\nConflicts with `query_list`",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "QueryLists",
      "The list of Hive queries or statements to execute as part of the job.\nConflicts with `query_file_uri`",
      InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
