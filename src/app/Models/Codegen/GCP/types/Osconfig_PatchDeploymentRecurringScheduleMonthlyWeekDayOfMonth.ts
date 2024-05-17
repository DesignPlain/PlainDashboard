import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Osconfig_PatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth {
  // Week number in a month. 1-4 indicates the 1st to 4th week of the month. -1 indicates the last week of the month.
  WeekOrdinal?: number;

  /*
A day of the week.
Possible values are: `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`.
*/
  DayOfWeek?: string;

  // Represents the number of days before or after the given week day of month that the patch deployment is scheduled for.
  DayOffset?: number;
}

export function Osconfig_PatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "WeekOrdinal",
      "Week number in a month. 1-4 indicates the 1st to 4th week of the month. -1 indicates the last week of the month.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "DayOfWeek",
      "A day of the week.\nPossible values are: `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "DayOffset",
      "Represents the number of days before or after the given week day of month that the patch deployment is scheduled for.",
      [],
      false,
      true,
    ),
  ];
}
