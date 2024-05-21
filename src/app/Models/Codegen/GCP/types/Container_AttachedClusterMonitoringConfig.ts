import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  container_AttachedClusterMonitoringConfigManagedPrometheusConfig,
  container_AttachedClusterMonitoringConfigManagedPrometheusConfig_GetTypes,
} from "./container_AttachedClusterMonitoringConfigManagedPrometheusConfig";

export interface container_AttachedClusterMonitoringConfig {
  /*
Enable Google Cloud Managed Service for Prometheus in the cluster.
Structure is documented below.
*/
  managedPrometheusConfig?: container_AttachedClusterMonitoringConfigManagedPrometheusConfig;
}

export function container_AttachedClusterMonitoringConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "managedPrometheusConfig",
      "Enable Google Cloud Managed Service for Prometheus in the cluster.\nStructure is documented below.",
      container_AttachedClusterMonitoringConfigManagedPrometheusConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
