import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  container_getClusterAddonsConfigGcsFuseCsiDriverConfig,
  container_getClusterAddonsConfigGcsFuseCsiDriverConfig_GetTypes,
} from "./container_getClusterAddonsConfigGcsFuseCsiDriverConfig";
import {
  container_getClusterAddonsConfigHttpLoadBalancing,
  container_getClusterAddonsConfigHttpLoadBalancing_GetTypes,
} from "./container_getClusterAddonsConfigHttpLoadBalancing";
import {
  container_getClusterAddonsConfigKalmConfig,
  container_getClusterAddonsConfigKalmConfig_GetTypes,
} from "./container_getClusterAddonsConfigKalmConfig";
import {
  container_getClusterAddonsConfigNetworkPolicyConfig,
  container_getClusterAddonsConfigNetworkPolicyConfig_GetTypes,
} from "./container_getClusterAddonsConfigNetworkPolicyConfig";
import {
  container_getClusterAddonsConfigGcpFilestoreCsiDriverConfig,
  container_getClusterAddonsConfigGcpFilestoreCsiDriverConfig_GetTypes,
} from "./container_getClusterAddonsConfigGcpFilestoreCsiDriverConfig";
import {
  container_getClusterAddonsConfigDnsCacheConfig,
  container_getClusterAddonsConfigDnsCacheConfig_GetTypes,
} from "./container_getClusterAddonsConfigDnsCacheConfig";
import {
  container_getClusterAddonsConfigCloudrunConfig,
  container_getClusterAddonsConfigCloudrunConfig_GetTypes,
} from "./container_getClusterAddonsConfigCloudrunConfig";
import {
  container_getClusterAddonsConfigGkeBackupAgentConfig,
  container_getClusterAddonsConfigGkeBackupAgentConfig_GetTypes,
} from "./container_getClusterAddonsConfigGkeBackupAgentConfig";
import {
  container_getClusterAddonsConfigHorizontalPodAutoscaling,
  container_getClusterAddonsConfigHorizontalPodAutoscaling_GetTypes,
} from "./container_getClusterAddonsConfigHorizontalPodAutoscaling";
import {
  container_getClusterAddonsConfigIstioConfig,
  container_getClusterAddonsConfigIstioConfig_GetTypes,
} from "./container_getClusterAddonsConfigIstioConfig";
import {
  container_getClusterAddonsConfigGcePersistentDiskCsiDriverConfig,
  container_getClusterAddonsConfigGcePersistentDiskCsiDriverConfig_GetTypes,
} from "./container_getClusterAddonsConfigGcePersistentDiskCsiDriverConfig";
import {
  container_getClusterAddonsConfigConfigConnectorConfig,
  container_getClusterAddonsConfigConfigConnectorConfig_GetTypes,
} from "./container_getClusterAddonsConfigConfigConnectorConfig";

export interface container_getClusterAddonsConfig {
  // The of the Config Connector addon.
  configConnectorConfigs?: Array<container_getClusterAddonsConfigConfigConnectorConfig>;

  // The status of the NodeLocal DNSCache addon. It is disabled by default. Set enabled = true to enable.
  dnsCacheConfigs?: Array<container_getClusterAddonsConfigDnsCacheConfig>;

  // The status of the Filestore CSI driver addon, which allows the usage of filestore instance as volumes. Defaults to disabled; set enabled = true to enable.
  gcpFilestoreCsiDriverConfigs?: Array<container_getClusterAddonsConfigGcpFilestoreCsiDriverConfig>;

  // The status of the CloudRun addon. It is disabled by default. Set disabled = false to enable.
  cloudrunConfigs?: Array<container_getClusterAddonsConfigCloudrunConfig>;

  // The status of the GCS Fuse CSI driver addon, which allows the usage of gcs bucket as volumes. Defaults to disabled; set enabled = true to enable.
  gcsFuseCsiDriverConfigs?: Array<container_getClusterAddonsConfigGcsFuseCsiDriverConfig>;

  // The status of the Backup for GKE Agent addon. It is disabled by default. Set enabled = true to enable.
  gkeBackupAgentConfigs?: Array<container_getClusterAddonsConfigGkeBackupAgentConfig>;

  // The status of the Horizontal Pod Autoscaling addon, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. It ensures that a Heapster pod is running in the cluster, which is also used by the Cloud Monitoring service. It is enabled by default; set disabled = true to disable.
  horizontalPodAutoscalings?: Array<container_getClusterAddonsConfigHorizontalPodAutoscaling>;

