import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface gamelift_GameServerGroupInstanceDefinition {
  // An EC2 instance type.
  instanceType?: string;

  /*
Instance weighting that indicates how much this instance type contributes
to the total capacity of a game server group.
Instance weights are used by GameLift FleetIQ to calculate the instance type's cost per unit hour and better identify
the most cost-effective options.
*/
  weightedCapacity?: string;
}

export function gamelift_GameServerGroupInstanceDefinition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "instanceType",
      "An EC2 instance type.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "weightedCapacity",
      "Instance weighting that indicates how much this instance type contributes\nto the total capacity of a game server group.\nInstance weights are used by GameLift FleetIQ to calculate the instance type's cost per unit hour and better identify\nthe most cost-effective options.",
      [],
      false,
      false,
    ),
  ];
}
