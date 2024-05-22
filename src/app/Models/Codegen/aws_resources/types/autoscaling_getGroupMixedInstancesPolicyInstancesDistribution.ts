import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface autoscaling_getGroupMixedInstancesPolicyInstancesDistribution {
  // Strategy used when launching on-demand instances.
  onDemandAllocationStrategy?: string;

  // Absolute minimum amount of desired capacity that must be fulfilled by on-demand instances.
  onDemandBaseCapacity?: number;

  //
  onDemandPercentageAboveBaseCapacity?: number;

  // Strategy used when launching Spot instances.
  spotAllocationStrategy?: string;

  // Number of Spot pools per availability zone to allocate capacity.
  spotInstancePools?: number;

  // Maximum price per unit hour that the user is willing to pay for the Spot instances.
  spotMaxPrice?: string;
}

export function autoscaling_getGroupMixedInstancesPolicyInstancesDistribution_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "onDemandPercentageAboveBaseCapacity",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "spotAllocationStrategy",
      "Strategy used when launching Spot instances.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "spotInstancePools",
      "Number of Spot pools per availability zone to allocate capacity.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "spotMaxPrice",
      "Maximum price per unit hour that the user is willing to pay for the Spot instances.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "onDemandAllocationStrategy",
      "Strategy used when launching on-demand instances.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "onDemandBaseCapacity",
      "Absolute minimum amount of desired capacity that must be fulfilled by on-demand instances.",
      [],
      true,
      false,
    ),
  ];
}
