import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface msk_ClusterOpenMonitoringPrometheusNodeExporter {
  // Indicates whether you want to enable or disable the Node Exporter.
  enabledInBroker?: boolean;
}

export function msk_ClusterOpenMonitoringPrometheusNodeExporter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabledInBroker",
      "Indicates whether you want to enable or disable the Node Exporter.",
      () => [],
      true,
      false,
    ),
  ];
}
