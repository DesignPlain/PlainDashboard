export interface ClusterDatabaseEncryption {
  /*
the key to use to encrypt/decrypt secrets.  See the [DatabaseEncryption definition](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters#Cluster.DatabaseEncryption) for more information.

<a name="nested_enable_k8s_beta_apis"></a>The `enable_k8s_beta_apis` block supports:
*/
  KeyName?: string;

  // `ENCRYPTED` or `DECRYPTED`
  State?: string;
}
