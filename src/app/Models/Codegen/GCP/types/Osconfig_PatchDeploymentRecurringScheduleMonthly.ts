import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Osconfig_PatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth,
  Osconfig_PatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth_GetTypes,
} from "./Osconfig_PatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth";

export interface Osconfig_PatchDeploymentRecurringScheduleMonthly {
  /*
One day of the month. 1-31 indicates the 1st to the 31st day. -1 indicates the last day of the month.
Months without the target day will be skipped. For example, a schedule to run "every month on the 31st"
will not run in February, April, June, etc.
*/
  MonthDay?: number;

  /*
Week day in a month.
Structure is documented below.
*/
  WeekDayOfMonth?: Osconfig_PatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth;
}

export function Osconfig_PatchDeploymentRecurringScheduleMonthly_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "WeekDayOfMonth",
      "Week day in a month.\nStructure is documented below.",
      Osconfig_PatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MonthDay",
      'One day of the month. 1-31 indicates the 1st to the 31st day. -1 indicates the last day of the month.\nMonths without the target day will be skipped. For example, a schedule to run "every month on the 31st"\nwill not run in February, April, June, etc.',
      [],
      false,
      true,
    ),
  ];
}
