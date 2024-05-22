import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ssm_ContactsRotationRecurrenceMonthlySettingHandOffTime {
  // (Required) The minutes of the hour.
  minuteOfHour?: number;

  // (Required) The hour of the day.
  hourOfDay?: number;
}

export function ssm_ContactsRotationRecurrenceMonthlySettingHandOffTime_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "minuteOfHour",
      "(Required) The minutes of the hour.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "hourOfDay",
      "(Required) The hour of the day.",
      [],
      true,
      false,
    ),
  ];
}
