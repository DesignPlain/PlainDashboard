import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudwatch_MetricStreamStatisticsConfigurationIncludeMetric {
  // The name of the metric.
  metricName?: string;

  // Name of the metric namespace in the filter.
  namespace?: string;
}

export function cloudwatch_MetricStreamStatisticsConfigurationIncludeMetric_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "metricName",
      "The name of the metric.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "namespace",
      "Name of the metric namespace in the filter.",
      [],
      true,
      false,
    ),
  ];
}
