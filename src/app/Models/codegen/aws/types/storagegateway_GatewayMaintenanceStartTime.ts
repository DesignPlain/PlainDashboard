import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface storagegateway_GatewayMaintenanceStartTime {
  // The day of the month component of the maintenance start time represented as an ordinal number from 1 to 28, where 1 represents the first day of the month and 28 represents the last day of the month.
  dayOfMonth?: string;

  // The day of the week component of the maintenance start time week represented as an ordinal number from 0 to 6, where 0 represents Sunday and 6 Saturday.
  dayOfWeek?: string;

  // The hour component of the maintenance start time represented as _hh_, where _hh_ is the hour (00 to 23). The hour of the day is in the time zone of the gateway.
  hourOfDay?: number;

  // The minute component of the maintenance start time represented as _mm_, where _mm_ is the minute (00 to 59). The minute of the hour is in the time zone of the gateway.
  minuteOfHour?: number;
}

export function storagegateway_GatewayMaintenanceStartTime_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "minuteOfHour",
      "The minute component of the maintenance start time represented as _mm_, where _mm_ is the minute (00 to 59). The minute of the hour is in the time zone of the gateway.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dayOfMonth",
      "The day of the month component of the maintenance start time represented as an ordinal number from 1 to 28, where 1 represents the first day of the month and 28 represents the last day of the month.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dayOfWeek",
      "The day of the week component of the maintenance start time week represented as an ordinal number from 0 to 6, where 0 represents Sunday and 6 Saturday.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "hourOfDay",
      "The hour component of the maintenance start time represented as _hh_, where _hh_ is the hour (00 to 23). The hour of the day is in the time zone of the gateway.",
      () => [],
      true,
      false,
    ),
  ];
}
