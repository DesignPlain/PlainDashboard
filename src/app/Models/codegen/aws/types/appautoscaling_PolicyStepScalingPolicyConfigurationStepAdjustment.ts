import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appautoscaling_PolicyStepScalingPolicyConfigurationStepAdjustment {
  // Lower bound for the difference between the alarm threshold and the CloudWatch metric. Without a value, AWS will treat this bound as negative infinity.
  metricIntervalLowerBound?: string;

  // Upper bound for the difference between the alarm threshold and the CloudWatch metric. Without a value, AWS will treat this bound as infinity. The upper bound must be greater than the lower bound.
  metricIntervalUpperBound?: string;

  // Number of members by which to scale, when the adjustment bounds are breached. A positive value scales up. A negative value scales down.
  scalingAdjustment?: number;
}

export function appautoscaling_PolicyStepScalingPolicyConfigurationStepAdjustment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "metricIntervalLowerBound",
      "Lower bound for the difference between the alarm threshold and the CloudWatch metric. Without a value, AWS will treat this bound as negative infinity.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "metricIntervalUpperBound",
      "Upper bound for the difference between the alarm threshold and the CloudWatch metric. Without a value, AWS will treat this bound as infinity. The upper bound must be greater than the lower bound.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "scalingAdjustment",
      "Number of members by which to scale, when the adjustment bounds are breached. A positive value scales up. A negative value scales down.",
      () => [],
      true,
      false,
    ),
  ];
}
