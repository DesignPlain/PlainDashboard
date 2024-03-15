export interface ClusterSecondaryConfig {
  /*
Name of the primary cluster must be in the format
'projects/{project}/locations/{location}/clusters/{cluster_id}'
*/
  PrimaryClusterName?: string;
}
