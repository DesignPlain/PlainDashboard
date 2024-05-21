import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_SecurityScanConfigSchedule {
  /*
A timestamp indicates when the next run will be scheduled. The value is refreshed
by the server after each run. If unspecified, it will default to current server time,
which means the scan will be scheduled to start immediately.
*/
  scheduleTime?: string;

  // The duration of time between executions in days
  intervalDurationDays?: number;
}

export function compute_SecurityScanConfigSchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "intervalDurationDays",
      "The duration of time between executions in days",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "scheduleTime",
      "A timestamp indicates when the next run will be scheduled. The value is refreshed\nby the server after each run. If unspecified, it will default to current server time,\nwhich means the scan will be scheduled to start immediately.",
      [],
      false,
      false,
    ),
  ];
}
