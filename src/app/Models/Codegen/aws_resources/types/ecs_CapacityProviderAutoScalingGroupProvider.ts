import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ecs_CapacityProviderAutoScalingGroupProviderManagedScaling,
  ecs_CapacityProviderAutoScalingGroupProviderManagedScaling_GetTypes,
} from "./ecs_CapacityProviderAutoScalingGroupProviderManagedScaling";

export interface ecs_CapacityProviderAutoScalingGroupProvider {
  // Configuration block defining the parameters of the auto scaling. Detailed below.
  managedScaling?: ecs_CapacityProviderAutoScalingGroupProviderManagedScaling;

  // Enables or disables container-aware termination of instances in the auto scaling group when scale-in happens. Valid values are `ENABLED` and `DISABLED`.
  managedTerminationProtection?: string;

  // ARN of the associated auto scaling group.
  autoScalingGroupArn?: string;

  // Enables or disables a graceful shutdown of instances without disturbing workloads. Valid values are `ENABLED` and `DISABLED`. The default value is `ENABLED` when a capacity provider is created.
  managedDraining?: string;
}

export function ecs_CapacityProviderAutoScalingGroupProvider_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "managedScaling",
      "Configuration block defining the parameters of the auto scaling. Detailed below.",
      ecs_CapacityProviderAutoScalingGroupProviderManagedScaling_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "managedTerminationProtection",
      "Enables or disables container-aware termination of instances in the auto scaling group when scale-in happens. Valid values are `ENABLED` and `DISABLED`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "autoScalingGroupArn",
      "ARN of the associated auto scaling group.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "managedDraining",
      "Enables or disables a graceful shutdown of instances without disturbing workloads. Valid values are\u00a0`ENABLED`\u00a0and\u00a0`DISABLED`. The default value is `ENABLED` when a capacity provider is created.",
      [],
      false,
      false,
    ),
  ];
}
