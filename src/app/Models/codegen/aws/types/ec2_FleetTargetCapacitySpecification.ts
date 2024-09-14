import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_FleetTargetCapacitySpecification {
  // The number of units to request, filled using `default_target_capacity_type`.
  totalTargetCapacity?: number;

  // Default target capacity type. Valid values: `on-demand`, `spot`.
  defaultTargetCapacityType?: string;

  // The number of On-Demand units to request.
  onDemandTargetCapacity?: number;

  // The number of Spot units to request.
  spotTargetCapacity?: number;

  /*
The unit for the target capacity.
If you specify `target_capacity_unit_type`, `instance_requirements` must be specified.
*/
  targetCapacityUnitType?: string;
}

export function ec2_FleetTargetCapacitySpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "spotTargetCapacity",
      "The number of Spot units to request.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "targetCapacityUnitType",
      "The unit for the target capacity.\nIf you specify `target_capacity_unit_type`, `instance_requirements` must be specified.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "totalTargetCapacity",
      "The number of units to request, filled using `default_target_capacity_type`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "defaultTargetCapacityType",
      "Default target capacity type. Valid values: `on-demand`, `spot`.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "onDemandTargetCapacity",
      "The number of On-Demand units to request.",
      () => [],
      false,
      true,
    ),
  ];
}
