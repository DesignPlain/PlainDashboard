import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Storage_TransferJobScheduleStartTimeOfDay {
  // Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  Nanos?: number;

  // Seconds of minutes of the time. Must normally be from 0 to 59.
  Seconds?: number;

  // Hours of day in 24 hour format. Should be from 0 to 23
  Hours?: number;

  // Minutes of hour of day. Must be from 0 to 59.
  Minutes?: number;
}

export function Storage_TransferJobScheduleStartTimeOfDay_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Nanos",
      "Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Seconds",
      "Seconds of minutes of the time. Must normally be from 0 to 59.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Hours",
      "Hours of day in 24 hour format. Should be from 0 to 23",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Minutes",
      "Minutes of hour of day. Must be from 0 to 59.",
      [],
      true,
      false,
    ),
  ];
}
