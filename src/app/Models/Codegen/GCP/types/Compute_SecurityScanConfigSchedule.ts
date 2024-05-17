import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_SecurityScanConfigSchedule {
  /*
A timestamp indicates when the next run will be scheduled. The value is refreshed
by the server after each run. If unspecified, it will default to current server time,
which means the scan will be scheduled to start immediately.
*/
  ScheduleTime?: string;

  // The duration of time between executions in days
  IntervalDurationDays?: number;
}

export function Compute_SecurityScanConfigSchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ScheduleTime",
      "A timestamp indicates when the next run will be scheduled. The value is refreshed\nby the server after each run. If unspecified, it will default to current server time,\nwhich means the scan will be scheduled to start immediately.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "IntervalDurationDays",
      "The duration of time between executions in days",
      [],
      true,
      false,
    ),
  ];
}
