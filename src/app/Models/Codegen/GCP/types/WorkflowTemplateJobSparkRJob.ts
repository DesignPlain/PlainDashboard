import { WorkflowTemplateJobSparkRJobLoggingConfig } from "./WorkflowTemplateJobSparkRJobLoggingConfig";

export interface WorkflowTemplateJobSparkRJob {
  // HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
  ArchiveUris?: Array<string>;

  // The arguments to pass to the driver. Do not include arguments, such as `--conf`, that can be set as job properties, since a collision may occur that causes an incorrect job submission.
  Args?: Array<string>;

  // HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.
  FileUris?: Array<string>;

  // The runtime log config for job execution.
  LoggingConfig?: WorkflowTemplateJobSparkRJobLoggingConfig;

  // Required. The HCFS URI of the main R file to use as the driver. Must be a .R file.
  MainRFileUri?: string;

  // A mapping of property names to values, used to configure SparkR. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.
  Properties?: Map<string, string>;
}
