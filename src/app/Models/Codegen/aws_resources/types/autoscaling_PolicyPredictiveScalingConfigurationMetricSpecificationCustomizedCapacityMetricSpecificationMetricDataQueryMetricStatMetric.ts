import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricDimension,
  autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricDimension_GetTypes,
} from "./autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricDimension";

export interface autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetric {
  // Dimensions of the metric.
  dimensions?: Array<autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricDimension>;

  // Name of the metric.
  metricName?: string;

  // Namespace of the metric.
  namespace?: string;
}

export function autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetric_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "dimensions",
      "Dimensions of the metric.",
      autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricDimension_GetTypes(),
      false,
      false,
    ),
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
  ];
}
