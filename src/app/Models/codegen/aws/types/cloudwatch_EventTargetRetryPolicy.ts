import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudwatch_EventTargetRetryPolicy {
  // maximum number of retry attempts to make before the request fails
  maximumRetryAttempts?: number;

  // The age in seconds to continue to make retry attempts.
  maximumEventAgeInSeconds?: number;
}

export function cloudwatch_EventTargetRetryPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'maximumEventAgeInSeconds',
      'The age in seconds to continue to make retry attempts.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maximumRetryAttempts',
      'maximum number of retry attempts to make before the request fails',
      () => [],
      false,
      false,
    ),
  ];
}
