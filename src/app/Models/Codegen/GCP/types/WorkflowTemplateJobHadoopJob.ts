import { WorkflowTemplateJobHadoopJobLoggingConfig } from "./WorkflowTemplateJobHadoopJobLoggingConfig";

export interface WorkflowTemplateJobHadoopJob {
  // Jar file URIs to add to the CLASSPATHs of the Hadoop driver and tasks.
  JarFileUris?: Array<string>;

  // The runtime log config for job execution.
  LoggingConfig?: WorkflowTemplateJobHadoopJobLoggingConfig;

  // The name of the driver's main class. The jar file containing the class must be in the default CLASSPATH or specified in `jar_file_uris`.
  MainClass?: string;

  // The HCFS URI of the jar file containing the main class. Examples: 'gs://foo-bucket/analytics-binaries/extract-useful-metrics-mr.jar' 'hdfs:/tmp/test-samples/custom-wordcount.jar' 'file:///home/usr/lib/hadoop-mapreduce/hadoop-mapreduce-examples.jar'
  MainJarFileUri?: string;

  // A mapping of property names to values, used to configure Hadoop. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/--site and classes in user code.
  Properties?: Map<string, string>;

  // HCFS URIs of archives to be extracted in the working directory of Hadoop drivers and tasks. Supported file types: .jar, .tar, .tar.gz, .tgz, or .zip.
  ArchiveUris?: Array<string>;

  // The arguments to pass to the driver. Do not include arguments, such as `-libjars` or `-Dfoo=bar`, that can be set as job properties, since a collision may occur that causes an incorrect job submission.
  Args?: Array<string>;

  // HCFS (Hadoop Compatible Filesystem) URIs of files to be copied to the working directory of Hadoop drivers and distributed tasks. Useful for naively parallel tasks.
  FileUris?: Array<string>;
}
