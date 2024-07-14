import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimension,
  appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimension_GetTypes,
} from "./appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimension";
import {
  appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetric,
  appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetric_GetTypes,
} from "./appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetric";

export interface appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification {
  // Namespace of the metric.
  namespace?: string;

  // Statistic of the metric. Valid values: `Average`, `Minimum`, `Maximum`, `SampleCount`, and `Sum`.
  statistic?: string;

  // Unit of the metrics to return.
  unit?: string;

  // Dimensions of the metric.
  dimensions?: Array<appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimension>;

  // Name of the metric.
  metricName?: string;

  // Metrics to include, as a metric data query.
  metrics?: Array<appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetric>;
}

export function appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "namespace",
      "Namespace of the metric.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "statistic",
      "Statistic of the metric. Valid values: `Average`, `Minimum`, `Maximum`, `SampleCount`, and `Sum`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "unit",
      "Unit of the metrics to return.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dimensions",
      "Dimensions of the metric.",
      appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimension_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "metricName",
      "Name of the metric.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "metrics",
      "Metrics to include, as a metric data query.",
      appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetric_GetTypes(),
      false,
      false,
    ),
  ];
}
