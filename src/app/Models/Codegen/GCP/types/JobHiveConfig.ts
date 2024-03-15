export interface JobHiveConfig {
  // HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. Can contain Hive SerDes and UDFs.
  JarFileUris?: Array<string>;

  // A mapping of property names and values, used to configure Hive. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in `/etc/hadoop/conf/--site.xml`, `/etc/hive/conf/hive-site.xml`, and classes in user code..
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

  // Mapping of query variable names to values (equivalent to the Hive command: `SET name="value";`).
  ScriptVariables?: Map<string, string>;

  // Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries. Defaults to false.
  ContinueOnFailure?: boolean;
}
