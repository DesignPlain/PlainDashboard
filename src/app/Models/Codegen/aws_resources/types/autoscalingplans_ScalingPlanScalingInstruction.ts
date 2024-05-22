import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  autoscalingplans_ScalingPlanScalingInstructionPredefinedLoadMetricSpecification,
  autoscalingplans_ScalingPlanScalingInstructionPredefinedLoadMetricSpecification_GetTypes,
} from "./autoscalingplans_ScalingPlanScalingInstructionPredefinedLoadMetricSpecification";
import {
  autoscalingplans_ScalingPlanScalingInstructionTargetTrackingConfiguration,
  autoscalingplans_ScalingPlanScalingInstructionTargetTrackingConfiguration_GetTypes,
} from "./autoscalingplans_ScalingPlanScalingInstructionTargetTrackingConfiguration";
import {
  autoscalingplans_ScalingPlanScalingInstructionCustomizedLoadMetricSpecification,
  autoscalingplans_ScalingPlanScalingInstructionCustomizedLoadMetricSpecification_GetTypes,
} from "./autoscalingplans_ScalingPlanScalingInstructionCustomizedLoadMetricSpecification";

export interface autoscalingplans_ScalingPlanScalingInstruction {
  // Predictive scaling mode. Valid values: `ForecastAndScale`, `ForecastOnly`.
  predictiveScalingMode?: string;

  // Controls whether a resource's externally created scaling policies are kept or replaced. Valid values: `KeepExternalPolicies`, `ReplaceExternalPolicies`. Defaults to `KeepExternalPolicies`.
  scalingPolicyUpdateBehavior?: string;

  // Namespace of the AWS service. Valid values: `autoscaling`, `dynamodb`, `ecs`, `ec2`, `rds`.
  serviceNamespace?: string;

  // Maximum capacity of the resource. The exception to this upper limit is if you specify a non-default setting for `predictive_scaling_max_capacity_behavior`.
  maxCapacity?: number;

  /*
Defines the behavior that should be applied if the forecast capacity approaches or exceeds the maximum capacity specified for the resource.
Valid values: `SetForecastCapacityToMaxCapacity`, `SetMaxCapacityAboveForecastCapacity`, `SetMaxCapacityToForecastCapacity`.
*/
  predictiveScalingMaxCapacityBehavior?: string;

  // Minimum capacity of the resource.
  minCapacity?: number;

  // Size of the capacity buffer to use when the forecast capacity is close to or exceeds the maximum capacity.
  predictiveScalingMaxCapacityBuffer?: number;

  // ID of the resource. This string consists of the resource type and unique identifier.
  resourceId?: string;

  // Amount of time, in seconds, to buffer the run time of scheduled scaling actions when scaling out.
  scheduledActionBufferTime?: number;

  /*
Structure that defines new target tracking configurations. Each of these structures includes a specific scaling metric and a target value for the metric, along with various parameters to use with dynamic scaling.
More details can be found in the [AWS Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_TargetTrackingConfiguration.html).
*/
  targetTrackingConfigurations?: Array<autoscalingplans_ScalingPlanScalingInstructionTargetTrackingConfiguration>;

  /*
Customized load metric to use for predictive scaling. You must specify either `customized_load_metric_specification` or `predefined_load_metric_specification` when configuring predictive scaling.
More details can be found in the [AWS Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_CustomizedLoadMetricSpecification.html).
*/
  customizedLoadMetricSpecification?: autoscalingplans_ScalingPlanScalingInstructionCustomizedLoadMetricSpecification;

  // Boolean controlling whether dynamic scaling by AWS Auto Scaling is disabled. Defaults to `false`.
  disableDynamicScaling?: boolean;

  /*
Predefined load metric to use for predictive scaling. You must specify either `predefined_load_metric_specification` or `customized_load_metric_specification` when configuring predictive scaling.
More details can be found in the [AWS Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_PredefinedLoadMetricSpecification.html).
*/
  predefinedLoadMetricSpecification?: autoscalingplans_ScalingPlanScalingInstructionPredefinedLoadMetricSpecification;

