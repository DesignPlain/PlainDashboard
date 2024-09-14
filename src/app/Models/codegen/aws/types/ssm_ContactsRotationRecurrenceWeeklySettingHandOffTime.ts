import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ssm_ContactsRotationRecurrenceWeeklySettingHandOffTime {
  // (Required) The hour of the day.
  hourOfDay?: number;

  // (Required) The minutes of the hour.
  minuteOfHour?: number;
}

export function ssm_ContactsRotationRecurrenceWeeklySettingHandOffTime_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "hourOfDay",
      "(Required) The hour of the day.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minuteOfHour",
      "(Required) The minutes of the hour.",
      () => [],
      true,
      false,
    ),
  ];
}
