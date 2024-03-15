export interface TaskNotebookInfrastructureSpecContainerImage {
  // Container image to use.
  Image?: string;

  // A list of Java JARS to add to the classpath. Valid input includes Cloud Storage URIs to Jar binaries. For example, gs://bucket-name/my/path/to/file.jar
  JavaJars?: Array<string>;

  // Override to common configuration of open source components installed on the Dataproc cluster. The properties to set on daemon config files. Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. For more information, see Cluster properties.
  Properties?: Map<string, string>;

  // A list of python packages to be installed. Valid formats include Cloud Storage URI to a PIP installable library. For example, gs://bucket-name/my/path/to/lib.tar.gz
  PythonPackages?: Array<string>;
}
