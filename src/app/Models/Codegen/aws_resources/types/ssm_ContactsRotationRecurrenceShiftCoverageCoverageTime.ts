import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ssm_ContactsRotationRecurrenceShiftCoverageCoverageTimeEnd,
  ssm_ContactsRotationRecurrenceShiftCoverageCoverageTimeEnd_GetTypes,
} from "./ssm_ContactsRotationRecurrenceShiftCoverageCoverageTimeEnd";
import {
  ssm_ContactsRotationRecurrenceShiftCoverageCoverageTimeStart,
  ssm_ContactsRotationRecurrenceShiftCoverageCoverageTimeStart_GetTypes,
} from "./ssm_ContactsRotationRecurrenceShiftCoverageCoverageTimeStart";

export interface ssm_ContactsRotationRecurrenceShiftCoverageCoverageTime {
  // (Required) The end time of the on-call shift. See Hand Off Time for more details.
  end?: ssm_ContactsRotationRecurrenceShiftCoverageCoverageTimeEnd;

  // (Required) The start time of the on-call shift. See Hand Off Time for more details.
  start?: ssm_ContactsRotationRecurrenceShiftCoverageCoverageTimeStart;
}

export function ssm_ContactsRotationRecurrenceShiftCoverageCoverageTime_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "end",
      "(Required) The end time of the on-call shift. See Hand Off Time for more details.",
      ssm_ContactsRotationRecurrenceShiftCoverageCoverageTimeEnd_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "start",
      "(Required) The start time of the on-call shift. See Hand Off Time for more details.",
      ssm_ContactsRotationRecurrenceShiftCoverageCoverageTimeStart_GetTypes(),
      false,
      false,
    ),
  ];
}
