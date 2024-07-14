import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudwatch_MetricStreamStatisticsConfigurationIncludeMetric,
  cloudwatch_MetricStreamStatisticsConfigurationIncludeMetric_GetTypes,
} from "./cloudwatch_MetricStreamStatisticsConfigurationIncludeMetric";

export interface cloudwatch_MetricStreamStatisticsConfiguration {
  // The additional statistics to stream for the metrics listed in `include_metrics`.
  additionalStatistics?: Array<string>;

  // An array that defines the metrics that are to have additional statistics streamed. See details below.
  includeMetrics?: Array<cloudwatch_MetricStreamStatisticsConfigurationIncludeMetric>;
}

export function cloudwatch_MetricStreamStatisticsConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "additionalStatistics",
      "The additional statistics to stream for the metrics listed in `include_metrics`.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "includeMetrics",
      "An array that defines the metrics that are to have additional statistics streamed. See details below.",
      cloudwatch_MetricStreamStatisticsConfigurationIncludeMetric_GetTypes(),
      true,
      false,
    ),
  ];
}
