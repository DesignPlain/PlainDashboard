import { PatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth } from "./PatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth";

export interface PatchDeploymentRecurringScheduleMonthly {
  /*
Week day in a month.
Structure is documented below.
*/
  WeekDayOfMonth?: PatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth;

  /*
One day of the month. 1-31 indicates the 1st to the 31st day. -1 indicates the last day of the month.
Months without the target day will be skipped. For example, a schedule to run "every month on the 31st"
will not run in February, April, June, etc.
*/
  MonthDay?: number;
}
