import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appautoscaling_PolicyStepScalingPolicyConfiguration,
  appautoscaling_PolicyStepScalingPolicyConfiguration_GetTypes,
} from "../types/appautoscaling_PolicyStepScalingPolicyConfiguration";
import {
  appautoscaling_PolicyTargetTrackingScalingPolicyConfiguration,
  appautoscaling_PolicyTargetTrackingScalingPolicyConfiguration_GetTypes,
} from "../types/appautoscaling_PolicyTargetTrackingScalingPolicyConfiguration";

export interface PolicyArgs {
  // Name of the policy. Must be between 1 and 255 characters in length.
  name?: string;

  // Policy type. Valid values are `StepScaling` and `TargetTrackingScaling`. Defaults to `StepScaling`. Certain services only support only one policy type. For more information see the [Target Tracking Scaling Policies](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html) and [Step Scaling Policies](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html) documentation.
  policyType?: string;

  // Resource type and unique identifier string for the resource associated with the scaling policy. Documentation can be found in the `ResourceId` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_RegisterScalableTarget.html)
  resourceId?: string;

  // Scalable dimension of the scalable target. Documentation can be found in the `ScalableDimension` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_RegisterScalableTarget.html)
  scalableDimension?: string;

  // AWS service namespace of the scalable target. Documentation can be found in the `ServiceNamespace` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_RegisterScalableTarget.html)
  serviceNamespace?: string;

  // Step scaling policy configuration, requires `policy_type = "StepScaling"` (default). See supported fields below.
  stepScalingPolicyConfiguration?: appautoscaling_PolicyStepScalingPolicyConfiguration;

  // Target tracking policy, requires `policy_type = "TargetTrackingScaling"`. See supported fields below.
  targetTrackingScalingPolicyConfiguration?: appautoscaling_PolicyTargetTrackingScalingPolicyConfiguration;
}
export class Policy extends Resource {
  // Policy type. Valid values are `StepScaling` and `TargetTrackingScaling`. Defaults to `StepScaling`. Certain services only support only one policy type. For more information see the [Target Tracking Scaling Policies](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html) and [Step Scaling Policies](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html) documentation.
  public policyType?: string;

  // Step scaling policy configuration, requires `policy_type = "StepScaling"` (default). See supported fields below.
  public stepScalingPolicyConfiguration?: appautoscaling_PolicyStepScalingPolicyConfiguration;

  // ARN assigned by AWS to the scaling policy.
  public arn?: string;

  // Name of the policy. Must be between 1 and 255 characters in length.
  public name?: string;

  // Resource type and unique identifier string for the resource associated with the scaling policy. Documentation can be found in the `ResourceId` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_RegisterScalableTarget.html)
  public resourceId?: string;

  // Scalable dimension of the scalable target. Documentation can be found in the `ScalableDimension` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_RegisterScalableTarget.html)
  public scalableDimension?: string;

  // AWS service namespace of the scalable target. Documentation can be found in the `ServiceNamespace` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_RegisterScalableTarget.html)
  public serviceNamespace?: string;

  // Target tracking policy, requires `policy_type = "TargetTrackingScaling"`. See supported fields below.
  public targetTrackingScalingPolicyConfiguration?: appautoscaling_PolicyTargetTrackingScalingPolicyConfiguration;

  // List of CloudWatch alarm ARNs associated with the scaling policy.
  public alarmArns?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "resourceId",
        "Resource type and unique identifier string for the resource associated with the scaling policy. Documentation can be found in the `ResourceId` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_RegisterScalableTarget.html)",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "scalableDimension",
        "Scalable dimension of the scalable target. Documentation can be found in the `ScalableDimension` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_RegisterScalableTarget.html)",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceNamespace",
        "AWS service namespace of the scalable target. Documentation can be found in the `ServiceNamespace` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_RegisterScalableTarget.html)",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "stepScalingPolicyConfiguration",
        'Step scaling policy configuration, requires `policy_type = "StepScaling"` (default). See supported fields below.',
        appautoscaling_PolicyStepScalingPolicyConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "targetTrackingScalingPolicyConfiguration",
        'Target tracking policy, requires `policy_type = "TargetTrackingScaling"`. See supported fields below.',
        appautoscaling_PolicyTargetTrackingScalingPolicyConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the policy. Must be between 1 and 255 characters in length.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policyType",
        "Policy type. Valid values are `StepScaling` and `TargetTrackingScaling`. Defaults to `StepScaling`. Certain services only support only one policy type. For more information see the [Target Tracking Scaling Policies](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html) and [Step Scaling Policies](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html) documentation.",
        [],
        false,
        false,
      ),
    ];
  }
}
