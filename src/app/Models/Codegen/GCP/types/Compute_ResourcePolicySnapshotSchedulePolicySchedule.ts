import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_ResourcePolicySnapshotSchedulePolicyScheduleDailySchedule,
  Compute_ResourcePolicySnapshotSchedulePolicyScheduleDailySchedule_GetTypes,
} from "./Compute_ResourcePolicySnapshotSchedulePolicyScheduleDailySchedule";
import {
  Compute_ResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule,
  Compute_ResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule_GetTypes,
} from "./Compute_ResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule";
import {
  Compute_ResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule,
  Compute_ResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule_GetTypes,
} from "./Compute_ResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule";

export interface Compute_ResourcePolicySnapshotSchedulePolicySchedule {
  /*
The policy will execute every nth hour starting at the specified time.
Structure is documented below.
*/
  HourlySchedule?: Compute_ResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule;

  /*
Allows specifying a snapshot time for each day of the week.
Structure is documented below.
*/
  WeeklySchedule?: Compute_ResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule;

  /*
The policy will execute every nth day at the specified time.
Structure is documented below.
*/
  DailySchedule?: Compute_ResourcePolicySnapshotSchedulePolicyScheduleDailySchedule;
}

export function Compute_ResourcePolicySnapshotSchedulePolicySchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "HourlySchedule",
      "The policy will execute every nth hour starting at the specified time.\nStructure is documented below.",
      Compute_ResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "WeeklySchedule",
      "Allows specifying a snapshot time for each day of the week.\nStructure is documented below.",
      Compute_ResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DailySchedule",
      "The policy will execute every nth day at the specified time.\nStructure is documented below.",
      Compute_ResourcePolicySnapshotSchedulePolicyScheduleDailySchedule_GetTypes(),
      false,
      true,
    ),
  ];
}
