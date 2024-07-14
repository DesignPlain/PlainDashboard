import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface apigateway_UsagePlanThrottleSettings {
  // The API request burst limit, the maximum rate limit over a time ranging from one to a few seconds, depending upon whether the underlying token bucket is at its full capacity.
  burstLimit?: number;

  // The API request steady-state rate limit.
  rateLimit?: number;
}

export function apigateway_UsagePlanThrottleSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "burstLimit",
      "The API request burst limit, the maximum rate limit over a time ranging from one to a few seconds, depending upon whether the underlying token bucket is at its full capacity.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "rateLimit",
      "The API request steady-state rate limit.",
      [],
      false,
      false,
    ),
  ];
}
