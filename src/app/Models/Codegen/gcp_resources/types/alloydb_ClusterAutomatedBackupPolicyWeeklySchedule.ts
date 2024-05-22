import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  alloydb_ClusterAutomatedBackupPolicyWeeklyScheduleStartTime,
  alloydb_ClusterAutomatedBackupPolicyWeeklyScheduleStartTime_GetTypes,
} from "./alloydb_ClusterAutomatedBackupPolicyWeeklyScheduleStartTime";

export interface alloydb_ClusterAutomatedBackupPolicyWeeklySchedule {
  /*
The days of the week to perform a backup. At least one day of the week must be provided.
Each value may be one of: `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`.
*/
  daysOfWeeks?: Array<string>;

  /*
The times during the day to start a backup. At least one start time must be provided. The start times are assumed to be in UTC and to be an exact hour (e.g., 04:00:00).
Structure is documented below.
*/
  startTimes?: Array<alloydb_ClusterAutomatedBackupPolicyWeeklyScheduleStartTime>;
}

export function alloydb_ClusterAutomatedBackupPolicyWeeklySchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "daysOfWeeks",
      "The days of the week to perform a backup. At least one day of the week must be provided.\nEach value may be one of: `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "startTimes",
      "The times during the day to start a backup. At least one start time must be provided. The start times are assumed to be in UTC and to be an exact hour (e.g., 04:00:00).\nStructure is documented below.",
      alloydb_ClusterAutomatedBackupPolicyWeeklyScheduleStartTime_GetTypes(),
      true,
      false,
    ),
  ];
}
