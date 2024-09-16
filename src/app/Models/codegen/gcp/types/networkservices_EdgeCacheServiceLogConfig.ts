import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface networkservices_EdgeCacheServiceLogConfig {
  // Specifies whether to enable logging for traffic served by this service.
  enable?: boolean;

  /*
Configures the sampling rate of requests, where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported. The default value is 1.0, and the value of the field must be in [0, 1].
This field can only be specified if logging is enabled for this service.
*/
  sampleRate?: number;
}

export function networkservices_EdgeCacheServiceLogConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enable',
      'Specifies whether to enable logging for traffic served by this service.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'sampleRate',
      'Configures the sampling rate of requests, where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported. The default value is 1.0, and the value of the field must be in [0, 1].\nThis field can only be specified if logging is enabled for this service.',
      () => [],
      false,
      false,
    ),
  ];
}
