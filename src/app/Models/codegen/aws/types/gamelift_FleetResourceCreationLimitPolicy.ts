import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface gamelift_FleetResourceCreationLimitPolicy {
  // Maximum number of game sessions that an individual can create during the policy period.
  newGameSessionsPerCreator?: number;

  // Time span used in evaluating the resource creation limit policy.
  policyPeriodInMinutes?: number;
}

export function gamelift_FleetResourceCreationLimitPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'newGameSessionsPerCreator',
      'Maximum number of game sessions that an individual can create during the policy period.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'policyPeriodInMinutes',
      'Time span used in evaluating the resource creation limit policy.',
      () => [],
      false,
      false,
    ),
  ];
}
