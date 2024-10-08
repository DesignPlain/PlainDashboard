import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface customerprofiles_DomainMatchingJobSchedule {
  // The day when the Identity Resolution Job should run every week.
  dayOfTheWeek?: string;

  // The time when the Identity Resolution Job should run every week.
  time?: string;
}

export function customerprofiles_DomainMatchingJobSchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'dayOfTheWeek',
      'The day when the Identity Resolution Job should run every week.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'time',
      'The time when the Identity Resolution Job should run every week.',
      () => [],
      true,
      false,
    ),
  ];
}
