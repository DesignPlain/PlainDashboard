import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  autoscaling_getGroupWarmPoolInstanceReusePolicy,
  autoscaling_getGroupWarmPoolInstanceReusePolicy_GetTypes,
} from "./autoscaling_getGroupWarmPoolInstanceReusePolicy";

export interface autoscaling_getGroupWarmPool {
  // List of instance reuse policy objects.
  instanceReusePolicies?: Array<autoscaling_getGroupWarmPoolInstanceReusePolicy>;

  //
  maxGroupPreparedCapacity?: number;

  // Minimum number of instances to maintain in the warm pool.
  minSize?: number;

  // Instance state to transition to after the lifecycle actions are complete.
  poolState?: string;
}

export function autoscaling_getGroupWarmPool_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "poolState",
      "Instance state to transition to after the lifecycle actions are complete.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "instanceReusePolicies",
      "List of instance reuse policy objects.",
      autoscaling_getGroupWarmPoolInstanceReusePolicy_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxGroupPreparedCapacity",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minSize",
      "Minimum number of instances to maintain in the warm pool.",
      [],
      true,
      false,
    ),
  ];
}
