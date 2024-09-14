import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetric,
  autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetric_GetTypes,
} from "./autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetric";

export interface autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStat {
  // Structure that defines the CloudWatch metric to return, including the metric name, namespace, and dimensions.
  metric?: autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetric;

  // Statistic of the metrics to return.
  stat?: string;

  // Unit of the metrics to return.
  unit?: string;
}

export function autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStat_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "metric",
      "Structure that defines the CloudWatch metric to return, including the metric name, namespace, and dimensions.",
      () =>
        autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetric_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "stat",
      "Statistic of the metrics to return.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "unit",
      "Unit of the metrics to return.",
      () => [],
      false,
      false,
    ),
  ];
}
