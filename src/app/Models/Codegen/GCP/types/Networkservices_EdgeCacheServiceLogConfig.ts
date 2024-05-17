import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkservices_EdgeCacheServiceLogConfig {
  // Specifies whether to enable logging for traffic served by this service.
  Enable?: boolean;

  /*
Configures the sampling rate of requests, where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported. The default value is 1.0, and the value of the field must be in [0, 1].
This field can only be specified if logging is enabled for this service.
*/
  SampleRate?: number;
}

export function Networkservices_EdgeCacheServiceLogConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enable",
      "Specifies whether to enable logging for traffic served by this service.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "SampleRate",
      "Configures the sampling rate of requests, where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported. The default value is 1.0, and the value of the field must be in [0, 1].\nThis field can only be specified if logging is enabled for this service.",
      [],
      false,
      false,
    ),
  ];
}
