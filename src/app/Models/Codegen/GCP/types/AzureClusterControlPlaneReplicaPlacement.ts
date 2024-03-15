export interface AzureClusterControlPlaneReplicaPlacement {
  // For a given replica, the Azure availability zone where to provision the control plane VM and the ETCD disk.
  AzureAvailabilityZone?: string;

  // For a given replica, the ARM ID of the subnet where the control plane VM is deployed. Make sure it's a subnet under the virtual network in the cluster configuration.
  SubnetId?: string;
}
