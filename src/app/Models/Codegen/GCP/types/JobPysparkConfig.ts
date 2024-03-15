import { JobPysparkConfigLoggingConfig } from "./JobPysparkConfigLoggingConfig";

export interface JobPysparkConfig {
  // The HCFS URI of the main Python file to use as the driver. Must be a .py file.
  MainPythonFileUri?: string;

  /*
A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in `/etc/spark/conf/spark-defaults.conf` and classes in user code.

- `logging_config.driver_log_levels`- (Required) The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'
*/
  Properties?: Map<string, string>;

  // HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip.
  PythonFileUris?: Array<string>;

  // HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.
  ArchiveUris?: Array<string>;

  // The arguments to pass to the driver.
  Args?: Array<string>;

  // HCFS URIs of files to be copied to the working directory of Python drivers and distributed tasks. Useful for naively parallel tasks.
  FileUris?: Array<string>;

  // HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks.
  JarFileUris?: Array<string>;

  // The runtime logging config of the job
  LoggingConfig?: JobPysparkConfigLoggingConfig;
}
