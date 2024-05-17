import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Firestore_BackupScheduleDailyRecurrence,
  Firestore_BackupScheduleDailyRecurrence_GetTypes,
} from "../types/Firestore_BackupScheduleDailyRecurrence";
import {
  Firestore_BackupScheduleWeeklyRecurrence,
  Firestore_BackupScheduleWeeklyRecurrence_GetTypes,
} from "../types/Firestore_BackupScheduleWeeklyRecurrence";

export interface BackupScheduleArgs {
  // For a schedule that runs daily at a specified time.
  DailyRecurrence?: Firestore_BackupScheduleDailyRecurrence;

  // The Firestore database id. Defaults to `"(default)"`.
  Database?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
For a daily backup recurrence, set this to a value up to 7 days. If you set a weekly backup recurrence, set this to a value up to 14 weeks.


- - -
*/
  Retention?: string;

  /*
For a schedule that runs weekly on a specific day and time.
Structure is documented below.
*/
  WeeklyRecurrence?: Firestore_BackupScheduleWeeklyRecurrence;
}
export class BackupSchedule extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
For a daily backup recurrence, set this to a value up to 7 days. If you set a weekly backup recurrence, set this to a value up to 14 weeks.


- - -
*/
  public Retention?: string;

  /*
For a schedule that runs weekly on a specific day and time.
Structure is documented below.
*/
  public WeeklyRecurrence?: Firestore_BackupScheduleWeeklyRecurrence;

  // For a schedule that runs daily at a specified time.
  public DailyRecurrence?: Firestore_BackupScheduleDailyRecurrence;

  // The Firestore database id. Defaults to `"(default)"`.
  public Database?: string;

  /*
The unique backup schedule identifier across all locations and databases for the given project. Format:
`projects/{{project}}/databases/{{database}}/backupSchedules/{{backupSchedule}}`
*/
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Database",
        'The Firestore database id. Defaults to `"(default)"`.',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Retention",
        "At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days.\nA duration in seconds with up to nine fractional digits, ending with 's'. Example: \"3.5s\".\nFor a daily backup recurrence, set this to a value up to 7 days. If you set a weekly backup recurrence, set this to a value up to 14 weeks.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "WeeklyRecurrence",
        "For a schedule that runs weekly on a specific day and time.\nStructure is documented below.",
        Firestore_BackupScheduleWeeklyRecurrence_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "DailyRecurrence",
        "For a schedule that runs daily at a specified time.",
        Firestore_BackupScheduleDailyRecurrence_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
