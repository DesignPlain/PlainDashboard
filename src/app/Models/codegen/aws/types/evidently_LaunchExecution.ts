import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface evidently_LaunchExecution {
  // The date and time that the launch ended.
  endedTime?: string;

  // The date and time that the launch started.
  startedTime?: string;
}

export function evidently_LaunchExecution_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'endedTime',
      'The date and time that the launch ended.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'startedTime',
      'The date and time that the launch started.',
      () => [],
      false,
      false,
    ),
  ];
}
