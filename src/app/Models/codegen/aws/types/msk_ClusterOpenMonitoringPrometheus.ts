import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  msk_ClusterOpenMonitoringPrometheusJmxExporter,
  msk_ClusterOpenMonitoringPrometheusJmxExporter_GetTypes,
} from "./msk_ClusterOpenMonitoringPrometheusJmxExporter";
import {
  msk_ClusterOpenMonitoringPrometheusNodeExporter,
  msk_ClusterOpenMonitoringPrometheusNodeExporter_GetTypes,
} from "./msk_ClusterOpenMonitoringPrometheusNodeExporter";

export interface msk_ClusterOpenMonitoringPrometheus {
  // Configuration block for JMX Exporter. See below.
  jmxExporter?: msk_ClusterOpenMonitoringPrometheusJmxExporter;

  // Configuration block for Node Exporter. See below.
  nodeExporter?: msk_ClusterOpenMonitoringPrometheusNodeExporter;
}

export function msk_ClusterOpenMonitoringPrometheus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "jmxExporter",
      "Configuration block for JMX Exporter. See below.",
      () => msk_ClusterOpenMonitoringPrometheusJmxExporter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "nodeExporter",
      "Configuration block for Node Exporter. See below.",
      () => msk_ClusterOpenMonitoringPrometheusNodeExporter_GetTypes(),
      false,
      false,
    ),
  ];
}
