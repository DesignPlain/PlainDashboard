export interface VMwareClusterVcenter {
  // The name of the vCenter storage policy for the user cluster.
  StoragePolicyName?: string;

  /*
(Output)
The vCenter IP address.
*/
  Address?: string;

  // Contains the vCenter CA certificate public key for SSL verification.
  CaCertData?: string;

  // The name of the vCenter cluster for the user cluster.
  Cluster?: string;

  // The name of the vCenter datacenter for the user cluster.
  Datacenter?: string;

  // The name of the vCenter datastore for the user cluster.
  Datastore?: string;

  // The name of the vCenter folder for the user cluster.
  Folder?: string;

  // The name of the vCenter resource pool for the user cluster.
  ResourcePool?: string;
}
