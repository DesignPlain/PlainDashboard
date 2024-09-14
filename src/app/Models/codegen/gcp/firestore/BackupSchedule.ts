import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  firestore_BackupScheduleDailyRecurrence,
  firestore_BackupScheduleDailyRecurrence_GetTypes,
} from "../types/firestore_BackupScheduleDailyRecurrence";
import {
  firestore_BackupScheduleWeeklyRecurrence,
  firestore_BackupScheduleWeeklyRecurrence_GetTypes,
} from "../types/firestore_BackupScheduleWeeklyRecurrence";

export interface BackupScheduleArgs {
  // For a schedule that runs daily at a specified time.
  dailyRecurrence?: firestore_BackupScheduleDailyRecurrence;

  // The Firestore database id. Defaults to `"(default)"`.
  database?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
For a daily backup recurrence, set this to a value up to 7 days. If you set a weekly backup recurrence, set this to a value up to 14 weeks.


- - -
*/
  retention?: string;

  /*
For a schedule that runs weekly on a specific day and time.
Structure is documented below.
*/
  weeklyRecurrence?: firestore_BackupScheduleWeeklyRecurrence;
}
export class BackupSchedule extends DS_Resource {
  // For a schedule that runs daily at a specified time.
  public dailyRecurrence?: firestore_BackupScheduleDailyRecurrence;

  // The Firestore database id. Defaults to `"(default)"`.
  public database?: string;

  /*
The unique backup schedule identifier across all locations and databases for the given project. Format:
`projects/{{project}}/databases/{{database}}/backupSchedules/{{backupSchedule}}`
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
For a daily backup recurrence, set this to a value up to 7 days. If you set a weekly backup recurrence, set this to a value up to 14 weeks.


- - -
*/
  public retention?: string;

  /*
For a schedule that runs weekly on a specific day and time.
Structure is documented below.
*/
  public weeklyRecurrence?: firestore_BackupScheduleWeeklyRecurrence;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "dailyRecurrence",
        "For a schedule that runs daily at a specified time.",
        () => firestore_BackupScheduleDailyRecurrence_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "database",
        'The Firestore database id. Defaults to `"(default)"`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "retention",
        "At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days.\nA duration in seconds with up to nine fractional digits, ending with 's'. Example: \"3.5s\".\nFor a daily backup recurrence, set this to a value up to 7 days. If you set a weekly backup recurrence, set this to a value up to 14 weeks.\n\n\n- - -",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "weeklyRecurrence",
        "For a schedule that runs weekly on a specific day and time.\nStructure is documented below.",
        () => firestore_BackupScheduleWeeklyRecurrence_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
