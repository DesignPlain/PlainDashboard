export interface ClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig {
  /*
The components that should be installed in this Dataproc cluster. The key must be a string from the   
KubernetesComponent enumeration. The value is the version of the software to be installed. At least one entry must be specified.
- --NOTE-- : `component_version[SPARK]` is mandatory to set, or the creation of the cluster will fail.
*/
  ComponentVersion?: Map<string, string>;

  /*
The properties to set on daemon config files. Property keys are specified in prefix:property format, 
for example spark:spark.kubernetes.container.image.
*/
  Properties?: Map<string, string>;
}
