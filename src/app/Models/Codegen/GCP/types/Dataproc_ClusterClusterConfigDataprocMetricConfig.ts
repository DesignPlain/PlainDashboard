import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_ClusterClusterConfigDataprocMetricConfigMetric,
  Dataproc_ClusterClusterConfigDataprocMetricConfigMetric_GetTypes,
} from "./Dataproc_ClusterClusterConfigDataprocMetricConfigMetric";

export interface Dataproc_ClusterClusterConfigDataprocMetricConfig {
  // Metrics sources to enable.
  Metrics?: Array<Dataproc_ClusterClusterConfigDataprocMetricConfigMetric>;
}

export function Dataproc_ClusterClusterConfigDataprocMetricConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Metrics",
      "Metrics sources to enable.",
      Dataproc_ClusterClusterConfigDataprocMetricConfigMetric_GetTypes(),
      true,
      false,
    ),
  ];
}
