import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudwatch_MetricStreamStatisticsConfigurationIncludeMetric {
  // The name of the metric.
  metricName?: string;

  //
  namespace?: string;
}

export function cloudwatch_MetricStreamStatisticsConfigurationIncludeMetric_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "metricName",
      "The name of the metric.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "namespace",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
