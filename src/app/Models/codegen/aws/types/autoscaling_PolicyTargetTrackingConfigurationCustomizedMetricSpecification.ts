import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetric,
  autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetric_GetTypes,
} from "./autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetric";
import {
  autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension,
  autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension_GetTypes,
} from "./autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension";

export interface autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecification {
  // Name of the metric.
  metricName?: string;

  // Metrics to include, as a metric data query.
  metrics?: Array<autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetric>;

  // Namespace of the metric.
  namespace?: string;

  // Statistic of the metric.
  statistic?: string;

  // Unit of the metric.
  unit?: string;

  // Dimensions of the metric.
  metricDimensions?: Array<autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension>;
}

export function autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "metricName",
      "Name of the metric.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "metrics",
      "Metrics to include, as a metric data query.",
      () =>
        autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetric_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "namespace",
      "Namespace of the metric.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "statistic",
      "Statistic of the metric.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "unit",
      "Unit of the metric.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "metricDimensions",
      "Dimensions of the metric.",
      () =>
        autoscaling_PolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension_GetTypes(),
      false,
      false,
    ),
  ];
}
