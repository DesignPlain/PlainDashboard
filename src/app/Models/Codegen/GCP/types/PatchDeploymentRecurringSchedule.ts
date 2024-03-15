import { PatchDeploymentRecurringScheduleMonthly } from "./PatchDeploymentRecurringScheduleMonthly";
import { PatchDeploymentRecurringScheduleTimeOfDay } from "./PatchDeploymentRecurringScheduleTimeOfDay";
import { PatchDeploymentRecurringScheduleTimeZone } from "./PatchDeploymentRecurringScheduleTimeZone";
import { PatchDeploymentRecurringScheduleWeekly } from "./PatchDeploymentRecurringScheduleWeekly";

export interface PatchDeploymentRecurringSchedule {
  /*
(Output)
The time the last patch job ran successfully.
A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
*/
  LastExecuteTime?: string;

  /*
Schedule with monthly executions.
Structure is documented below.
*/
  Monthly?: PatchDeploymentRecurringScheduleMonthly;

  /*
(Output)
The time the next patch job is scheduled to run.
A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
*/
  NextExecuteTime?: string;

  /*
The time that the recurring schedule becomes effective. Defaults to createTime of the patch deployment.
A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
*/
  StartTime?: string;

  /*
Time of the day to run a recurring deployment.
Structure is documented below.
*/
  TimeOfDay?: PatchDeploymentRecurringScheduleTimeOfDay;

  /*
Defines the time zone that timeOfDay is relative to. The rules for daylight saving time are
determined by the chosen time zone.
Structure is documented below.
*/
  TimeZone?: PatchDeploymentRecurringScheduleTimeZone;

  /*
Schedule with weekly executions.
Structure is documented below.
*/
  Weekly?: PatchDeploymentRecurringScheduleWeekly;

  /*
The end time at which a recurring patch deployment schedule is no longer active.
A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
*/
  EndTime?: string;
}
