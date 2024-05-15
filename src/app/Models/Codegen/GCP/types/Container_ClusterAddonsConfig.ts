import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_ClusterAddonsConfigKalmConfig,
  Container_ClusterAddonsConfigKalmConfig_GetTypes,
} from "./Container_ClusterAddonsConfigKalmConfig";
import {
  Container_ClusterAddonsConfigGcePersistentDiskCsiDriverConfig,
  Container_ClusterAddonsConfigGcePersistentDiskCsiDriverConfig_GetTypes,
} from "./Container_ClusterAddonsConfigGcePersistentDiskCsiDriverConfig";
import {
  Container_ClusterAddonsConfigGcpFilestoreCsiDriverConfig,
  Container_ClusterAddonsConfigGcpFilestoreCsiDriverConfig_GetTypes,
} from "./Container_ClusterAddonsConfigGcpFilestoreCsiDriverConfig";
import {
  Container_ClusterAddonsConfigHorizontalPodAutoscaling,
  Container_ClusterAddonsConfigHorizontalPodAutoscaling_GetTypes,
} from "./Container_ClusterAddonsConfigHorizontalPodAutoscaling";
import {
  Container_ClusterAddonsConfigHttpLoadBalancing,
  Container_ClusterAddonsConfigHttpLoadBalancing_GetTypes,
} from "./Container_ClusterAddonsConfigHttpLoadBalancing";
import {
  Container_ClusterAddonsConfigNetworkPolicyConfig,
  Container_ClusterAddonsConfigNetworkPolicyConfig_GetTypes,
} from "./Container_ClusterAddonsConfigNetworkPolicyConfig";
import {
  Container_ClusterAddonsConfigConfigConnectorConfig,
  Container_ClusterAddonsConfigConfigConnectorConfig_GetTypes,
} from "./Container_ClusterAddonsConfigConfigConnectorConfig";
import {
  Container_ClusterAddonsConfigGkeBackupAgentConfig,
  Container_ClusterAddonsConfigGkeBackupAgentConfig_GetTypes,
} from "./Container_ClusterAddonsConfigGkeBackupAgentConfig";
import {
  Container_ClusterAddonsConfigGcsFuseCsiDriverConfig,
  Container_ClusterAddonsConfigGcsFuseCsiDriverConfig_GetTypes,
} from "./Container_ClusterAddonsConfigGcsFuseCsiDriverConfig";
import {
  Container_ClusterAddonsConfigDnsCacheConfig,
  Container_ClusterAddonsConfigDnsCacheConfig_GetTypes,
} from "./Container_ClusterAddonsConfigDnsCacheConfig";
import {
  Container_ClusterAddonsConfigIstioConfig,
  Container_ClusterAddonsConfigIstioConfig_GetTypes,
} from "./Container_ClusterAddonsConfigIstioConfig";
import {
  Container_ClusterAddonsConfigCloudrunConfig,
  Container_ClusterAddonsConfigCloudrunConfig_GetTypes,
} from "./Container_ClusterAddonsConfigCloudrunConfig";

export interface Container_ClusterAddonsConfig {
  /*
.
The status of the Backup for GKE agent addon. It is disabled by default; Set `enabled = true` to enable.
*/
  GkeBackupAgentConfig?: Container_ClusterAddonsConfigGkeBackupAgentConfig;

  /*
.
Configuration for the KALM addon, which manages the lifecycle of k8s. It is disabled by default; Set `enabled = true` to enable.
*/
  KalmConfig?: Container_ClusterAddonsConfigKalmConfig;

  /*
.
Whether this cluster should enable the Google Compute Engine Persistent Disk Container Storage Interface (CSI) Driver. Set `enabled = true` to enable.

--Note:-- The Compute Engine persistent disk CSI Driver is enabled by default on newly created clusters for the following versions: Linux clusters: GKE version 1.18.10-gke.2100 or later, or 1.19.3-gke.2100 or later.
*/
  GcePersistentDiskCsiDriverConfig?: Container_ClusterAddonsConfigGcePersistentDiskCsiDriverConfig;

  /*
The status of the GCSFuse CSI driver addon,
which allows the usage of a gcs bucket as volumes.
It is disabled by default for Standard clusters; set `enabled = true` to enable.
It is enabled by default for Autopilot clusters with version 1.24 or later; set `enabled = true` to enable it explicitly.
See [Enable the Cloud Storage FUSE CSI driver](https://cloud.google.com/kubernetes-engine/docs/how-to/persistent-volumes/cloud-storage-fuse-csi-driver#enable) for more information.
*/
  GcsFuseCsiDriverConfig?: Container_ClusterAddonsConfigGcsFuseCsiDriverConfig;

  /*
.
The status of the NodeLocal DNSCache addon. It is disabled by default.
Set `enabled = true` to enable.

--Enabling/Disabling NodeLocal DNSCache in an existing cluster is a disruptive operation.
All cluster nodes running GKE 1.15 and higher are recreated.--
*/
  DnsCacheConfig?: Container_ClusterAddonsConfigDnsCacheConfig;

  /*
The status of the Filestore CSI driver addon,
which allows the usage of filestore instance as volumes.
It is disabled by default; set `enabled = true` to enable.
*/
  GcpFilestoreCsiDriverConfig?: Container_ClusterAddonsConfigGcpFilestoreCsiDriverConfig;

