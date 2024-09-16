import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  osconfig_PatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth,
  osconfig_PatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth_GetTypes,
} from './osconfig_PatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth';

export interface osconfig_PatchDeploymentRecurringScheduleMonthly {
  /*
One day of the month. 1-31 indicates the 1st to the 31st day. -1 indicates the last day of the month.
Months without the target day will be skipped. For example, a schedule to run "every month on the 31st"
will not run in February, April, June, etc.
*/
  monthDay?: number;

  /*
Week day in a month.
Structure is documented below.
*/
  weekDayOfMonth?: osconfig_PatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth;
}

export function osconfig_PatchDeploymentRecurringScheduleMonthly_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'monthDay',
      'One day of the month. 1-31 indicates the 1st to the 31st day. -1 indicates the last day of the month.\nMonths without the target day will be skipped. For example, a schedule to run "every month on the 31st"\nwill not run in February, April, June, etc.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'weekDayOfMonth',
      'Week day in a month.\nStructure is documented below.',
      () =>
        osconfig_PatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth_GetTypes(),
      false,
      true,
    ),
  ];
}
