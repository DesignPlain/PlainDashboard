import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  osconfig_PatchDeploymentRecurringScheduleMonthly,
  osconfig_PatchDeploymentRecurringScheduleMonthly_GetTypes,
} from "./osconfig_PatchDeploymentRecurringScheduleMonthly";
import {
  osconfig_PatchDeploymentRecurringScheduleTimeOfDay,
  osconfig_PatchDeploymentRecurringScheduleTimeOfDay_GetTypes,
} from "./osconfig_PatchDeploymentRecurringScheduleTimeOfDay";
import {
  osconfig_PatchDeploymentRecurringScheduleTimeZone,
  osconfig_PatchDeploymentRecurringScheduleTimeZone_GetTypes,
} from "./osconfig_PatchDeploymentRecurringScheduleTimeZone";
import {
  osconfig_PatchDeploymentRecurringScheduleWeekly,
  osconfig_PatchDeploymentRecurringScheduleWeekly_GetTypes,
} from "./osconfig_PatchDeploymentRecurringScheduleWeekly";

export interface osconfig_PatchDeploymentRecurringSchedule {
  /*
(Output)
The time the next patch job is scheduled to run.
A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
*/
  nextExecuteTime?: string;

  /*
The time that the recurring schedule becomes effective. Defaults to createTime of the patch deployment.
A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
*/
  startTime?: string;

  /*
Time of the day to run a recurring deployment.
Structure is documented below.
*/
  timeOfDay?: osconfig_PatchDeploymentRecurringScheduleTimeOfDay;

  /*
Defines the time zone that timeOfDay is relative to. The rules for daylight saving time are
determined by the chosen time zone.
Structure is documented below.
*/
  timeZone?: osconfig_PatchDeploymentRecurringScheduleTimeZone;

  /*
Schedule with weekly executions.
Structure is documented below.
*/
  weekly?: osconfig_PatchDeploymentRecurringScheduleWeekly;

  /*
The end time at which a recurring patch deployment schedule is no longer active.
A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
*/
  endTime?: string;

  /*
(Output)
The time the last patch job ran successfully.
A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
*/
  lastExecuteTime?: string;

  /*
Schedule with monthly executions.
Structure is documented below.
*/
  monthly?: osconfig_PatchDeploymentRecurringScheduleMonthly;
}

export function osconfig_PatchDeploymentRecurringSchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "timeZone",
      "Defines the time zone that timeOfDay is relative to. The rules for daylight saving time are\ndetermined by the chosen time zone.\nStructure is documented below.",
      osconfig_PatchDeploymentRecurringScheduleTimeZone_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "weekly",
      "Schedule with weekly executions.\nStructure is documented below.",
      osconfig_PatchDeploymentRecurringScheduleWeekly_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "endTime",
      'The end time at which a recurring patch deployment schedule is no longer active.\nA timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "lastExecuteTime",
      '(Output)\nThe time the last patch job ran successfully.\nA timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "monthly",
      "Schedule with monthly executions.\nStructure is documented below.",
      osconfig_PatchDeploymentRecurringScheduleMonthly_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "nextExecuteTime",
      '(Output)\nThe time the next patch job is scheduled to run.\nA timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "startTime",
      'The time that the recurring schedule becomes effective. Defaults to createTime of the patch deployment.\nA timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "timeOfDay",
      "Time of the day to run a recurring deployment.\nStructure is documented below.",
      osconfig_PatchDeploymentRecurringScheduleTimeOfDay_GetTypes(),
      true,
      true,
    ),
  ];
}