  // The status of the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. It is enabled by default; set disabled = true to disable.
  httpLoadBalancings?: Array<container_getClusterAddonsConfigHttpLoadBalancing>;

  // The status of the Istio addon.
  istioConfigs?: Array<container_getClusterAddonsConfigIstioConfig>;

  // Configuration for the KALM addon, which manages the lifecycle of k8s. It is disabled by default; Set enabled = true to enable.
  kalmConfigs?: Array<container_getClusterAddonsConfigKalmConfig>;

  // Whether we should enable the network policy addon for the master. This must be enabled in order to enable network policy for the nodes. To enable this, you must also define a network_policy block, otherwise nothing will happen. It can only be disabled if the nodes already do not have network policies enabled. Defaults to disabled; set disabled = false to enable.
  networkPolicyConfigs?: Array<container_getClusterAddonsConfigNetworkPolicyConfig>;

  // Whether this cluster should enable the Google Compute Engine Persistent Disk Container Storage Interface (CSI) Driver. Set enabled = true to enable. The Compute Engine persistent disk CSI Driver is enabled by default on newly created clusters for the following versions: Linux clusters: GKE version 1.18.10-gke.2100 or later, or 1.19.3-gke.2100 or later.
  gcePersistentDiskCsiDriverConfigs?: Array<container_getClusterAddonsConfigGcePersistentDiskCsiDriverConfig>;
}

export function container_getClusterAddonsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "gcpFilestoreCsiDriverConfigs",
      "The status of the Filestore CSI driver addon, which allows the usage of filestore instance as volumes. Defaults to disabled; set enabled = true to enable.",
      container_getClusterAddonsConfigGcpFilestoreCsiDriverConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "cloudrunConfigs",
      "The status of the CloudRun addon. It is disabled by default. Set disabled = false to enable.",
      container_getClusterAddonsConfigCloudrunConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "httpLoadBalancings",
      "The status of the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. It is enabled by default; set disabled = true to disable.",
      container_getClusterAddonsConfigHttpLoadBalancing_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "kalmConfigs",
      "Configuration for the KALM addon, which manages the lifecycle of k8s. It is disabled by default; Set enabled = true to enable.",
      container_getClusterAddonsConfigKalmConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "networkPolicyConfigs",
      "Whether we should enable the network policy addon for the master. This must be enabled in order to enable network policy for the nodes. To enable this, you must also define a network_policy block, otherwise nothing will happen. It can only be disabled if the nodes already do not have network policies enabled. Defaults to disabled; set disabled = false to enable.",
      container_getClusterAddonsConfigNetworkPolicyConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dnsCacheConfigs",
      "The status of the NodeLocal DNSCache addon. It is disabled by default. Set enabled = true to enable.",
      container_getClusterAddonsConfigDnsCacheConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "gcsFuseCsiDriverConfigs",
      "The status of the GCS Fuse CSI driver addon, which allows the usage of gcs bucket as volumes. Defaults to disabled; set enabled = true to enable.",
      container_getClusterAddonsConfigGcsFuseCsiDriverConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "gkeBackupAgentConfigs",
      "The status of the Backup for GKE Agent addon. It is disabled by default. Set enabled = true to enable.",
      container_getClusterAddonsConfigGkeBackupAgentConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "horizontalPodAutoscalings",
      "The status of the Horizontal Pod Autoscaling addon, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. It ensures that a Heapster pod is running in the cluster, which is also used by the Cloud Monitoring service. It is enabled by default; set disabled = true to disable.",
      container_getClusterAddonsConfigHorizontalPodAutoscaling_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "istioConfigs",
      "The status of the Istio addon.",
      container_getClusterAddonsConfigIstioConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "gcePersistentDiskCsiDriverConfigs",
      "Whether this cluster should enable the Google Compute Engine Persistent Disk Container Storage Interface (CSI) Driver. Set enabled = true to enable. The Compute Engine persistent disk CSI Driver is enabled by default on newly created clusters for the following versions: Linux clusters: GKE version 1.18.10-gke.2100 or later, or 1.19.3-gke.2100 or later.",
      container_getClusterAddonsConfigGcePersistentDiskCsiDriverConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "configConnectorConfigs",
      "The of the Config Connector addon.",
      container_getClusterAddonsConfigConfigConnectorConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
