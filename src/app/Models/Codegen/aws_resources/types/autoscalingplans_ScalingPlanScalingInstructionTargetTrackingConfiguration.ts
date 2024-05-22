import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  autoscalingplans_ScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification,
  autoscalingplans_ScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification_GetTypes,
} from "./autoscalingplans_ScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification";
import {
  autoscalingplans_ScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification,
  autoscalingplans_ScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification_GetTypes,
} from "./autoscalingplans_ScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification";

export interface autoscalingplans_ScalingPlanScalingInstructionTargetTrackingConfiguration {
  /*
Predefined metric. You can specify either `predefined_scaling_metric_specification` or `customized_scaling_metric_specification`.
More details can be found in the [AWS Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_PredefinedScalingMetricSpecification.html).
*/
  predefinedScalingMetricSpecification?: autoscalingplans_ScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification;

  /*
Amount of time, in seconds, after a scale in activity completes before another scale in activity can start.
This value is not used if the scalable resource is an Auto Scaling group.
*/
  scaleInCooldown?: number;

  /*
Amount of time, in seconds, after a scale-out activity completes before another scale-out activity can start.
This value is not used if the scalable resource is an Auto Scaling group.
*/
  scaleOutCooldown?: number;

  // Target value for the metric.
  targetValue?: number;

  /*
Customized metric. You can specify either `customized_scaling_metric_specification` or `predefined_scaling_metric_specification`.
More details can be found in the [AWS Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_CustomizedScalingMetricSpecification.html).
*/
  customizedScalingMetricSpecification?: autoscalingplans_ScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification;

  // Boolean indicating whether scale in by the target tracking scaling policy is disabled. Defaults to `false`.
  disableScaleIn?: boolean;

  /*
Estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics.
This value is used only if the resource is an Auto Scaling group.
*/
  estimatedInstanceWarmup?: number;
}

export function autoscalingplans_ScalingPlanScalingInstructionTargetTrackingConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "scaleInCooldown",
      "Amount of time, in seconds, after a scale in activity completes before another scale in activity can start.\nThis value is not used if the scalable resource is an Auto Scaling group.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "scaleOutCooldown",
      "Amount of time, in seconds, after a scale-out activity completes before another scale-out activity can start.\nThis value is not used if the scalable resource is an Auto Scaling group.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "targetValue",
      "Target value for the metric.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "customizedScalingMetricSpecification",
      "Customized metric. You can specify either `customized_scaling_metric_specification` or `predefined_scaling_metric_specification`.\nMore details can be found in the [AWS Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_CustomizedScalingMetricSpecification.html).",
      autoscalingplans_ScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "disableScaleIn",
      "Boolean indicating whether scale in by the target tracking scaling policy is disabled. Defaults to `false`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "estimatedInstanceWarmup",
      "Estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics.\nThis value is used only if the resource is an Auto Scaling group.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "predefinedScalingMetricSpecification",
      "Predefined metric. You can specify either `predefined_scaling_metric_specification` or `customized_scaling_metric_specification`.\nMore details can be found in the [AWS Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_PredefinedScalingMetricSpecification.html).",
      autoscalingplans_ScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification_GetTypes(),
      false,
      false,
    ),
  ];
}
