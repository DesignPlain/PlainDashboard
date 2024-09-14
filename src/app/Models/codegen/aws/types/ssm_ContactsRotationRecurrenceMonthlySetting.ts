import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ssm_ContactsRotationRecurrenceMonthlySettingHandOffTime,
  ssm_ContactsRotationRecurrenceMonthlySettingHandOffTime_GetTypes,
} from "./ssm_ContactsRotationRecurrenceMonthlySettingHandOffTime";

export interface ssm_ContactsRotationRecurrenceMonthlySetting {
  // (Required) The day of the month when monthly recurring on-call rotations begin.
  dayOfMonth?: number;

  // (Required) The hand off time. See Hand Off Time for more details.
  handOffTime?: ssm_ContactsRotationRecurrenceMonthlySettingHandOffTime;
}

export function ssm_ContactsRotationRecurrenceMonthlySetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "dayOfMonth",
      "(Required) The day of the month when monthly recurring on-call rotations begin.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "handOffTime",
      "(Required) The hand off time. See Hand Off Time for more details.",
      () => ssm_ContactsRotationRecurrenceMonthlySettingHandOffTime_GetTypes(),
      false,
      false,
    ),
  ];
}
