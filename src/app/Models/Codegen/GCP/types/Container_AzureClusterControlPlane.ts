import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  container_AzureClusterControlPlaneRootVolume,
  container_AzureClusterControlPlaneRootVolume_GetTypes,
} from "./container_AzureClusterControlPlaneRootVolume";
import {
  container_AzureClusterControlPlaneDatabaseEncryption,
  container_AzureClusterControlPlaneDatabaseEncryption_GetTypes,
} from "./container_AzureClusterControlPlaneDatabaseEncryption";
import {
  container_AzureClusterControlPlaneMainVolume,
  container_AzureClusterControlPlaneMainVolume_GetTypes,
} from "./container_AzureClusterControlPlaneMainVolume";
import {
  container_AzureClusterControlPlaneSshConfig,
  container_AzureClusterControlPlaneSshConfig_GetTypes,
} from "./container_AzureClusterControlPlaneSshConfig";
import {
  container_AzureClusterControlPlaneProxyConfig,
  container_AzureClusterControlPlaneProxyConfig_GetTypes,
} from "./container_AzureClusterControlPlaneProxyConfig";
import {
  container_AzureClusterControlPlaneReplicaPlacement,
  container_AzureClusterControlPlaneReplicaPlacement_GetTypes,
} from "./container_AzureClusterControlPlaneReplicaPlacement";

export interface container_AzureClusterControlPlane {
  // Optional. The Azure VM size name. Example: `Standard_DS2_v2`. For available VM sizes, see https://docs.microsoft.com/en-us/azure/virtual-machines/vm-naming-conventions. When unspecified, it defaults to `Standard_DS2_v2`.
  vmSize?: string;

  // Proxy configuration for outbound HTTP(S) traffic.
  proxyConfig?: container_AzureClusterControlPlaneProxyConfig;

  // Configuration for where to place the control plane replicas. Up to three replica placement instances can be specified. If replica_placements is set, the replica placement instances will be applied to the three control plane replicas as evenly as possible.
  replicaPlacements?: Array<container_AzureClusterControlPlaneReplicaPlacement>;

  // Optional. Configuration related to the root volume provisioned for each control plane replica. When unspecified, it defaults to 32-GiB Azure Disk.
  rootVolume?: container_AzureClusterControlPlaneRootVolume;

  // Optional. A set of tags to apply to all underlying control plane Azure resources.
  tags?: Map<string, string>;

  // The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAzureServerConfig.
  version?: string;

  // Optional. Configuration related to application-layer secrets encryption.
  databaseEncryption?: container_AzureClusterControlPlaneDatabaseEncryption;

  // Optional. Configuration related to the main volume provisioned for each control plane replica. The main volume is in charge of storing all of the cluster's etcd state. When unspecified, it defaults to a 8-GiB Azure Disk.
  mainVolume?: container_AzureClusterControlPlaneMainVolume;

  // SSH configuration for how to access the underlying control plane machines.
  sshConfig?: container_AzureClusterControlPlaneSshConfig;

  // The ARM ID of the subnet where the control plane VMs are deployed. Example: `/subscriptions//resourceGroups//providers/Microsoft.Network/virtualNetworks//subnets/default`.
  subnetId?: string;
}

export function container_AzureClusterControlPlane_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "vmSize",
      "Optional. The Azure VM size name. Example: `Standard_DS2_v2`. For available VM sizes, see https://docs.microsoft.com/en-us/azure/virtual-machines/vm-naming-conventions. When unspecified, it defaults to `Standard_DS2_v2`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "proxyConfig",
      "Proxy configuration for outbound HTTP(S) traffic.",
      container_AzureClusterControlPlaneProxyConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "rootVolume",
      "Optional. Configuration related to the root volume provisioned for each control plane replica. When unspecified, it defaults to 32-GiB Azure Disk.",
      container_AzureClusterControlPlaneRootVolume_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "tags",
      "Optional. A set of tags to apply to all underlying control plane Azure resources.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "mainVolume",
      "Optional. Configuration related to the main volume provisioned for each control plane replica. The main volume is in charge of storing all of the cluster's etcd state. When unspecified, it defaults to a 8-GiB Azure Disk.",
      container_AzureClusterControlPlaneMainVolume_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sshConfig",
      "SSH configuration for how to access the underlying control plane machines.",
      container_AzureClusterControlPlaneSshConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "replicaPlacements",
      "Configuration for where to place the control plane replicas. Up to three replica placement instances can be specified. If replica_placements is set, the replica placement instances will be applied to the three control plane replicas as evenly as possible.",
      container_AzureClusterControlPlaneReplicaPlacement_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "version",
      "The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAzureServerConfig.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "databaseEncryption",
      "Optional. Configuration related to application-layer secrets encryption.",
      container_AzureClusterControlPlaneDatabaseEncryption_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "subnetId",
      "The ARM ID of the subnet where the control plane VMs are deployed. Example: `/subscriptions//resourceGroups//providers/Microsoft.Network/virtualNetworks//subnets/default`.",
      [],
      true,
      true,
    ),
  ];
}
