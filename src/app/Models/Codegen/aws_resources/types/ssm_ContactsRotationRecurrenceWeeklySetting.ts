import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ssm_ContactsRotationRecurrenceWeeklySettingHandOffTime,
  ssm_ContactsRotationRecurrenceWeeklySettingHandOffTime_GetTypes,
} from "./ssm_ContactsRotationRecurrenceWeeklySettingHandOffTime";

export interface ssm_ContactsRotationRecurrenceWeeklySetting {
  // (Required) The day of the week when the shift coverage occurs.
  dayOfWeek?: string;

  // (Required) The hand off time. See Hand Off Time for more details.
  handOffTime?: ssm_ContactsRotationRecurrenceWeeklySettingHandOffTime;
}

export function ssm_ContactsRotationRecurrenceWeeklySetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "dayOfWeek",
      "(Required) The day of the week when the shift coverage occurs.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "handOffTime",
      "(Required) The hand off time. See Hand Off Time for more details.",
      ssm_ContactsRotationRecurrenceWeeklySettingHandOffTime_GetTypes(),
      false,
      false,
    ),
  ];
}
