import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_getResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeek,
  Compute_getResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeek_GetTypes,
} from "./Compute_getResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeek";

export interface Compute_getResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule {
  // May contain up to seven (one for each day of the week) snapshot times.
  DayOfWeeks?: Array<Compute_getResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeek>;
}

export function Compute_getResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "DayOfWeeks",
      "May contain up to seven (one for each day of the week) snapshot times.",
      Compute_getResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeek_GetTypes(),
      true,
      false,
    ),
  ];
}
