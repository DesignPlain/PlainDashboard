import { AzureClusterControlPlaneMainVolume } from "./AzureClusterControlPlaneMainVolume";
import { AzureClusterControlPlaneProxyConfig } from "./AzureClusterControlPlaneProxyConfig";
import { AzureClusterControlPlaneRootVolume } from "./AzureClusterControlPlaneRootVolume";
import { AzureClusterControlPlaneSshConfig } from "./AzureClusterControlPlaneSshConfig";
import { AzureClusterControlPlaneDatabaseEncryption } from "./AzureClusterControlPlaneDatabaseEncryption";
import { AzureClusterControlPlaneReplicaPlacement } from "./AzureClusterControlPlaneReplicaPlacement";

export interface AzureClusterControlPlane {
  // Optional. Configuration related to application-layer secrets encryption.
  DatabaseEncryption?: AzureClusterControlPlaneDatabaseEncryption;

  // Configuration for where to place the control plane replicas. Up to three replica placement instances can be specified. If replica_placements is set, the replica placement instances will be applied to the three control plane replicas as evenly as possible.
  ReplicaPlacements?: Array<AzureClusterControlPlaneReplicaPlacement>;

  // The ARM ID of the subnet where the control plane VMs are deployed. Example: `/subscriptions//resourceGroups//providers/Microsoft.Network/virtualNetworks//subnets/default`.
  SubnetId?: string;

  // Optional. A set of tags to apply to all underlying control plane Azure resources.
  Tags?: Map<string, string>;

  // The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAzureServerConfig.
  Version?: string;

  // Optional. Configuration related to the main volume provisioned for each control plane replica. The main volume is in charge of storing all of the cluster's etcd state. When unspecified, it defaults to a 8-GiB Azure Disk.
  MainVolume?: AzureClusterControlPlaneMainVolume;

  // Proxy configuration for outbound HTTP(S) traffic.
  ProxyConfig?: AzureClusterControlPlaneProxyConfig;

  // Optional. Configuration related to the root volume provisioned for each control plane replica. When unspecified, it defaults to 32-GiB Azure Disk.
  RootVolume?: AzureClusterControlPlaneRootVolume;

  // SSH configuration for how to access the underlying control plane machines.
  SshConfig?: AzureClusterControlPlaneSshConfig;

  // Optional. The Azure VM size name. Example: `Standard_DS2_v2`. For available VM sizes, see https://docs.microsoft.com/en-us/azure/virtual-machines/vm-naming-conventions. When unspecified, it defaults to `Standard_DS2_v2`.
  VmSize?: string;
}
