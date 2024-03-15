import { JobPigConfigLoggingConfig } from "./JobPigConfigLoggingConfig";

export interface JobPigConfig {
  // Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries. Defaults to false.
  ContinueOnFailure?: boolean;

  /*
HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. Can contain Pig UDFs.

- `logging_config.driver_log_levels`- (Required) The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'
*/
  JarFileUris?: Array<string>;

  // The runtime logging config of the job
  LoggingConfig?: JobPigConfigLoggingConfig;

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

  // Mapping of query variable names to values (equivalent to the Pig command: `name=[value]`).
  ScriptVariables?: Map<string, string>;
}
