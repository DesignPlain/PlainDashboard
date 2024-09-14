import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface osconfig_PatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth {
  // Represents the number of days before or after the given week day of month that the patch deployment is scheduled for.
  dayOffset?: number;

  // Week number in a month. 1-4 indicates the 1st to 4th week of the month. -1 indicates the last week of the month.
  weekOrdinal?: number;

  /*
A day of the week.
Possible values are: `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`.
*/
  dayOfWeek?: string;
}

export function osconfig_PatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "dayOffset",
      "Represents the number of days before or after the given week day of month that the patch deployment is scheduled for.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "weekOrdinal",
      "Week number in a month. 1-4 indicates the 1st to 4th week of the month. -1 indicates the last week of the month.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "dayOfWeek",
      "A day of the week.\nPossible values are: `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`.",
      () => [],
      true,
      true,
    ),
  ];
}
