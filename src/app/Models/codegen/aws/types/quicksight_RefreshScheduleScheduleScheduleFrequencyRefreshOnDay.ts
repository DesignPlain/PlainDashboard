import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface quicksight_RefreshScheduleScheduleScheduleFrequencyRefreshOnDay {
  // The day of the month that you want to schedule refresh on.
  dayOfMonth?: string;

  // The day of the week that you want to schedule a refresh on. Valid values are `SUNDAY`, `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY` and `SATURDAY`.
  dayOfWeek?: string;
}

export function quicksight_RefreshScheduleScheduleScheduleFrequencyRefreshOnDay_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "dayOfMonth",
      "The day of the month that you want to schedule refresh on.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dayOfWeek",
      "The day of the week that you want to schedule a refresh on. Valid values are `SUNDAY`, `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY` and `SATURDAY`.",
      () => [],
      false,
      false,
    ),
  ];
}
