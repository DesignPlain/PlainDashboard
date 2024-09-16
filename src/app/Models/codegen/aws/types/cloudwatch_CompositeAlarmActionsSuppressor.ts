import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudwatch_CompositeAlarmActionsSuppressor {
  // Can be an AlarmName or an Amazon Resource Name (ARN) from an existing alarm.
  alarm?: string;

  // The maximum time in seconds that the composite alarm waits after suppressor alarm goes out of the `ALARM` state. After this time, the composite alarm performs its actions.
  extensionPeriod?: number;

  // The maximum time in seconds that the composite alarm waits for the suppressor alarm to go into the `ALARM` state. After this time, the composite alarm performs its actions.
  waitPeriod?: number;
}

export function cloudwatch_CompositeAlarmActionsSuppressor_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'waitPeriod',
      'The maximum time in seconds that the composite alarm waits for the suppressor alarm to go into the `ALARM` state. After this time, the composite alarm performs its actions.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'alarm',
      'Can be an AlarmName or an Amazon Resource Name (ARN) from an existing alarm.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'extensionPeriod',
      'The maximum time in seconds that the composite alarm waits after suppressor alarm goes out of the `ALARM` state. After this time, the composite alarm performs its actions.',
      () => [],
      true,
      false,
    ),
  ];
}
