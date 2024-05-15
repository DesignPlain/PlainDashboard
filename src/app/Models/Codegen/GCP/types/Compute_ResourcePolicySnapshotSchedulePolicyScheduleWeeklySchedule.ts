import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_ResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeek,
  Compute_ResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeek_GetTypes,
} from "./Compute_ResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeek";

export interface Compute_ResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule {
  /*
May contain up to seven (one for each day of the week) snapshot times.
Structure is documented below.
*/
  DayOfWeeks?: Array<Compute_ResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeek>;
}

export function Compute_ResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "DayOfWeeks",
      "May contain up to seven (one for each day of the week) snapshot times.\nStructure is documented below.",
      Compute_ResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeek_GetTypes(),
      true,
      true,
    ),
  ];
}
