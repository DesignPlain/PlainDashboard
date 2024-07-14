import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  container_getClusterMonitoringConfigManagedPrometheus,
  container_getClusterMonitoringConfigManagedPrometheus_GetTypes,
} from "./container_getClusterMonitoringConfigManagedPrometheus";
import {
  container_getClusterMonitoringConfigAdvancedDatapathObservabilityConfig,
  container_getClusterMonitoringConfigAdvancedDatapathObservabilityConfig_GetTypes,
} from "./container_getClusterMonitoringConfigAdvancedDatapathObservabilityConfig";

export interface container_getClusterMonitoringConfig {
  // Configuration of Advanced Datapath Observability features.
  advancedDatapathObservabilityConfigs?: Array<container_getClusterMonitoringConfigAdvancedDatapathObservabilityConfig>;

  // GKE components exposing metrics. Valid values include SYSTEM_COMPONENTS, APISERVER, SCHEDULER, CONTROLLER_MANAGER, STORAGE, HPA, POD, DAEMONSET, DEPLOYMENT, STATEFULSET and WORKLOADS.
  enableComponents?: Array<string>;

  // Configuration for Google Cloud Managed Services for Prometheus.
  managedPrometheuses?: Array<container_getClusterMonitoringConfigManagedPrometheus>;
}

export function container_getClusterMonitoringConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "advancedDatapathObservabilityConfigs",
      "Configuration of Advanced Datapath Observability features.",
      container_getClusterMonitoringConfigAdvancedDatapathObservabilityConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "enableComponents",
      "GKE components exposing metrics. Valid values include SYSTEM_COMPONENTS, APISERVER, SCHEDULER, CONTROLLER_MANAGER, STORAGE, HPA, POD, DAEMONSET, DEPLOYMENT, STATEFULSET and WORKLOADS.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "managedPrometheuses",
      "Configuration for Google Cloud Managed Services for Prometheus.",
      container_getClusterMonitoringConfigManagedPrometheus_GetTypes(),
      true,
      false,
    ),
  ];
}
