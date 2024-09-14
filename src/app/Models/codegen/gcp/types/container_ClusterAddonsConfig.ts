import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  container_ClusterAddonsConfigDnsCacheConfig,
  container_ClusterAddonsConfigDnsCacheConfig_GetTypes,
} from "./container_ClusterAddonsConfigDnsCacheConfig";
import {
  container_ClusterAddonsConfigHorizontalPodAutoscaling,
  container_ClusterAddonsConfigHorizontalPodAutoscaling_GetTypes,
} from "./container_ClusterAddonsConfigHorizontalPodAutoscaling";
import {
  container_ClusterAddonsConfigIstioConfig,
  container_ClusterAddonsConfigIstioConfig_GetTypes,
} from "./container_ClusterAddonsConfigIstioConfig";
import {
  container_ClusterAddonsConfigNetworkPolicyConfig,
  container_ClusterAddonsConfigNetworkPolicyConfig_GetTypes,
} from "./container_ClusterAddonsConfigNetworkPolicyConfig";
import {
  container_ClusterAddonsConfigGcpFilestoreCsiDriverConfig,
  container_ClusterAddonsConfigGcpFilestoreCsiDriverConfig_GetTypes,
} from "./container_ClusterAddonsConfigGcpFilestoreCsiDriverConfig";
import {
  container_ClusterAddonsConfigGkeBackupAgentConfig,
  container_ClusterAddonsConfigGkeBackupAgentConfig_GetTypes,
} from "./container_ClusterAddonsConfigGkeBackupAgentConfig";
import {
  container_ClusterAddonsConfigHttpLoadBalancing,
  container_ClusterAddonsConfigHttpLoadBalancing_GetTypes,
} from "./container_ClusterAddonsConfigHttpLoadBalancing";
import {
  container_ClusterAddonsConfigConfigConnectorConfig,
  container_ClusterAddonsConfigConfigConnectorConfig_GetTypes,
} from "./container_ClusterAddonsConfigConfigConnectorConfig";
import {
  container_ClusterAddonsConfigGcsFuseCsiDriverConfig,
  container_ClusterAddonsConfigGcsFuseCsiDriverConfig_GetTypes,
} from "./container_ClusterAddonsConfigGcsFuseCsiDriverConfig";
import {
  container_ClusterAddonsConfigKalmConfig,
  container_ClusterAddonsConfigKalmConfig_GetTypes,
} from "./container_ClusterAddonsConfigKalmConfig";
import {
  container_ClusterAddonsConfigCloudrunConfig,
  container_ClusterAddonsConfigCloudrunConfig_GetTypes,
} from "./container_ClusterAddonsConfigCloudrunConfig";
import {
  container_ClusterAddonsConfigGcePersistentDiskCsiDriverConfig,
  container_ClusterAddonsConfigGcePersistentDiskCsiDriverConfig_GetTypes,
} from "./container_ClusterAddonsConfigGcePersistentDiskCsiDriverConfig";

export interface container_ClusterAddonsConfig {
  /*
.
The status of the ConfigConnector addon. It is disabled by default; Set `enabled = true` to enable.


This example `addons_config` disables two addons:
*/
  configConnectorConfig?: container_ClusterAddonsConfigConfigConnectorConfig;

  /*
.
The status of the NodeLocal DNSCache addon. It is disabled by default.
Set `enabled = true` to enable.

--Enabling/Disabling NodeLocal DNSCache in an existing cluster is a disruptive operation.
All cluster nodes running GKE 1.15 and higher are recreated.--
*/
  dnsCacheConfig?: container_ClusterAddonsConfigDnsCacheConfig;

  /*
The status of the GCSFuse CSI driver addon,
which allows the usage of a gcs bucket as volumes.
It is disabled by default for Standard clusters; set `enabled = true` to enable.
It is enabled by default for Autopilot clusters with version 1.24 or later; set `enabled = true` to enable it explicitly.
See [Enable the Cloud Storage FUSE CSI driver](https://cloud.google.com/kubernetes-engine/docs/how-to/persistent-volumes/cloud-storage-fuse-csi-driver#enable) for more information.
*/
  gcsFuseCsiDriverConfig?: container_ClusterAddonsConfigGcsFuseCsiDriverConfig;

  /*
The status of the Horizontal Pod Autoscaling
addon, which increases or decreases the number of replica pods a replication controller
has based on the resource usage of the existing pods.
It is enabled by default;
set `disabled = true` to disable.
*/
  horizontalPodAutoscaling?: container_ClusterAddonsConfigHorizontalPodAutoscaling;

  /*
.
Structure is documented below.
*/
  istioConfig?: container_ClusterAddonsConfigIstioConfig;

  /*
.
Configuration for the KALM addon, which manages the lifecycle of k8s. It is disabled by default; Set `enabled = true` to enable.
*/
  kalmConfig?: container_ClusterAddonsConfigKalmConfig;

  /*
Whether we should enable the network policy addon
for the master.  This must be enabled in order to enable network policy for the nodes.
To enable this, you must also define a `network_policy` block,
otherwise nothing will happen.
It can only be disabled if the nodes already do not have network policies enabled.
Defaults to disabled; set `disabled = false` to enable.
*/
  networkPolicyConfig?: container_ClusterAddonsConfigNetworkPolicyConfig;

