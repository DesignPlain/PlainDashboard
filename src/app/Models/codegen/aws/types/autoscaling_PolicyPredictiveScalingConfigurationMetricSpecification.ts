import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecification,
  autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecification_GetTypes,
} from "./autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecification";
import {
  autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecification,
  autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecification_GetTypes,
} from "./autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecification";
import {
  autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecification,
  autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecification_GetTypes,
} from "./autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecification";
import {
  autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification,
  autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification_GetTypes,
} from "./autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification";
import {
  autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification,
  autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification_GetTypes,
} from "./autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification";
import {
  autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification,
  autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification_GetTypes,
} from "./autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification";

export interface autoscaling_PolicyPredictiveScalingConfigurationMetricSpecification {
  // Customized scaling metric specification.
  customizedScalingMetricSpecification?: autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecification;

  // Predefined load metric specification.
  predefinedLoadMetricSpecification?: autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification;

  // Metric pair specification from which Amazon EC2 Auto Scaling determines the appropriate scaling metric and load metric to use.
  predefinedMetricPairSpecification?: autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification;

  // Predefined scaling metric specification.
  predefinedScalingMetricSpecification?: autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification;

  // Target value for the metric.
  targetValue?: number;

  // Customized capacity metric specification. The field is only valid when you use `customized_load_metric_specification`
  customizedCapacityMetricSpecification?: autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecification;

  // Customized load metric specification.
  customizedLoadMetricSpecification?: autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecification;
}

export function autoscaling_PolicyPredictiveScalingConfigurationMetricSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "customizedLoadMetricSpecification",
      "Customized load metric specification.",
      () =>
        autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecification_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "customizedScalingMetricSpecification",
      "Customized scaling metric specification.",
      () =>
        autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecification_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "predefinedLoadMetricSpecification",
      "Predefined load metric specification.",
      () =>
        autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "predefinedMetricPairSpecification",
      "Metric pair specification from which Amazon EC2 Auto Scaling determines the appropriate scaling metric and load metric to use.",
      () =>
        autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "predefinedScalingMetricSpecification",
      "Predefined scaling metric specification.",
      () =>
        autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "targetValue",
      "Target value for the metric.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "customizedCapacityMetricSpecification",
      "Customized capacity metric specification. The field is only valid when you use `customized_load_metric_specification`",
      () =>
        autoscaling_PolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecification_GetTypes(),
      false,
      false,
    ),
  ];
}
