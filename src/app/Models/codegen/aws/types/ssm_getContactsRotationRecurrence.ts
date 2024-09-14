import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ssm_getContactsRotationRecurrenceShiftCoverage,
  ssm_getContactsRotationRecurrenceShiftCoverage_GetTypes,
} from "./ssm_getContactsRotationRecurrenceShiftCoverage";
import {
  ssm_getContactsRotationRecurrenceWeeklySetting,
  ssm_getContactsRotationRecurrenceWeeklySetting_GetTypes,
} from "./ssm_getContactsRotationRecurrenceWeeklySetting";
import {
  ssm_getContactsRotationRecurrenceDailySetting,
  ssm_getContactsRotationRecurrenceDailySetting_GetTypes,
} from "./ssm_getContactsRotationRecurrenceDailySetting";
import {
  ssm_getContactsRotationRecurrenceMonthlySetting,
  ssm_getContactsRotationRecurrenceMonthlySetting_GetTypes,
} from "./ssm_getContactsRotationRecurrenceMonthlySetting";

export interface ssm_getContactsRotationRecurrence {
  //
  shiftCoverages?: Array<ssm_getContactsRotationRecurrenceShiftCoverage>;

  //
  weeklySettings?: Array<ssm_getContactsRotationRecurrenceWeeklySetting>;

  //
  dailySettings?: Array<ssm_getContactsRotationRecurrenceDailySetting>;

  //
  monthlySettings?: Array<ssm_getContactsRotationRecurrenceMonthlySetting>;

  //
  numberOfOnCalls?: number;

  //
  recurrenceMultiplier?: number;
}

export function ssm_getContactsRotationRecurrence_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "shiftCoverages",
      "",
      () => ssm_getContactsRotationRecurrenceShiftCoverage_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "weeklySettings",
      "",
      () => ssm_getContactsRotationRecurrenceWeeklySetting_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dailySettings",
      "",
      () => ssm_getContactsRotationRecurrenceDailySetting_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "monthlySettings",
      "",
      () => ssm_getContactsRotationRecurrenceMonthlySetting_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "numberOfOnCalls",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "recurrenceMultiplier",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
