import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface finspace_KxClusterScalingGroupConfiguration {
  // The number of vCPUs that you want to reserve for each node of this kdb cluster on the scaling group host.
  cpu?: number;

  // An optional hard limit on the amount of memory a kdb cluster can use.
  memoryLimit?: number;

  // A reservation of the minimum amount of memory that should be available on the scaling group for a kdb cluster to be successfully placed in a scaling group.
  memoryReservation?: number;

  // The number of kdb cluster nodes.
  nodeCount?: number;

  // A unique identifier for the kdb scaling group.
  scalingGroupName?: string;
}

export function finspace_KxClusterScalingGroupConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "cpu",
      "The number of vCPUs that you want to reserve for each node of this kdb cluster on the scaling group host.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "memoryLimit",
      "An optional hard limit on the amount of memory a kdb cluster can use.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "memoryReservation",
      "A reservation of the minimum amount of memory that should be available on the scaling group for a kdb cluster to be successfully placed in a scaling group.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "nodeCount",
      "The number of kdb cluster nodes.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "scalingGroupName",
      "A unique identifier for the kdb scaling group.",
      () => [],
      true,
      true,
    ),
  ];
}
