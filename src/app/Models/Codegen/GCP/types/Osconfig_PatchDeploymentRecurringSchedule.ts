import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Osconfig_PatchDeploymentRecurringScheduleWeekly,
  Osconfig_PatchDeploymentRecurringScheduleWeekly_GetTypes,
} from "./Osconfig_PatchDeploymentRecurringScheduleWeekly";
import {
  Osconfig_PatchDeploymentRecurringScheduleMonthly,
  Osconfig_PatchDeploymentRecurringScheduleMonthly_GetTypes,
} from "./Osconfig_PatchDeploymentRecurringScheduleMonthly";
import {
  Osconfig_PatchDeploymentRecurringScheduleTimeOfDay,
  Osconfig_PatchDeploymentRecurringScheduleTimeOfDay_GetTypes,
} from "./Osconfig_PatchDeploymentRecurringScheduleTimeOfDay";
import {
  Osconfig_PatchDeploymentRecurringScheduleTimeZone,
  Osconfig_PatchDeploymentRecurringScheduleTimeZone_GetTypes,
} from "./Osconfig_PatchDeploymentRecurringScheduleTimeZone";

export interface Osconfig_PatchDeploymentRecurringSchedule {
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
  TimeOfDay?: Osconfig_PatchDeploymentRecurringScheduleTimeOfDay;

  /*
Defines the time zone that timeOfDay is relative to. The rules for daylight saving time are
determined by the chosen time zone.
Structure is documented below.
*/
  TimeZone?: Osconfig_PatchDeploymentRecurringScheduleTimeZone;

  /*
Schedule with weekly executions.
Structure is documented below.
*/
  Weekly?: Osconfig_PatchDeploymentRecurringScheduleWeekly;

  /*
The end time at which a recurring patch deployment schedule is no longer active.
A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
*/
  EndTime?: string;

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
  Monthly?: Osconfig_PatchDeploymentRecurringScheduleMonthly;
}

export function Osconfig_PatchDeploymentRecurringSchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "LastExecuteTime",
      '(Output)\nThe time the last patch job ran successfully.\nA timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Monthly",
      "Schedule with monthly executions.\nStructure is documented below.",
      Osconfig_PatchDeploymentRecurringScheduleMonthly_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "NextExecuteTime",
      '(Output)\nThe time the next patch job is scheduled to run.\nA timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "StartTime",
      'The time that the recurring schedule becomes effective. Defaults to createTime of the patch deployment.\nA timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "TimeOfDay",
      "Time of the day to run a recurring deployment.\nStructure is documented below.",
      Osconfig_PatchDeploymentRecurringScheduleTimeOfDay_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "TimeZone",
      "Defines the time zone that timeOfDay is relative to. The rules for daylight saving time are\ndetermined by the chosen time zone.\nStructure is documented below.",
      Osconfig_PatchDeploymentRecurringScheduleTimeZone_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Weekly",
      "Schedule with weekly executions.\nStructure is documented below.",
      Osconfig_PatchDeploymentRecurringScheduleWeekly_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "EndTime",
      'The end time at which a recurring patch deployment schedule is no longer active.\nA timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".',
      [],
      false,
      true,
    ),
  ];
}
