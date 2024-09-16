import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface osconfig_PatchDeploymentRecurringScheduleWeekly {
  /*
IANA Time Zone Database time zone, e.g. "America/New_York".
Possible values are: `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`.
*/
  dayOfWeek?: string;
}

export function osconfig_PatchDeploymentRecurringScheduleWeekly_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'dayOfWeek',
      'IANA Time Zone Database time zone, e.g. "America/New_York".\nPossible values are: `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`.',
      () => [],
      true,
      true,
    ),
  ];
}
