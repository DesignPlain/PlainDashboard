import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Alloydb_ClusterAutomatedBackupPolicyWeeklyScheduleStartTime {
  // Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  Hours?: number;

  // Minutes of hour of day. Currently, only the value 0 is supported.
  Minutes?: number;

  // Fractions of seconds in nanoseconds. Currently, only the value 0 is supported.
  Nanos?: number;

  // Seconds of minutes of the time. Currently, only the value 0 is supported.
  Seconds?: number;
}

export function Alloydb_ClusterAutomatedBackupPolicyWeeklyScheduleStartTime_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Hours",
      'Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Minutes",
      "Minutes of hour of day. Currently, only the value 0 is supported.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Nanos",
      "Fractions of seconds in nanoseconds. Currently, only the value 0 is supported.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Seconds",
      "Seconds of minutes of the time. Currently, only the value 0 is supported.",
      [],
      false,
      false,
    ),
  ];
}
