import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_getClusterAddonsConfigConfigConnectorConfig,
  Container_getClusterAddonsConfigConfigConnectorConfig_GetTypes,
} from "./Container_getClusterAddonsConfigConfigConnectorConfig";
import {
  Container_getClusterAddonsConfigNetworkPolicyConfig,
  Container_getClusterAddonsConfigNetworkPolicyConfig_GetTypes,
} from "./Container_getClusterAddonsConfigNetworkPolicyConfig";
import {
  Container_getClusterAddonsConfigGcsFuseCsiDriverConfig,
  Container_getClusterAddonsConfigGcsFuseCsiDriverConfig_GetTypes,
} from "./Container_getClusterAddonsConfigGcsFuseCsiDriverConfig";
import {
  Container_getClusterAddonsConfigHorizontalPodAutoscaling,
  Container_getClusterAddonsConfigHorizontalPodAutoscaling_GetTypes,
} from "./Container_getClusterAddonsConfigHorizontalPodAutoscaling";
import {
  Container_getClusterAddonsConfigKalmConfig,
  Container_getClusterAddonsConfigKalmConfig_GetTypes,
} from "./Container_getClusterAddonsConfigKalmConfig";
import {
  Container_getClusterAddonsConfigIstioConfig,
  Container_getClusterAddonsConfigIstioConfig_GetTypes,
} from "./Container_getClusterAddonsConfigIstioConfig";
import {
  Container_getClusterAddonsConfigGcePersistentDiskCsiDriverConfig,
  Container_getClusterAddonsConfigGcePersistentDiskCsiDriverConfig_GetTypes,
} from "./Container_getClusterAddonsConfigGcePersistentDiskCsiDriverConfig";
import {
  Container_getClusterAddonsConfigGcpFilestoreCsiDriverConfig,
  Container_getClusterAddonsConfigGcpFilestoreCsiDriverConfig_GetTypes,
} from "./Container_getClusterAddonsConfigGcpFilestoreCsiDriverConfig";
import {
  Container_getClusterAddonsConfigGkeBackupAgentConfig,
  Container_getClusterAddonsConfigGkeBackupAgentConfig_GetTypes,
} from "./Container_getClusterAddonsConfigGkeBackupAgentConfig";
import {
  Container_getClusterAddonsConfigCloudrunConfig,
  Container_getClusterAddonsConfigCloudrunConfig_GetTypes,
} from "./Container_getClusterAddonsConfigCloudrunConfig";
import {
  Container_getClusterAddonsConfigHttpLoadBalancing,
  Container_getClusterAddonsConfigHttpLoadBalancing_GetTypes,
} from "./Container_getClusterAddonsConfigHttpLoadBalancing";
import {
  Container_getClusterAddonsConfigDnsCacheConfig,
  Container_getClusterAddonsConfigDnsCacheConfig_GetTypes,
} from "./Container_getClusterAddonsConfigDnsCacheConfig";

export interface Container_getClusterAddonsConfig {
  // The status of the Istio addon.
  IstioConfigs?: Array<Container_getClusterAddonsConfigIstioConfig>;

  // The of the Config Connector addon.
  ConfigConnectorConfigs?: Array<Container_getClusterAddonsConfigConfigConnectorConfig>;

  // The status of the NodeLocal DNSCache addon. It is disabled by default. Set enabled = true to enable.
  DnsCacheConfigs?: Array<Container_getClusterAddonsConfigDnsCacheConfig>;

  // Whether this cluster should enable the Google Compute Engine Persistent Disk Container Storage Interface (CSI) Driver. Set enabled = true to enable. The Compute Engine persistent disk CSI Driver is enabled by default on newly created clusters for the following versions: Linux clusters: GKE version 1.18.10-gke.2100 or later, or 1.19.3-gke.2100 or later.
  GcePersistentDiskCsiDriverConfigs?: Array<Container_getClusterAddonsConfigGcePersistentDiskCsiDriverConfig>;

  // The status of the Filestore CSI driver addon, which allows the usage of filestore instance as volumes. Defaults to disabled; set enabled = true to enable.
  GcpFilestoreCsiDriverConfigs?: Array<Container_getClusterAddonsConfigGcpFilestoreCsiDriverConfig>;

  // The status of the Backup for GKE Agent addon. It is disabled by default. Set enabled = true to enable.
  GkeBackupAgentConfigs?: Array<Container_getClusterAddonsConfigGkeBackupAgentConfig>;

