import { JobSparkConfigLoggingConfig } from "./JobSparkConfigLoggingConfig";

export interface JobSparkConfig {
  // HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.
  ArchiveUris?: Array<string>;

  // The arguments to pass to the driver.
  Args?: Array<string>;

  // HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks. Useful for naively parallel tasks.
  FileUris?: Array<string>;

  // HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.
  JarFileUris?: Array<string>;

  // The runtime logging config of the job
  LoggingConfig?: JobSparkConfigLoggingConfig;

  /*
The class containing the main method of the driver. Must be in a
provided jar or jar that is already on the classpath. Conflicts with `main_jar_file_uri`
*/
  MainClass?: string;

  /*
The HCFS URI of jar file containing
the driver jar. Conflicts with `main_class`
*/
  MainJarFileUri?: string;

  /*
A mapping of property names to values, used to configure Spark. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in `/etc/spark/conf/spark-defaults.conf` and classes in user code.

- `logging_config.driver_log_levels`- (Required) The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'
*/
  Properties?: Map<string, string>;
}
