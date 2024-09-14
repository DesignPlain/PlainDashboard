import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ssm_getContactsRotationRecurrenceShiftCoverageCoverageTime,
  ssm_getContactsRotationRecurrenceShiftCoverageCoverageTime_GetTypes,
} from "./ssm_getContactsRotationRecurrenceShiftCoverageCoverageTime";

export interface ssm_getContactsRotationRecurrenceShiftCoverage {
  //
  coverageTimes?: Array<ssm_getContactsRotationRecurrenceShiftCoverageCoverageTime>;

  //
  mapBlockKey?: string;
}

export function ssm_getContactsRotationRecurrenceShiftCoverage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "coverageTimes",
      "",
      () =>
        ssm_getContactsRotationRecurrenceShiftCoverageCoverageTime_GetTypes(),
      true,
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
