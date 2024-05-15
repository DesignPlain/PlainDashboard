import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_AzureClusterControlPlaneDatabaseEncryption,
  Container_AzureClusterControlPlaneDatabaseEncryption_GetTypes,
} from "./Container_AzureClusterControlPlaneDatabaseEncryption";
import {
  Container_AzureClusterControlPlaneProxyConfig,
  Container_AzureClusterControlPlaneProxyConfig_GetTypes,
} from "./Container_AzureClusterControlPlaneProxyConfig";
import {
  Container_AzureClusterControlPlaneReplicaPlacement,
  Container_AzureClusterControlPlaneReplicaPlacement_GetTypes,
} from "./Container_AzureClusterControlPlaneReplicaPlacement";
import {
  Container_AzureClusterControlPlaneSshConfig,
  Container_AzureClusterControlPlaneSshConfig_GetTypes,
} from "./Container_AzureClusterControlPlaneSshConfig";
import {
  Container_AzureClusterControlPlaneMainVolume,
  Container_AzureClusterControlPlaneMainVolume_GetTypes,
} from "./Container_AzureClusterControlPlaneMainVolume";
import {
  Container_AzureClusterControlPlaneRootVolume,
  Container_AzureClusterControlPlaneRootVolume_GetTypes,
} from "./Container_AzureClusterControlPlaneRootVolume";

export interface Container_AzureClusterControlPlane {
  // Optional. Configuration related to the main volume provisioned for each control plane replica. The main volume is in charge of storing all of the cluster's etcd state. When unspecified, it defaults to a 8-GiB Azure Disk.
  MainVolume?: Container_AzureClusterControlPlaneMainVolume;

  // Optional. Configuration related to the root volume provisioned for each control plane replica. When unspecified, it defaults to 32-GiB Azure Disk.
  RootVolume?: Container_AzureClusterControlPlaneRootVolume;

  // The ARM ID of the subnet where the control plane VMs are deployed. Example: `/subscriptions//resourceGroups//providers/Microsoft.Network/virtualNetworks//subnets/default`.
  SubnetId?: string;

  // Optional. The Azure VM size name. Example: `Standard_DS2_v2`. For available VM sizes, see https://docs.microsoft.com/en-us/azure/virtual-machines/vm-naming-conventions. When unspecified, it defaults to `Standard_DS2_v2`.
  VmSize?: string;

  // The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAzureServerConfig.
  Version?: string;

  // Optional. Configuration related to application-layer secrets encryption.
  DatabaseEncryption?: Container_AzureClusterControlPlaneDatabaseEncryption;

  // Proxy configuration for outbound HTTP(S) traffic.
  ProxyConfig?: Container_AzureClusterControlPlaneProxyConfig;

  // Configuration for where to place the control plane replicas. Up to three replica placement instances can be specified. If replica_placements is set, the replica placement instances will be applied to the three control plane replicas as evenly as possible.
  ReplicaPlacements?: Array<Container_AzureClusterControlPlaneReplicaPlacement>;

  // SSH configuration for how to access the underlying control plane machines.
  SshConfig?: Container_AzureClusterControlPlaneSshConfig;

  // Optional. A set of tags to apply to all underlying control plane Azure resources.
  Tags?: Map<string, string>;
}

export function Container_AzureClusterControlPlane_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "MainVolume",
      "Optional. Configuration related to the main volume provisioned for each control plane replica. The main volume is in charge of storing all of the cluster's etcd state. When unspecified, it defaults to a 8-GiB Azure Disk.",
      Container_AzureClusterControlPlaneMainVolume_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "RootVolume",
      "Optional. Configuration related to the root volume provisioned for each control plane replica. When unspecified, it defaults to 32-GiB Azure Disk.",
      Container_AzureClusterControlPlaneRootVolume_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "VmSize",
      "Optional. The Azure VM size name. Example: `Standard_DS2_v2`. For available VM sizes, see https://docs.microsoft.com/en-us/azure/virtual-machines/vm-naming-conventions. When unspecified, it defaults to `Standard_DS2_v2`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Tags",
      "Optional. A set of tags to apply to all underlying control plane Azure resources.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "SubnetId",
      "The ARM ID of the subnet where the control plane VMs are deployed. Example: `/subscriptions//resourceGroups//providers/Microsoft.Network/virtualNetworks//subnets/default`.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Version",
      "The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAzureServerConfig.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DatabaseEncryption",
      "Optional. Configuration related to application-layer secrets encryption.",
      Container_AzureClusterControlPlaneDatabaseEncryption_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ProxyConfig",
      "Proxy configuration for outbound HTTP(S) traffic.",
      Container_AzureClusterControlPlaneProxyConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ReplicaPlacements",
      "Configuration for where to place the control plane replicas. Up to three replica placement instances can be specified. If replica_placements is set, the replica placement instances will be applied to the three control plane replicas as evenly as possible.",
      Container_AzureClusterControlPlaneReplicaPlacement_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SshConfig",
      "SSH configuration for how to access the underlying control plane machines.",
      Container_AzureClusterControlPlaneSshConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
