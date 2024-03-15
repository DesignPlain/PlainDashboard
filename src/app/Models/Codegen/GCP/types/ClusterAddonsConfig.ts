import { ClusterAddonsConfigConfigConnectorConfig } from "./ClusterAddonsConfigConfigConnectorConfig";
import { ClusterAddonsConfigGkeBackupAgentConfig } from "./ClusterAddonsConfigGkeBackupAgentConfig";
import { ClusterAddonsConfigKalmConfig } from "./ClusterAddonsConfigKalmConfig";
import { ClusterAddonsConfigGcpFilestoreCsiDriverConfig } from "./ClusterAddonsConfigGcpFilestoreCsiDriverConfig";
import { ClusterAddonsConfigHttpLoadBalancing } from "./ClusterAddonsConfigHttpLoadBalancing";
import { ClusterAddonsConfigNetworkPolicyConfig } from "./ClusterAddonsConfigNetworkPolicyConfig";
import { ClusterAddonsConfigCloudrunConfig } from "./ClusterAddonsConfigCloudrunConfig";
import { ClusterAddonsConfigIstioConfig } from "./ClusterAddonsConfigIstioConfig";
import { ClusterAddonsConfigGcePersistentDiskCsiDriverConfig } from "./ClusterAddonsConfigGcePersistentDiskCsiDriverConfig";
import { ClusterAddonsConfigDnsCacheConfig } from "./ClusterAddonsConfigDnsCacheConfig";
import { ClusterAddonsConfigGcsFuseCsiDriverConfig } from "./ClusterAddonsConfigGcsFuseCsiDriverConfig";
import { ClusterAddonsConfigHorizontalPodAutoscaling } from "./ClusterAddonsConfigHorizontalPodAutoscaling";

export interface ClusterAddonsConfig {
  /*
.
The status of the NodeLocal DNSCache addon. It is disabled by default.
Set `enabled = true` to enable.

--Enabling/Disabling NodeLocal DNSCache in an existing cluster is a disruptive operation.
All cluster nodes running GKE 1.15 and higher are recreated.--
*/
  DnsCacheConfig?: ClusterAddonsConfigDnsCacheConfig;

  /*
The status of the GCSFuse CSI driver addon,
which allows the usage of a gcs bucket as volumes.
It is disabled by default for Standard clusters; set `enabled = true` to enable.
It is enabled by default for Autopilot clusters with version 1.24 or later; set `enabled = true` to enable it explicitly.
See [Enable the Cloud Storage FUSE CSI driver](https://cloud.google.com/kubernetes-engine/docs/how-to/persistent-volumes/cloud-storage-fuse-csi-driver#enable) for more information.
*/
  GcsFuseCsiDriverConfig?: ClusterAddonsConfigGcsFuseCsiDriverConfig;

  /*
The status of the Horizontal Pod Autoscaling
addon, which increases or decreases the number of replica pods a replication controller
has based on the resource usage of the existing pods.
It is enabled by default;
set `disabled = true` to disable.
*/
  HorizontalPodAutoscaling?: ClusterAddonsConfigHorizontalPodAutoscaling;

  /*
The status of the HTTP (L7) load balancing
controller addon, which makes it easy to set up HTTP load balancers for services in a
cluster. It is enabled by default; set `disabled = true` to disable.
*/
  HttpLoadBalancing?: ClusterAddonsConfigHttpLoadBalancing;

  /*
Whether we should enable the network policy addon
for the master.  This must be enabled in order to enable network policy for the nodes.
To enable this, you must also define a `network_policy` block,
otherwise nothing will happen.
It can only be disabled if the nodes already do not have network policies enabled.
Defaults to disabled; set `disabled = false` to enable.
*/
  NetworkPolicyConfig?: ClusterAddonsConfigNetworkPolicyConfig;

  // . Structure is documented below.
  CloudrunConfig?: ClusterAddonsConfigCloudrunConfig;

  /*
.
The status of the ConfigConnector addon. It is disabled by default; Set `enabled = true` to enable.


This example `addons_config` disables two addons:
*/
  ConfigConnectorConfig?: ClusterAddonsConfigConfigConnectorConfig;

  /*
.
The status of the Backup for GKE agent addon. It is disabled by default; Set `enabled = true` to enable.
*/
  GkeBackupAgentConfig?: ClusterAddonsConfigGkeBackupAgentConfig;

  /*
.
Structure is documented below.
*/
  IstioConfig?: ClusterAddonsConfigIstioConfig;

  /*
.
Configuration for the KALM addon, which manages the lifecycle of k8s. It is disabled by default; Set `enabled = true` to enable.
*/
  KalmConfig?: ClusterAddonsConfigKalmConfig;

  /*
.
Whether this cluster should enable the Google Compute Engine Persistent Disk Container Storage Interface (CSI) Driver. Set `enabled = true` to enable.

--Note:-- The Compute Engine persistent disk CSI Driver is enabled by default on newly created clusters for the following versions: Linux clusters: GKE version 1.18.10-gke.2100 or later, or 1.19.3-gke.2100 or later.
*/
  GcePersistentDiskCsiDriverConfig?: ClusterAddonsConfigGcePersistentDiskCsiDriverConfig;

  /*
The status of the Filestore CSI driver addon,
which allows the usage of filestore instance as volumes.
It is disabled by default; set `enabled = true` to enable.
*/
  GcpFilestoreCsiDriverConfig?: ClusterAddonsConfigGcpFilestoreCsiDriverConfig;
}
