import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeek {
  // The day of the week to create the snapshot. e.g. MONDAY Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  Day?: string;

  /*
Time within the window to start the operations.
It must be in format "HH:MM", where HH : [00-23] and MM : [00-00] GMT.
*/
  StartTime?: string;
}

export function Compute_getResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeek_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Day",
      'The day of the week to create the snapshot. e.g. MONDAY Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "StartTime",
      'Time within the window to start the operations.\nIt must be in format "HH:MM", where HH : [00-23] and MM : [00-00] GMT.',
      [],
      true,
      false,
    ),
  ];
}
