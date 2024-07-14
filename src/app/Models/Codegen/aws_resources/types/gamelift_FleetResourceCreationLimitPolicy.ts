import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface gamelift_FleetResourceCreationLimitPolicy {
  // Time span used in evaluating the resource creation limit policy.
  policyPeriodInMinutes?: number;

  // Maximum number of game sessions that an individual can create during the policy period.
  newGameSessionsPerCreator?: number;
}

export function gamelift_FleetResourceCreationLimitPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "policyPeriodInMinutes",
      "Time span used in evaluating the resource creation limit policy.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "newGameSessionsPerCreator",
      "Maximum number of game sessions that an individual can create during the policy period.",
      [],
      false,
      false,
    ),
  ];
}
