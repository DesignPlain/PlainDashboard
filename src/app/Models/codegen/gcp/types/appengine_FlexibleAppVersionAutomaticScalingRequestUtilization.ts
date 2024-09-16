import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appengine_FlexibleAppVersionAutomaticScalingRequestUtilization {
  // Target number of concurrent requests.
  targetConcurrentRequests?: number;

  // Target requests per second.
  targetRequestCountPerSecond?: string;
}

export function appengine_FlexibleAppVersionAutomaticScalingRequestUtilization_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'targetRequestCountPerSecond',
      'Target requests per second.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'targetConcurrentRequests',
      'Target number of concurrent requests.',
      () => [],
      false,
      false,
    ),
  ];
}
