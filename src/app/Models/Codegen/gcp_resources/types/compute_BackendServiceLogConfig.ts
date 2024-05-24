import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_BackendServiceLogConfig {
  /*
This field can only be specified if logging is enabled for this backend service. The value of
the field must be in [0, 1]. This configures the sampling rate of requests to the load balancer
where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported.
The default value is 1.0.
*/
  sampleRate?: number;

  // Whether to enable logging for the load balancer traffic served by this backend service.
  enable?: boolean;
}

export function compute_BackendServiceLogConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enable",
      "Whether to enable logging for the load balancer traffic served by this backend service.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "sampleRate",
      "This field can only be specified if logging is enabled for this backend service. The value of\nthe field must be in [0, 1]. This configures the sampling rate of requests to the load balancer\nwhere 1.0 means all logged requests are reported and 0.0 means no logged requests are reported.\nThe default value is 1.0.",
      [],
      false,
      false,
    ),
  ];
}