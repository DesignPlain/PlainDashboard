import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_ResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule {
  // The number of hours between snapshots.
  hoursInCycle?: number;

  /*
Time within the window to start the operations.
It must be in an hourly format "HH:MM",
where HH : [00-23] and MM : [00] GMT.
eg: 21:00
*/
  startTime?: string;
}

export function compute_ResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "hoursInCycle",
      "The number of hours between snapshots.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "startTime",
      'Time within the window to start the operations.\nIt must be in an hourly format "HH:MM",\nwhere HH : [00-23] and MM : [00] GMT.\neg: 21:00',
      () => [],
      true,
      true,
    ),
  ];
}
