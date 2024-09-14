import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ssm_getContactsRotationRecurrenceMonthlySettingHandOffTime,
  ssm_getContactsRotationRecurrenceMonthlySettingHandOffTime_GetTypes,
} from "./ssm_getContactsRotationRecurrenceMonthlySettingHandOffTime";

export interface ssm_getContactsRotationRecurrenceMonthlySetting {
  //
  dayOfMonth?: number;

  //
  handOffTimes?: Array<ssm_getContactsRotationRecurrenceMonthlySettingHandOffTime>;
}

export function ssm_getContactsRotationRecurrenceMonthlySetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "dayOfMonth",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "handOffTimes",
      "",
      () =>
        ssm_getContactsRotationRecurrenceMonthlySettingHandOffTime_GetTypes(),
      true,
      false,
    ),
  ];
}
