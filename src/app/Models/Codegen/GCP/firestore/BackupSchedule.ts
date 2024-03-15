import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { BackupScheduleWeeklyRecurrence } from "../types/BackupScheduleWeeklyRecurrence";
import { BackupScheduleDailyRecurrence } from "../types/BackupScheduleDailyRecurrence";

export interface BackupScheduleArgs {
  /*
For a schedule that runs weekly on a specific day and time.
Structure is documented below.
*/
  WeeklyRecurrence?: BackupScheduleWeeklyRecurrence;

  // For a schedule that runs daily at a specified time.
  DailyRecurrence?: BackupScheduleDailyRecurrence;

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
  public WeeklyRecurrence?: BackupScheduleWeeklyRecurrence;

  // For a schedule that runs daily at a specified time.
  public DailyRecurrence?: BackupScheduleDailyRecurrence;

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
        "Retention",
        "At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days.\nA duration in seconds with up to nine fractional digits, ending with 's'. Example: \"3.5s\".\nFor a daily backup recurrence, set this to a value up to 7 days. If you set a weekly backup recurrence, set this to a value up to 14 weeks.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "WeeklyRecurrence",
        "For a schedule that runs weekly on a specific day and time.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DailyRecurrence",
        "For a schedule that runs daily at a specified time.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Database",
        'The Firestore database id. Defaults to `"(default)"`.',
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
    ];
  }
}