  // . Structure is documented below.
  cloudrunConfig?: container_ClusterAddonsConfigCloudrunConfig;

  /*
.
Whether this cluster should enable the Google Compute Engine Persistent Disk Container Storage Interface (CSI) Driver. Set `enabled = true` to enable.

--Note:-- The Compute Engine persistent disk CSI Driver is enabled by default on newly created clusters for the following versions: Linux clusters: GKE version 1.18.10-gke.2100 or later, or 1.19.3-gke.2100 or later.
*/
  gcePersistentDiskCsiDriverConfig?: container_ClusterAddonsConfigGcePersistentDiskCsiDriverConfig;

  /*
The status of the Filestore CSI driver addon,
which allows the usage of filestore instance as volumes.
It is disabled by default; set `enabled = true` to enable.
*/
  gcpFilestoreCsiDriverConfig?: container_ClusterAddonsConfigGcpFilestoreCsiDriverConfig;

  /*
.
The status of the Backup for GKE agent addon. It is disabled by default; Set `enabled = true` to enable.
*/
  gkeBackupAgentConfig?: container_ClusterAddonsConfigGkeBackupAgentConfig;

  /*
The status of the HTTP (L7) load balancing
controller addon, which makes it easy to set up HTTP load balancers for services in a
cluster. It is enabled by default; set `disabled = true` to disable.
*/
  httpLoadBalancing?: container_ClusterAddonsConfigHttpLoadBalancing;
}

export function container_ClusterAddonsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "httpLoadBalancing",
      "The status of the HTTP (L7) load balancing\ncontroller addon, which makes it easy to set up HTTP load balancers for services in a\ncluster. It is enabled by default; set `disabled = true` to disable.",
      () => container_ClusterAddonsConfigHttpLoadBalancing_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "gcsFuseCsiDriverConfig",
      "The status of the GCSFuse CSI driver addon,\nwhich allows the usage of a gcs bucket as volumes.\nIt is disabled by default for Standard clusters; set `enabled = true` to enable.\nIt is enabled by default for Autopilot clusters with version 1.24 or later; set `enabled = true` to enable it explicitly.\nSee [Enable the Cloud Storage FUSE CSI driver](https://cloud.google.com/kubernetes-engine/docs/how-to/persistent-volumes/cloud-storage-fuse-csi-driver#enable) for more information.",
      () => container_ClusterAddonsConfigGcsFuseCsiDriverConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "horizontalPodAutoscaling",
      "The status of the Horizontal Pod Autoscaling\naddon, which increases or decreases the number of replica pods a replication controller\nhas based on the resource usage of the existing pods.\nIt is enabled by default;\nset `disabled = true` to disable.",
      () => container_ClusterAddonsConfigHorizontalPodAutoscaling_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "istioConfig",
      ".\nStructure is documented below.",
      () => container_ClusterAddonsConfigIstioConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "gcpFilestoreCsiDriverConfig",
      "The status of the Filestore CSI driver addon,\nwhich allows the usage of filestore instance as volumes.\nIt is disabled by default; set `enabled = true` to enable.",
      () => container_ClusterAddonsConfigGcpFilestoreCsiDriverConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cloudrunConfig",
      ". Structure is documented below.",
      () => container_ClusterAddonsConfigCloudrunConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "gcePersistentDiskCsiDriverConfig",
      ".\nWhether this cluster should enable the Google Compute Engine Persistent Disk Container Storage Interface (CSI) Driver. Set `enabled = true` to enable.\n\n**Note:** The Compute Engine persistent disk CSI Driver is enabled by default on newly created clusters for the following versions: Linux clusters: GKE version 1.18.10-gke.2100 or later, or 1.19.3-gke.2100 or later.",
      () =>
        container_ClusterAddonsConfigGcePersistentDiskCsiDriverConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "gkeBackupAgentConfig",
      ".\nThe status of the Backup for GKE agent addon. It is disabled by default; Set `enabled = true` to enable.",
      () => container_ClusterAddonsConfigGkeBackupAgentConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "configConnectorConfig",
      ".\nThe status of the ConfigConnector addon. It is disabled by default; Set `enabled = true` to enable.\n\n\nThis example `addons_config` disables two addons:",
      () => container_ClusterAddonsConfigConfigConnectorConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dnsCacheConfig",
      ".\nThe status of the NodeLocal DNSCache addon. It is disabled by default.\nSet `enabled = true` to enable.\n\n**Enabling/Disabling NodeLocal DNSCache in an existing cluster is a disruptive operation.\nAll cluster nodes running GKE 1.15 and higher are recreated.**",
      () => container_ClusterAddonsConfigDnsCacheConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "kalmConfig",
      ".\nConfiguration for the KALM addon, which manages the lifecycle of k8s. It is disabled by default; Set `enabled = true` to enable.",
      () => container_ClusterAddonsConfigKalmConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "networkPolicyConfig",
      "Whether we should enable the network policy addon\nfor the master.  This must be enabled in order to enable network policy for the nodes.\nTo enable this, you must also define a `network_policy` block,\notherwise nothing will happen.\nIt can only be disabled if the nodes already do not have network policies enabled.\nDefaults to disabled; set `disabled = false` to enable.",
      () => container_ClusterAddonsConfigNetworkPolicyConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
