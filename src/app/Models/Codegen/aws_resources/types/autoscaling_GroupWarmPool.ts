import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  autoscaling_GroupWarmPoolInstanceReusePolicy,
  autoscaling_GroupWarmPoolInstanceReusePolicy_GetTypes,
} from "./autoscaling_GroupWarmPoolInstanceReusePolicy";

export interface autoscaling_GroupWarmPool {
  // Whether instances in the Auto Scaling group can be returned to the warm pool on scale in. The default is to terminate instances in the Auto Scaling group when the group scales in.
  instanceReusePolicy?: autoscaling_GroupWarmPoolInstanceReusePolicy;

  // Total maximum number of instances that are allowed to be in the warm pool or in any state except Terminated for the Auto Scaling group.
  maxGroupPreparedCapacity?: number;

  // Minimum number of instances to maintain in the warm pool. This helps you to ensure that there is always a certain number of warmed instances available to handle traffic spikes. Defaults to 0 if not specified.
  minSize?: number;

  // Sets the instance state to transition to after the lifecycle hooks finish. Valid values are: Stopped (default), Running or Hibernated.
  poolState?: string;
}

export function autoscaling_GroupWarmPool_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxGroupPreparedCapacity",
      "Total maximum number of instances that are allowed to be in the warm pool or in any state except Terminated for the Auto Scaling group.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minSize",
      "Minimum number of instances to maintain in the warm pool. This helps you to ensure that there is always a certain number of warmed instances available to handle traffic spikes. Defaults to 0 if not specified.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "poolState",
      "Sets the instance state to transition to after the lifecycle hooks finish. Valid values are: Stopped (default), Running or Hibernated.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "instanceReusePolicy",
      "Whether instances in the Auto Scaling group can be returned to the warm pool on scale in. The default is to terminate instances in the Auto Scaling group when the group scales in.",
      autoscaling_GroupWarmPoolInstanceReusePolicy_GetTypes(),
      false,
      false,
    ),
  ];
}
