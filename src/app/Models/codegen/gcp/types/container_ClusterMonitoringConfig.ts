import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  container_ClusterMonitoringConfigManagedPrometheus,
  container_ClusterMonitoringConfigManagedPrometheus_GetTypes,
} from "./container_ClusterMonitoringConfigManagedPrometheus";
import {
  container_ClusterMonitoringConfigAdvancedDatapathObservabilityConfig,
  container_ClusterMonitoringConfigAdvancedDatapathObservabilityConfig_GetTypes,
} from "./container_ClusterMonitoringConfigAdvancedDatapathObservabilityConfig";

export interface container_ClusterMonitoringConfig {
  // The GKE components exposing metrics. Supported values include: `SYSTEM_COMPONENTS`, `APISERVER`, `SCHEDULER`, `CONTROLLER_MANAGER`, `STORAGE`, `HPA`, `POD`, `DAEMONSET`, `DEPLOYMENT` and `STATEFULSET`. In beta provider, `WORKLOADS` is supported on top of those 10 values. (`WORKLOADS` is deprecated and removed in GKE 1.24.)
  enableComponents?: Array<string>;

  // Configuration for Managed Service for Prometheus. Structure is documented below.
  managedPrometheus?: container_ClusterMonitoringConfigManagedPrometheus;

  // Configuration for Advanced Datapath Monitoring. Structure is documented below.
  advancedDatapathObservabilityConfigs?: Array<container_ClusterMonitoringConfigAdvancedDatapathObservabilityConfig>;
}

export function container_ClusterMonitoringConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "enableComponents",
      "The GKE components exposing metrics. Supported values include: `SYSTEM_COMPONENTS`, `APISERVER`, `SCHEDULER`, `CONTROLLER_MANAGER`, `STORAGE`, `HPA`, `POD`, `DAEMONSET`, `DEPLOYMENT` and `STATEFULSET`. In beta provider, `WORKLOADS` is supported on top of those 10 values. (`WORKLOADS` is deprecated and removed in GKE 1.24.)",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "managedPrometheus",
      "Configuration for Managed Service for Prometheus. Structure is documented below.",
      () => container_ClusterMonitoringConfigManagedPrometheus_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "advancedDatapathObservabilityConfigs",
      "Configuration for Advanced Datapath Monitoring. Structure is documented below.",
      () =>
        container_ClusterMonitoringConfigAdvancedDatapathObservabilityConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
