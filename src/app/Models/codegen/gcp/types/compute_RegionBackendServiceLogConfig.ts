import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_RegionBackendServiceLogConfig {
  // Whether to enable logging for the load balancer traffic served by this backend service.
  enable?: boolean;

  /*
This field can only be specified if logging is enabled for this backend service. The value of
the field must be in [0, 1]. This configures the sampling rate of requests to the load balancer
where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported.
The default value is 1.0.
*/
  sampleRate?: number;
}

export function compute_RegionBackendServiceLogConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enable',
      'Whether to enable logging for the load balancer traffic served by this backend service.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'sampleRate',
      'This field can only be specified if logging is enabled for this backend service. The value of\nthe field must be in [0, 1]. This configures the sampling rate of requests to the load balancer\nwhere 1.0 means all logged requests are reported and 0.0 means no logged requests are reported.\nThe default value is 1.0.',
      () => [],
      false,
      false,
    ),
  ];
}
