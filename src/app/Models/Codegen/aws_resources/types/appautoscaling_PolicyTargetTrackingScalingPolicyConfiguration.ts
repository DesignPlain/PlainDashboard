import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification,
  appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification_GetTypes,
} from "./appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification";
import {
  appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification,
  appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification_GetTypes,
} from "./appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification";

export interface appautoscaling_PolicyTargetTrackingScalingPolicyConfiguration {
  // Custom CloudWatch metric. Documentation can be found  at: [AWS Customized Metric Specification](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_CustomizedMetricSpecification.html). See supported fields below.
  customizedMetricSpecification?: appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification;

  // Whether scale in by the target tracking policy is disabled. If the value is true, scale in is disabled and the target tracking policy won't remove capacity from the scalable resource. Otherwise, scale in is enabled and the target tracking policy can remove capacity from the scalable resource. The default value is `false`.
  disableScaleIn?: boolean;

  // Predefined metric. See supported fields below.
  predefinedMetricSpecification?: appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification;

  // Amount of time, in seconds, after a scale in activity completes before another scale in activity can start.
  scaleInCooldown?: number;

  // Amount of time, in seconds, after a scale out activity completes before another scale out activity can start.
  scaleOutCooldown?: number;

  // Target value for the metric.
  targetValue?: number;
}

export function appautoscaling_PolicyTargetTrackingScalingPolicyConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "scaleInCooldown",
      "Amount of time, in seconds, after a scale in activity completes before another scale in activity can start.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "scaleOutCooldown",
      "Amount of time, in seconds, after a scale out activity completes before another scale out activity can start.",
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
      "customizedMetricSpecification",
      "Custom CloudWatch metric. Documentation can be found  at: [AWS Customized Metric Specification](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_CustomizedMetricSpecification.html). See supported fields below.",
      appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "disableScaleIn",
      "Whether scale in by the target tracking policy is disabled. If the value is true, scale in is disabled and the target tracking policy won't remove capacity from the scalable resource. Otherwise, scale in is enabled and the target tracking policy can remove capacity from the scalable resource. The default value is `false`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "predefinedMetricSpecification",
      "Predefined metric. See supported fields below.",
      appautoscaling_PolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification_GetTypes(),
      false,
      false,
    ),
  ];
}
