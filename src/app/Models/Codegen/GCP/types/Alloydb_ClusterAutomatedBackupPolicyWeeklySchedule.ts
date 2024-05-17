import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Alloydb_ClusterAutomatedBackupPolicyWeeklyScheduleStartTime,
  Alloydb_ClusterAutomatedBackupPolicyWeeklyScheduleStartTime_GetTypes,
} from "./Alloydb_ClusterAutomatedBackupPolicyWeeklyScheduleStartTime";

export interface Alloydb_ClusterAutomatedBackupPolicyWeeklySchedule {
  /*
The times during the day to start a backup. At least one start time must be provided. The start times are assumed to be in UTC and to be an exact hour (e.g., 04:00:00).
Structure is documented below.
*/
  StartTimes?: Array<Alloydb_ClusterAutomatedBackupPolicyWeeklyScheduleStartTime>;

  /*
The days of the week to perform a backup. At least one day of the week must be provided.
Each value may be one of: `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`.
*/
  DaysOfWeeks?: Array<string>;
}

export function Alloydb_ClusterAutomatedBackupPolicyWeeklySchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "StartTimes",
      "The times during the day to start a backup. At least one start time must be provided. The start times are assumed to be in UTC and to be an exact hour (e.g., 04:00:00).\nStructure is documented below.",
      Alloydb_ClusterAutomatedBackupPolicyWeeklyScheduleStartTime_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "DaysOfWeeks",
      "The days of the week to perform a backup. At least one day of the week must be provided.\nEach value may be one of: `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
