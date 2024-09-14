import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface autoscaling_PolicyStepAdjustment {
  /*
Lower bound for the
difference between the alarm threshold and the CloudWatch metric.
Without a value, AWS will treat this bound as negative infinity.
*/
  metricIntervalLowerBound?: string;

  /*
Upper bound for the
difference between the alarm threshold and the CloudWatch metric.
Without a value, AWS will treat this bound as positive infinity. The upper bound
must be greater than the lower bound.

Notice the bounds are --relative-- to the alarm threshold, meaning that the starting point is not 0%!,(MISSING) but the alarm threshold. Check the official [docs](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html#as-scaling-steps) for a detailed example.

The following arguments are only available to "TargetTrackingScaling" type policies:
*/
  metricIntervalUpperBound?: string;

  /*
Number of members by which to
scale, when the adjustment bounds are breached. A positive value scales
up. A negative value scales down.
*/
  scalingAdjustment?: number;
}

export function autoscaling_PolicyStepAdjustment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "metricIntervalLowerBound",
      "Lower bound for the\ndifference between the alarm threshold and the CloudWatch metric.\nWithout a value, AWS will treat this bound as negative infinity.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "metricIntervalUpperBound",
      'Upper bound for the\ndifference between the alarm threshold and the CloudWatch metric.\nWithout a value, AWS will treat this bound as positive infinity. The upper bound\nmust be greater than the lower bound.\n\nNotice the bounds are **relative** to the alarm threshold, meaning that the starting point is not 0%, but the alarm threshold. Check the official [docs](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html#as-scaling-steps) for a detailed example.\n\nThe following arguments are only available to "TargetTrackingScaling" type policies:',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "scalingAdjustment",
      "Number of members by which to\nscale, when the adjustment bounds are breached. A positive value scales\nup. A negative value scales down.",
      () => [],
      true,
      false,
    ),
  ];
}