  /*
The status of the Horizontal Pod Autoscaling
addon, which increases or decreases the number of replica pods a replication controller
has based on the resource usage of the existing pods.
It is enabled by default;
set `disabled = true` to disable.
*/
  HorizontalPodAutoscaling?: Container_ClusterAddonsConfigHorizontalPodAutoscaling;

  /*
The status of the HTTP (L7) load balancing
controller addon, which makes it easy to set up HTTP load balancers for services in a
cluster. It is enabled by default; set `disabled = true` to disable.
*/
  HttpLoadBalancing?: Container_ClusterAddonsConfigHttpLoadBalancing;

  /*
.
Structure is documented below.
*/
  IstioConfig?: Container_ClusterAddonsConfigIstioConfig;

  /*
Whether we should enable the network policy addon
for the master.  This must be enabled in order to enable network policy for the nodes.
To enable this, you must also define a `network_policy` block,
otherwise nothing will happen.
It can only be disabled if the nodes already do not have network policies enabled.
Defaults to disabled; set `disabled = false` to enable.
*/
  NetworkPolicyConfig?: Container_ClusterAddonsConfigNetworkPolicyConfig;

  // . Structure is documented below.
  CloudrunConfig?: Container_ClusterAddonsConfigCloudrunConfig;

  /*
.
The status of the ConfigConnector addon. It is disabled by default; Set `enabled = true` to enable.


This example `addons_config` disables two addons:
*/
  ConfigConnectorConfig?: Container_ClusterAddonsConfigConfigConnectorConfig;
}

export function Container_ClusterAddonsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "GcsFuseCsiDriverConfig",
      "The status of the GCSFuse CSI driver addon,\nwhich allows the usage of a gcs bucket as volumes.\nIt is disabled by default for Standard clusters; set `enabled = true` to enable.\nIt is enabled by default for Autopilot clusters with version 1.24 or later; set `enabled = true` to enable it explicitly.\nSee [Enable the Cloud Storage FUSE CSI driver](https://cloud.google.com/kubernetes-engine/docs/how-to/persistent-volumes/cloud-storage-fuse-csi-driver#enable) for more information.",
      Container_ClusterAddonsConfigGcsFuseCsiDriverConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "GcpFilestoreCsiDriverConfig",
      "The status of the Filestore CSI driver addon,\nwhich allows the usage of filestore instance as volumes.\nIt is disabled by default; set `enabled = true` to enable.",
      Container_ClusterAddonsConfigGcpFilestoreCsiDriverConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "HorizontalPodAutoscaling",
      "The status of the Horizontal Pod Autoscaling\naddon, which increases or decreases the number of replica pods a replication controller\nhas based on the resource usage of the existing pods.\nIt is enabled by default;\nset `disabled = true` to disable.",
      Container_ClusterAddonsConfigHorizontalPodAutoscaling_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "HttpLoadBalancing",
      "The status of the HTTP (L7) load balancing\ncontroller addon, which makes it easy to set up HTTP load balancers for services in a\ncluster. It is enabled by default; set `disabled = true` to disable.",
      Container_ClusterAddonsConfigHttpLoadBalancing_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "IstioConfig",
      ".\nStructure is documented below.",
      Container_ClusterAddonsConfigIstioConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "NetworkPolicyConfig",
      "Whether we should enable the network policy addon\nfor the master.  This must be enabled in order to enable network policy for the nodes.\nTo enable this, you must also define a `network_policy` block,\notherwise nothing will happen.\nIt can only be disabled if the nodes already do not have network policies enabled.\nDefaults to disabled; set `disabled = false` to enable.",
      Container_ClusterAddonsConfigNetworkPolicyConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "KalmConfig",
      ".\nConfiguration for the KALM addon, which manages the lifecycle of k8s. It is disabled by default; Set `enabled = true` to enable.",
      Container_ClusterAddonsConfigKalmConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "GcePersistentDiskCsiDriverConfig",
      ".\nWhether this cluster should enable the Google Compute Engine Persistent Disk Container Storage Interface (CSI) Driver. Set `enabled = true` to enable.\n\n**Note:** The Compute Engine persistent disk CSI Driver is enabled by default on newly created clusters for the following versions: Linux clusters: GKE version 1.18.10-gke.2100 or later, or 1.19.3-gke.2100 or later.",
      Container_ClusterAddonsConfigGcePersistentDiskCsiDriverConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "CloudrunConfig",
      ". Structure is documented below.",
      Container_ClusterAddonsConfigCloudrunConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ConfigConnectorConfig",
      ".\nThe status of the ConfigConnector addon. It is disabled by default; Set `enabled = true` to enable.\n\n\nThis example `addons_config` disables two addons:",
      Container_ClusterAddonsConfigConfigConnectorConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "GkeBackupAgentConfig",
      ".\nThe status of the Backup for GKE agent addon. It is disabled by default; Set `enabled = true` to enable.",
      Container_ClusterAddonsConfigGkeBackupAgentConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DnsCacheConfig",
      ".\nThe status of the NodeLocal DNSCache addon. It is disabled by default.\nSet `enabled = true` to enable.\n\n**Enabling/Disabling NodeLocal DNSCache in an existing cluster is a disruptive operation.\nAll cluster nodes running GKE 1.15 and higher are recreated.**",
      Container_ClusterAddonsConfigDnsCacheConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
