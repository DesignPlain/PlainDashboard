import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ssm_getContactsRotationRecurrenceShiftCoverageCoverageTimeEnd,
  ssm_getContactsRotationRecurrenceShiftCoverageCoverageTimeEnd_GetTypes,
} from "./ssm_getContactsRotationRecurrenceShiftCoverageCoverageTimeEnd";
import {
  ssm_getContactsRotationRecurrenceShiftCoverageCoverageTimeStart,
  ssm_getContactsRotationRecurrenceShiftCoverageCoverageTimeStart_GetTypes,
} from "./ssm_getContactsRotationRecurrenceShiftCoverageCoverageTimeStart";

export interface ssm_getContactsRotationRecurrenceShiftCoverageCoverageTime {
  //
  ends?: Array<ssm_getContactsRotationRecurrenceShiftCoverageCoverageTimeEnd>;

  //
  starts?: Array<ssm_getContactsRotationRecurrenceShiftCoverageCoverageTimeStart>;
}

export function ssm_getContactsRotationRecurrenceShiftCoverageCoverageTime_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ends",
      "",
      () =>
        ssm_getContactsRotationRecurrenceShiftCoverageCoverageTimeEnd_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "starts",
      "",
      () =>
        ssm_getContactsRotationRecurrenceShiftCoverageCoverageTimeStart_GetTypes(),
      true,
      false,
    ),
  ];
}
