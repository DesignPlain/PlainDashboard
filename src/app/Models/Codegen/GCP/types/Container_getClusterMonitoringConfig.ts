import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_getClusterMonitoringConfigAdvancedDatapathObservabilityConfig,
  Container_getClusterMonitoringConfigAdvancedDatapathObservabilityConfig_GetTypes,
} from "./Container_getClusterMonitoringConfigAdvancedDatapathObservabilityConfig";
import {
  Container_getClusterMonitoringConfigManagedPrometheus,
  Container_getClusterMonitoringConfigManagedPrometheus_GetTypes,
} from "./Container_getClusterMonitoringConfigManagedPrometheus";

export interface Container_getClusterMonitoringConfig {
  // Configuration of Advanced Datapath Observability features.
  AdvancedDatapathObservabilityConfigs?: Array<Container_getClusterMonitoringConfigAdvancedDatapathObservabilityConfig>;

  // GKE components exposing metrics. Valid values include SYSTEM_COMPONENTS, APISERVER, SCHEDULER, CONTROLLER_MANAGER, STORAGE, HPA, POD, DAEMONSET, DEPLOYMENT, STATEFULSET and WORKLOADS.
  EnableComponents?: Array<string>;

  // Configuration for Google Cloud Managed Services for Prometheus.
  ManagedPrometheuses?: Array<Container_getClusterMonitoringConfigManagedPrometheus>;
}

export function Container_getClusterMonitoringConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "EnableComponents",
      "GKE components exposing metrics. Valid values include SYSTEM_COMPONENTS, APISERVER, SCHEDULER, CONTROLLER_MANAGER, STORAGE, HPA, POD, DAEMONSET, DEPLOYMENT, STATEFULSET and WORKLOADS.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ManagedPrometheuses",
      "Configuration for Google Cloud Managed Services for Prometheus.",
      Container_getClusterMonitoringConfigManagedPrometheus_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AdvancedDatapathObservabilityConfigs",
      "Configuration of Advanced Datapath Observability features.",
      Container_getClusterMonitoringConfigAdvancedDatapathObservabilityConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
