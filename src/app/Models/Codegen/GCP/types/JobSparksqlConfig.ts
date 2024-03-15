import { JobSparksqlConfigLoggingConfig } from "./JobSparksqlConfigLoggingConfig";

export interface JobSparksqlConfig {
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
  LoggingConfig?: JobSparksqlConfigLoggingConfig;

  // A mapping of property names to values, used to configure Spark SQL's SparkConf. Properties that conflict with values set by the Cloud Dataproc API may be overwritten.
  Properties?: Map<string, string>;

  /*
The HCFS URI of the script that contains SQL queries.
Conflicts with `query_list`
*/
  QueryFileUri?: string;
}
