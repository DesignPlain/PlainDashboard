import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ecs_CapacityProviderAutoScalingGroupProviderManagedScaling {
  // Maximum step adjustment size. A number between 1 and 10,000.
  maximumScalingStepSize?: number;

  // Minimum step adjustment size. A number between 1 and 10,000.
  minimumScalingStepSize?: number;

  // Whether auto scaling is managed by ECS. Valid values are `ENABLED` and `DISABLED`.
  status?: string;

  // Target utilization for the capacity provider. A number between 1 and 100.
  targetCapacity?: number;

  // Period of time, in seconds, after a newly launched Amazon EC2 instance can contribute to CloudWatch metrics for Auto Scaling group. If this parameter is omitted, the default value of 300 seconds is used.
  instanceWarmupPeriod?: number;
}

export function ecs_CapacityProviderAutoScalingGroupProviderManagedScaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maximumScalingStepSize",
      "Maximum step adjustment size. A number between 1 and 10,000.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minimumScalingStepSize",
      "Minimum step adjustment size. A number between 1 and 10,000.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "status",
      "Whether auto scaling is managed by ECS. Valid values are `ENABLED` and `DISABLED`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "targetCapacity",
      "Target utilization for the capacity provider. A number between 1 and 100.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "instanceWarmupPeriod",
      "Period of time, in seconds, after a newly launched Amazon EC2 instance can contribute to CloudWatch metrics for Auto Scaling group. If this parameter is omitted, the default value of 300 seconds is used.",
      [],
      false,
      false,
    ),
  ];
}
