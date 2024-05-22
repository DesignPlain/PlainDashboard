import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface msk_ClusterOpenMonitoringPrometheusJmxExporter {
  // Indicates whether you want to enable or disable the Node Exporter.
  enabledInBroker?: boolean;
}

export function msk_ClusterOpenMonitoringPrometheusJmxExporter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabledInBroker",
      "Indicates whether you want to enable or disable the Node Exporter.",
      [],
      true,
      false,
    ),
  ];
}
