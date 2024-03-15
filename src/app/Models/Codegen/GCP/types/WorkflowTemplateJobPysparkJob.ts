import { WorkflowTemplateJobPysparkJobLoggingConfig } from "./WorkflowTemplateJobPysparkJobLoggingConfig";

export interface WorkflowTemplateJobPysparkJob {
  // HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
  ArchiveUris?: Array<string>;

  // The arguments to pass to the driver. Do not include arguments, such as `--conf`, that can be set as job properties, since a collision may occur that causes an incorrect job submission.
  Args?: Array<string>;

  // HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.
  FileUris?: Array<string>;

  // HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks.
  JarFileUris?: Array<string>;

  // The runtime log config for job execution.
  LoggingConfig?: WorkflowTemplateJobPysparkJobLoggingConfig;

  // Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file.
  MainPythonFileUri?: string;

  // A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.
  Properties?: Map<string, string>;

  // HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip.
  PythonFileUris?: Array<string>;
}
