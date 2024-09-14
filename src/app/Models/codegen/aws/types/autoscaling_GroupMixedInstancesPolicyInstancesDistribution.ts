import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface autoscaling_GroupMixedInstancesPolicyInstancesDistribution {
  // Percentage split between on-demand and Spot instances above the base on-demand capacity. Default: `100`.
  onDemandPercentageAboveBaseCapacity?: number;

  // How to allocate capacity across the Spot pools. Valid values: `lowest-price`, `capacity-optimized`, `capacity-optimized-prioritized`, and `price-capacity-optimized`. Default: `lowest-price`.
  spotAllocationStrategy?: string;

  // Number of Spot pools per availability zone to allocate capacity. EC2 Auto Scaling selects the cheapest Spot pools and evenly allocates Spot capacity across the number of Spot pools that you specify. Only available with `spot_allocation_strategy` set to `lowest-price`. Otherwise it must be set to `0`, if it has been defined before. Default: `2`.
  spotInstancePools?: number;

  // Maximum price per unit hour that the user is willing to pay for the Spot instances. Default: an empty string which means the on-demand price.
  spotMaxPrice?: string;

  // Strategy to use when launching on-demand instances. Valid values: `prioritized`, `lowest-price`. Default: `prioritized`.
  onDemandAllocationStrategy?: string;

  // Absolute minimum amount of desired capacity that must be fulfilled by on-demand instances. Default: `0`.
  onDemandBaseCapacity?: number;
}

export function autoscaling_GroupMixedInstancesPolicyInstancesDistribution_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "onDemandAllocationStrategy",
      "Strategy to use when launching on-demand instances. Valid values: `prioritized`, `lowest-price`. Default: `prioritized`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "onDemandBaseCapacity",
      "Absolute minimum amount of desired capacity that must be fulfilled by on-demand instances. Default: `0`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "onDemandPercentageAboveBaseCapacity",
      "Percentage split between on-demand and Spot instances above the base on-demand capacity. Default: `100`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "spotAllocationStrategy",
      "How to allocate capacity across the Spot pools. Valid values: `lowest-price`, `capacity-optimized`, `capacity-optimized-prioritized`, and `price-capacity-optimized`. Default: `lowest-price`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "spotInstancePools",
      "Number of Spot pools per availability zone to allocate capacity. EC2 Auto Scaling selects the cheapest Spot pools and evenly allocates Spot capacity across the number of Spot pools that you specify. Only available with `spot_allocation_strategy` set to `lowest-price`. Otherwise it must be set to `0`, if it has been defined before. Default: `2`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "spotMaxPrice",
      "Maximum price per unit hour that the user is willing to pay for the Spot instances. Default: an empty string which means the on-demand price.",
      () => [],
      false,
      false,
    ),
  ];
}
