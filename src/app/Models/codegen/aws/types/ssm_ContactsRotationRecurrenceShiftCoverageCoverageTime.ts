import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ssm_ContactsRotationRecurrenceShiftCoverageCoverageTimeStart,
  ssm_ContactsRotationRecurrenceShiftCoverageCoverageTimeStart_GetTypes,
} from './ssm_ContactsRotationRecurrenceShiftCoverageCoverageTimeStart';
import {
  ssm_ContactsRotationRecurrenceShiftCoverageCoverageTimeEnd,
  ssm_ContactsRotationRecurrenceShiftCoverageCoverageTimeEnd_GetTypes,
} from './ssm_ContactsRotationRecurrenceShiftCoverageCoverageTimeEnd';

export interface ssm_ContactsRotationRecurrenceShiftCoverageCoverageTime {
  // (Required) The start time of the on-call shift. See Hand Off Time for more details.
  start?: ssm_ContactsRotationRecurrenceShiftCoverageCoverageTimeStart;

  // (Required) The end time of the on-call shift. See Hand Off Time for more details.
  end?: ssm_ContactsRotationRecurrenceShiftCoverageCoverageTimeEnd;
}

export function ssm_ContactsRotationRecurrenceShiftCoverageCoverageTime_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'start',
      '(Required) The start time of the on-call shift. See Hand Off Time for more details.',
      () =>
        ssm_ContactsRotationRecurrenceShiftCoverageCoverageTimeStart_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'end',
      '(Required) The end time of the on-call shift. See Hand Off Time for more details.',
      () =>
        ssm_ContactsRotationRecurrenceShiftCoverageCoverageTimeEnd_GetTypes(),
      false,
      false,
    ),
  ];
}
