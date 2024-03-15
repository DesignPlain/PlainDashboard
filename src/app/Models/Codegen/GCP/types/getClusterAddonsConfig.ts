import { getClusterAddonsConfigGcpFilestoreCsiDriverConfig } from "./getClusterAddonsConfigGcpFilestoreCsiDriverConfig";
import { getClusterAddonsConfigHttpLoadBalancing } from "./getClusterAddonsConfigHttpLoadBalancing";
import { getClusterAddonsConfigKalmConfig } from "./getClusterAddonsConfigKalmConfig";
import { getClusterAddonsConfigGcePersistentDiskCsiDriverConfig } from "./getClusterAddonsConfigGcePersistentDiskCsiDriverConfig";
import { getClusterAddonsConfigGcsFuseCsiDriverConfig } from "./getClusterAddonsConfigGcsFuseCsiDriverConfig";
import { getClusterAddonsConfigIstioConfig } from "./getClusterAddonsConfigIstioConfig";
import { getClusterAddonsConfigConfigConnectorConfig } from "./getClusterAddonsConfigConfigConnectorConfig";
import { getClusterAddonsConfigDnsCacheConfig } from "./getClusterAddonsConfigDnsCacheConfig";
import { getClusterAddonsConfigHorizontalPodAutoscaling } from "./getClusterAddonsConfigHorizontalPodAutoscaling";
import { getClusterAddonsConfigCloudrunConfig } from "./getClusterAddonsConfigCloudrunConfig";
import { getClusterAddonsConfigNetworkPolicyConfig } from "./getClusterAddonsConfigNetworkPolicyConfig";
import { getClusterAddonsConfigGkeBackupAgentConfig } from "./getClusterAddonsConfigGkeBackupAgentConfig";

export interface getClusterAddonsConfig {
  // The status of the Istio addon.
  IstioConfigs?: Array<getClusterAddonsConfigIstioConfig>;

  // The status of the CloudRun addon. It is disabled by default. Set disabled = false to enable.
  CloudrunConfigs?: Array<getClusterAddonsConfigCloudrunConfig>;

  // The of the Config Connector addon.
  ConfigConnectorConfigs?: Array<getClusterAddonsConfigConfigConnectorConfig>;

  // The status of the NodeLocal DNSCache addon. It is disabled by default. Set enabled = true to enable.
  DnsCacheConfigs?: Array<getClusterAddonsConfigDnsCacheConfig>;

  // The status of the Filestore CSI driver addon, which allows the usage of filestore instance as volumes. Defaults to disabled; set enabled = true to enable.
  GcpFilestoreCsiDriverConfigs?: Array<getClusterAddonsConfigGcpFilestoreCsiDriverConfig>;

  // The status of the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. It is enabled by default; set disabled = true to disable.
  HttpLoadBalancings?: Array<getClusterAddonsConfigHttpLoadBalancing>;

  // Configuration for the KALM addon, which manages the lifecycle of k8s. It is disabled by default; Set enabled = true to enable.
  KalmConfigs?: Array<getClusterAddonsConfigKalmConfig>;

  // Whether we should enable the network policy addon for the master. This must be enabled in order to enable network policy for the nodes. To enable this, you must also define a network_policy block, otherwise nothing will happen. It can only be disabled if the nodes already do not have network policies enabled. Defaults to disabled; set disabled = false to enable.
  NetworkPolicyConfigs?: Array<getClusterAddonsConfigNetworkPolicyConfig>;

  // Whether this cluster should enable the Google Compute Engine Persistent Disk Container Storage Interface (CSI) Driver. Set enabled = true to enable. The Compute Engine persistent disk CSI Driver is enabled by default on newly created clusters for the following versions: Linux clusters: GKE version 1.18.10-gke.2100 or later, or 1.19.3-gke.2100 or later.
  GcePersistentDiskCsiDriverConfigs?: Array<getClusterAddonsConfigGcePersistentDiskCsiDriverConfig>;

  // The status of the GCS Fuse CSI driver addon, which allows the usage of gcs bucket as volumes. Defaults to disabled; set enabled = true to enable.
  GcsFuseCsiDriverConfigs?: Array<getClusterAddonsConfigGcsFuseCsiDriverConfig>;

  // The status of the Backup for GKE Agent addon. It is disabled by default. Set enabled = true to enable.
  GkeBackupAgentConfigs?: Array<getClusterAddonsConfigGkeBackupAgentConfig>;

  // The status of the Horizontal Pod Autoscaling addon, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. It ensures that a Heapster pod is running in the cluster, which is also used by the Cloud Monitoring service. It is enabled by default; set disabled = true to disable.
  HorizontalPodAutoscalings?: Array<getClusterAddonsConfigHorizontalPodAutoscaling>;
}
