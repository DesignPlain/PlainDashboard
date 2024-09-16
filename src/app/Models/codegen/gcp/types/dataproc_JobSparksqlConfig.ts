import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dataproc_JobSparksqlConfigLoggingConfig,
  dataproc_JobSparksqlConfigLoggingConfig_GetTypes,
} from './dataproc_JobSparksqlConfigLoggingConfig';

export interface dataproc_JobSparksqlConfig {
  /*
The list of SQL queries or statements to execute as part of the job.
Conflicts with `query_file_uri`
*/
  queryLists?: Array<string>;

  // Mapping of query variable names to values (equivalent to the Spark SQL command: `SET name="value";`).
  scriptVariables?: Map<string, string>;

  /*
HCFS URIs of jar files to be added to the Spark CLASSPATH.

- `logging_config.driver_log_levels`- (Required) The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'
*/
  jarFileUris?: Array<string>;

  // The runtime logging config of the job
  loggingConfig?: dataproc_JobSparksqlConfigLoggingConfig;

  // A mapping of property names to values, used to configure Spark SQL's SparkConf. Properties that conflict with values set by the Cloud Dataproc API may be overwritten.
  properties?: Map<string, string>;

  /*
The HCFS URI of the script that contains SQL queries.
Conflicts with `query_list`
*/
  queryFileUri?: string;
}

export function dataproc_JobSparksqlConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      'scriptVariables',
      'Mapping of query variable names to values (equivalent to the Spark SQL command: `SET name="value";`).',
      () => InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'jarFileUris',
      "HCFS URIs of jar files to be added to the Spark CLASSPATH.\n\n* `logging_config.driver_log_levels`- (Required) The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'",
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'loggingConfig',
      'The runtime logging config of the job',
      () => dataproc_JobSparksqlConfigLoggingConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      'properties',
      "A mapping of property names to values, used to configure Spark SQL's SparkConf. Properties that conflict with values set by the Cloud Dataproc API may be overwritten.",
      () => InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'queryFileUri',
      'The HCFS URI of the script that contains SQL queries.\nConflicts with `query_list`',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'queryLists',
      'The list of SQL queries or statements to execute as part of the job.\nConflicts with `query_file_uri`',
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
