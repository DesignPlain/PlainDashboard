import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  msk_ClusterOpenMonitoringPrometheus,
  msk_ClusterOpenMonitoringPrometheus_GetTypes,
} from "./msk_ClusterOpenMonitoringPrometheus";

export interface msk_ClusterOpenMonitoring {
  // Configuration block for Prometheus settings for open monitoring. See below.
  prometheus?: msk_ClusterOpenMonitoringPrometheus;
}

export function msk_ClusterOpenMonitoring_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "prometheus",
      "Configuration block for Prometheus settings for open monitoring. See below.",
      () => msk_ClusterOpenMonitoringPrometheus_GetTypes(),
      true,
      false,
    ),
  ];
}
