import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataproc_ClusterClusterConfigDataprocMetricConfigMetric,
  dataproc_ClusterClusterConfigDataprocMetricConfigMetric_GetTypes,
} from "./dataproc_ClusterClusterConfigDataprocMetricConfigMetric";

export interface dataproc_ClusterClusterConfigDataprocMetricConfig {
  // Metrics sources to enable.
  metrics?: Array<dataproc_ClusterClusterConfigDataprocMetricConfigMetric>;
}

export function dataproc_ClusterClusterConfigDataprocMetricConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "metrics",
      "Metrics sources to enable.",
      dataproc_ClusterClusterConfigDataprocMetricConfigMetric_GetTypes(),
      true,
      false,
    ),
  ];
}