  // Scalable dimension associated with the resource. Valid values: `autoscaling:autoScalingGroup:DesiredCapacity`, `dynamodb:index:ReadCapacityUnits`, `dynamodb:index:WriteCapacityUnits`, `dynamodb:table:ReadCapacityUnits`, `dynamodb:table:WriteCapacityUnits`, `ecs:service:DesiredCount`, `ec2:spot-fleet-request:TargetCapacity`, `rds:cluster:ReadReplicaCount`.
  scalableDimension?: string;
}

export function autoscalingplans_ScalingPlanScalingInstruction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "serviceNamespace",
      "Namespace of the AWS service. Valid values: `autoscaling`, `dynamodb`, `ecs`, `ec2`, `rds`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxCapacity",
      "Maximum capacity of the resource. The exception to this upper limit is if you specify a non-default setting for `predictive_scaling_max_capacity_behavior`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minCapacity",
      "Minimum capacity of the resource.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "targetTrackingConfigurations",
      "Structure that defines new target tracking configurations. Each of these structures includes a specific scaling metric and a target value for the metric, along with various parameters to use with dynamic scaling.\nMore details can be found in the [AWS Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_TargetTrackingConfiguration.html).",
      autoscalingplans_ScalingPlanScalingInstructionTargetTrackingConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "customizedLoadMetricSpecification",
      "Customized load metric to use for predictive scaling. You must specify either `customized_load_metric_specification` or `predefined_load_metric_specification` when configuring predictive scaling.\nMore details can be found in the [AWS Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_CustomizedLoadMetricSpecification.html).",
      autoscalingplans_ScalingPlanScalingInstructionCustomizedLoadMetricSpecification_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "predictiveScalingMode",
      "Predictive scaling mode. Valid values: `ForecastAndScale`, `ForecastOnly`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "predictiveScalingMaxCapacityBuffer",
      "Size of the capacity buffer to use when the forecast capacity is close to or exceeds the maximum capacity.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "predefinedLoadMetricSpecification",
      "Predefined load metric to use for predictive scaling. You must specify either `predefined_load_metric_specification` or `customized_load_metric_specification` when configuring predictive scaling.\nMore details can be found in the [AWS Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_PredefinedLoadMetricSpecification.html).",
      autoscalingplans_ScalingPlanScalingInstructionPredefinedLoadMetricSpecification_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "scalingPolicyUpdateBehavior",
      "Controls whether a resource's externally created scaling policies are kept or replaced. Valid values: `KeepExternalPolicies`, `ReplaceExternalPolicies`. Defaults to `KeepExternalPolicies`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "predictiveScalingMaxCapacityBehavior",
      "Defines the behavior that should be applied if the forecast capacity approaches or exceeds the maximum capacity specified for the resource.\nValid values: `SetForecastCapacityToMaxCapacity`, `SetMaxCapacityAboveForecastCapacity`, `SetMaxCapacityToForecastCapacity`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resourceId",
      "ID of the resource. This string consists of the resource type and unique identifier.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "scalableDimension",
      "Scalable dimension associated with the resource. Valid values: `autoscaling:autoScalingGroup:DesiredCapacity`, `dynamodb:index:ReadCapacityUnits`, `dynamodb:index:WriteCapacityUnits`, `dynamodb:table:ReadCapacityUnits`, `dynamodb:table:WriteCapacityUnits`, `ecs:service:DesiredCount`, `ec2:spot-fleet-request:TargetCapacity`, `rds:cluster:ReadReplicaCount`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "scheduledActionBufferTime",
      "Amount of time, in seconds, to buffer the run time of scheduled scaling actions when scaling out.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "disableDynamicScaling",
      "Boolean controlling whether dynamic scaling by AWS Auto Scaling is disabled. Defaults to `false`.",
      [],
      false,
      false,
    ),
  ];
}
