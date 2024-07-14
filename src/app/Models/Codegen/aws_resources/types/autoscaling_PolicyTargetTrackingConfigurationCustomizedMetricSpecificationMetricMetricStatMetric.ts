import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricMetricStatMetricDimension,
  autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricMetricStatMetricDimension_GetTypes,
} from "./autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricMetricStatMetricDimension";

export interface autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricMetricStatMetric {
  // Namespace of the metric.
  namespace?: string;

  // Dimensions of the metric.
  dimensions?: Array<autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricMetricStatMetricDimension>;

  // Name of the metric.
  metricName?: string;
}

export function autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricMetricStatMetric_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "metricName",
      "Name of the metric.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "namespace",
      "Namespace of the metric.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dimensions",
      "Dimensions of the metric.",
      autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricMetricStatMetricDimension_GetTypes(),
      false,
      false,
    ),
  ];
}
