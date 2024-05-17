import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule {
  // The number of hours between snapshots.
  HoursInCycle?: number;

  /*
Time within the window to start the operations.
It must be in an hourly format "HH:MM",
where HH : [00-23] and MM : [00] GMT.
eg: 21:00
*/
  StartTime?: string;
}

export function Compute_getResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "HoursInCycle",
      "The number of hours between snapshots.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "StartTime",
      'Time within the window to start the operations.\nIt must be in an hourly format "HH:MM",\nwhere HH : [00-23] and MM : [00] GMT.\neg: 21:00',
      [],
      true,
      false,
    ),
  ];
}
