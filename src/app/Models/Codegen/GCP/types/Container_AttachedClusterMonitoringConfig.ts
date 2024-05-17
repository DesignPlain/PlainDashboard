import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_AttachedClusterMonitoringConfigManagedPrometheusConfig,
  Container_AttachedClusterMonitoringConfigManagedPrometheusConfig_GetTypes,
} from "./Container_AttachedClusterMonitoringConfigManagedPrometheusConfig";

export interface Container_AttachedClusterMonitoringConfig {
  /*
Enable Google Cloud Managed Service for Prometheus in the cluster.
Structure is documented below.
*/
  ManagedPrometheusConfig?: Container_AttachedClusterMonitoringConfigManagedPrometheusConfig;
}

export function Container_AttachedClusterMonitoringConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ManagedPrometheusConfig",
      "Enable Google Cloud Managed Service for Prometheus in the cluster.\nStructure is documented below.",
      Container_AttachedClusterMonitoringConfigManagedPrometheusConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
