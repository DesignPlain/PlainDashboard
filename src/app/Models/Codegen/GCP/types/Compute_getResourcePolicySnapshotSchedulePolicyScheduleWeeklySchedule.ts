import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_getResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeek,
  compute_getResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeek_GetTypes,
} from "./compute_getResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeek";

export interface compute_getResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule {
  // May contain up to seven (one for each day of the week) snapshot times.
  dayOfWeeks?: Array<compute_getResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeek>;
}

export function compute_getResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "dayOfWeeks",
      "May contain up to seven (one for each day of the week) snapshot times.",
      compute_getResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeek_GetTypes(),
      true,
      false,
    ),
  ];
}
