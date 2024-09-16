import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface scheduler_ScheduleTargetRetryPolicy {
  // Maximum amount of time, in seconds, to continue to make retry attempts. Ranges from `60` to `86400` (default).
  maximumEventAgeInSeconds?: number;

  // Maximum number of retry attempts to make before the request fails. Ranges from `0` to `185` (default).
  maximumRetryAttempts?: number;
}

export function scheduler_ScheduleTargetRetryPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'maximumEventAgeInSeconds',
      'Maximum amount of time, in seconds, to continue to make retry attempts. Ranges from `60` to `86400` (default).',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maximumRetryAttempts',
      'Maximum number of retry attempts to make before the request fails. Ranges from `0` to `185` (default).',
      () => [],
      false,
      false,
    ),
  ];
}