  // Whether we should enable the network policy addon for the master. This must be enabled in order to enable network policy for the nodes. To enable this, you must also define a network_policy block, otherwise nothing will happen. It can only be disabled if the nodes already do not have network policies enabled. Defaults to disabled; set disabled = false to enable.
  NetworkPolicyConfigs?: Array<Container_getClusterAddonsConfigNetworkPolicyConfig>;

  // The status of the CloudRun addon. It is disabled by default. Set disabled = false to enable.
  CloudrunConfigs?: Array<Container_getClusterAddonsConfigCloudrunConfig>;

  // The status of the GCS Fuse CSI driver addon, which allows the usage of gcs bucket as volumes. Defaults to disabled; set enabled = true to enable.
  GcsFuseCsiDriverConfigs?: Array<Container_getClusterAddonsConfigGcsFuseCsiDriverConfig>;

  // The status of the Horizontal Pod Autoscaling addon, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. It ensures that a Heapster pod is running in the cluster, which is also used by the Cloud Monitoring service. It is enabled by default; set disabled = true to disable.
  HorizontalPodAutoscalings?: Array<Container_getClusterAddonsConfigHorizontalPodAutoscaling>;

  // The status of the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. It is enabled by default; set disabled = true to disable.
  HttpLoadBalancings?: Array<Container_getClusterAddonsConfigHttpLoadBalancing>;

  // Configuration for the KALM addon, which manages the lifecycle of k8s. It is disabled by default; Set enabled = true to enable.
  KalmConfigs?: Array<Container_getClusterAddonsConfigKalmConfig>;
}

export function Container_getClusterAddonsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "GkeBackupAgentConfigs",
      "The status of the Backup for GKE Agent addon. It is disabled by default. Set enabled = true to enable.",
      Container_getClusterAddonsConfigGkeBackupAgentConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "NetworkPolicyConfigs",
      "Whether we should enable the network policy addon for the master. This must be enabled in order to enable network policy for the nodes. To enable this, you must also define a network_policy block, otherwise nothing will happen. It can only be disabled if the nodes already do not have network policies enabled. Defaults to disabled; set disabled = false to enable.",
      Container_getClusterAddonsConfigNetworkPolicyConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "CloudrunConfigs",
      "The status of the CloudRun addon. It is disabled by default. Set disabled = false to enable.",
      Container_getClusterAddonsConfigCloudrunConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "GcsFuseCsiDriverConfigs",
      "The status of the GCS Fuse CSI driver addon, which allows the usage of gcs bucket as volumes. Defaults to disabled; set enabled = true to enable.",
      Container_getClusterAddonsConfigGcsFuseCsiDriverConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "HorizontalPodAutoscalings",
      "The status of the Horizontal Pod Autoscaling addon, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. It ensures that a Heapster pod is running in the cluster, which is also used by the Cloud Monitoring service. It is enabled by default; set disabled = true to disable.",
      Container_getClusterAddonsConfigHorizontalPodAutoscaling_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "DnsCacheConfigs",
      "The status of the NodeLocal DNSCache addon. It is disabled by default. Set enabled = true to enable.",
      Container_getClusterAddonsConfigDnsCacheConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "GcePersistentDiskCsiDriverConfigs",
      "Whether this cluster should enable the Google Compute Engine Persistent Disk Container Storage Interface (CSI) Driver. Set enabled = true to enable. The Compute Engine persistent disk CSI Driver is enabled by default on newly created clusters for the following versions: Linux clusters: GKE version 1.18.10-gke.2100 or later, or 1.19.3-gke.2100 or later.",
      Container_getClusterAddonsConfigGcePersistentDiskCsiDriverConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "GcpFilestoreCsiDriverConfigs",
      "The status of the Filestore CSI driver addon, which allows the usage of filestore instance as volumes. Defaults to disabled; set enabled = true to enable.",
      Container_getClusterAddonsConfigGcpFilestoreCsiDriverConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "HttpLoadBalancings",
      "The status of the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. It is enabled by default; set disabled = true to disable.",
      Container_getClusterAddonsConfigHttpLoadBalancing_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "IstioConfigs",
      "The status of the Istio addon.",
      Container_getClusterAddonsConfigIstioConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ConfigConnectorConfigs",
      "The of the Config Connector addon.",
      Container_getClusterAddonsConfigConfigConnectorConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "KalmConfigs",
      "Configuration for the KALM addon, which manages the lifecycle of k8s. It is disabled by default; Set enabled = true to enable.",
      Container_getClusterAddonsConfigKalmConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
