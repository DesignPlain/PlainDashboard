import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ssm_ContactsRotationRecurrenceShiftCoverageCoverageTime,
  ssm_ContactsRotationRecurrenceShiftCoverageCoverageTime_GetTypes,
} from "./ssm_ContactsRotationRecurrenceShiftCoverageCoverageTime";

export interface ssm_ContactsRotationRecurrenceShiftCoverage {
  // (Required) Information about when an on-call shift begins and ends. See Coverage Times for more details.
  coverageTimes?: Array<ssm_ContactsRotationRecurrenceShiftCoverageCoverageTime>;

  //
  mapBlockKey?: string;
}

export function ssm_ContactsRotationRecurrenceShiftCoverage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "coverageTimes",
      "(Required) Information about when an on-call shift begins and ends. See Coverage Times for more details.",
      () => ssm_ContactsRotationRecurrenceShiftCoverageCoverageTime_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mapBlockKey",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
