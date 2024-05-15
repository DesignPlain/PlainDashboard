import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_JobSparksqlConfigLoggingConfig,
  Dataproc_JobSparksqlConfigLoggingConfig_GetTypes,
} from "./Dataproc_JobSparksqlConfigLoggingConfig";

export interface Dataproc_JobSparksqlConfig {
  // A mapping of property names to values, used to configure Spark SQL's SparkConf. Properties that conflict with values set by the Cloud Dataproc API may be overwritten.
  Properties?: Map<string, string>;

  /*
The HCFS URI of the script that contains SQL queries.
Conflicts with `query_list`
*/
  QueryFileUri?: string;

  /*
The list of SQL queries or statements to execute as part of the job.
Conflicts with `query_file_uri`
*/
  QueryLists?: Array<string>;

  // Mapping of query variable names to values (equivalent to the Spark SQL command: `SET name="value";`).
  ScriptVariables?: Map<string, string>;

  /*
HCFS URIs of jar files to be added to the Spark CLASSPATH.

- `logging_config.driver_log_levels`- (Required) The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'
*/
  JarFileUris?: Array<string>;

  // The runtime logging config of the job
  LoggingConfig?: Dataproc_JobSparksqlConfigLoggingConfig;
}

export function Dataproc_JobSparksqlConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "JarFileUris",
      "HCFS URIs of jar files to be added to the Spark CLASSPATH.\n\n* `logging_config.driver_log_levels`- (Required) The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "LoggingConfig",
      "The runtime logging config of the job",
      Dataproc_JobSparksqlConfigLoggingConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Properties",
      "A mapping of property names to values, used to configure Spark SQL's SparkConf. Properties that conflict with values set by the Cloud Dataproc API may be overwritten.",
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
      InputType.Map,
      "ScriptVariables",
      'Mapping of query variable names to values (equivalent to the Spark SQL command: `SET name="value";`).',
      InputType_Map_GetTypes(),
      false,
      true,
    ),
  ];
}
