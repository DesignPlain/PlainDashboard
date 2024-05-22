import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ssm_ContactsRotationRecurrenceDailySetting,
  ssm_ContactsRotationRecurrenceDailySetting_GetTypes,
} from "./ssm_ContactsRotationRecurrenceDailySetting";
import {
  ssm_ContactsRotationRecurrenceMonthlySetting,
  ssm_ContactsRotationRecurrenceMonthlySetting_GetTypes,
} from "./ssm_ContactsRotationRecurrenceMonthlySetting";
import {
  ssm_ContactsRotationRecurrenceShiftCoverage,
  ssm_ContactsRotationRecurrenceShiftCoverage_GetTypes,
} from "./ssm_ContactsRotationRecurrenceShiftCoverage";
import {
  ssm_ContactsRotationRecurrenceWeeklySetting,
  ssm_ContactsRotationRecurrenceWeeklySetting_GetTypes,
} from "./ssm_ContactsRotationRecurrenceWeeklySetting";

export interface ssm_ContactsRotationRecurrence {
  //
  dailySettings?: Array<ssm_ContactsRotationRecurrenceDailySetting>;

  // (Optional) Information about on-call rotations that recur monthly. See Monthly Settings for more details.
  monthlySettings?: Array<ssm_ContactsRotationRecurrenceMonthlySetting>;

  // (Required) The number of contacts, or shift team members designated to be on call concurrently during a shift.
  numberOfOnCalls?: number;

  // (Required) The number of days, weeks, or months a single rotation lasts.
  recurrenceMultiplier?: number;

  // (Optional) Information about the days of the week that the on-call rotation coverage includes. See Shift Coverages for more details.
  shiftCoverages?: Array<ssm_ContactsRotationRecurrenceShiftCoverage>;

  // (Optional) Information about on-call rotations that recur weekly. See Weekly Settings for more details.
  weeklySettings?: Array<ssm_ContactsRotationRecurrenceWeeklySetting>;
}

export function ssm_ContactsRotationRecurrence_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "shiftCoverages",
      "(Optional) Information about the days of the week that the on-call rotation coverage includes. See Shift Coverages for more details.",
      ssm_ContactsRotationRecurrenceShiftCoverage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "weeklySettings",
      "(Optional) Information about on-call rotations that recur weekly. See Weekly Settings for more details.",
      ssm_ContactsRotationRecurrenceWeeklySetting_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dailySettings",
      "",
      ssm_ContactsRotationRecurrenceDailySetting_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "monthlySettings",
      "(Optional) Information about on-call rotations that recur monthly. See Monthly Settings for more details.",
      ssm_ContactsRotationRecurrenceMonthlySetting_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "numberOfOnCalls",
      "(Required) The number of contacts, or shift team members designated to be on call concurrently during a shift.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "recurrenceMultiplier",
      "(Required) The number of days, weeks, or months a single rotation lasts.",
      [],
      true,
      false,
    ),
  ];
}
