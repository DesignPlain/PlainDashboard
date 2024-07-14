import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface apigateway_UsagePlanApiStageThrottle {
  // The API request burst limit, the maximum rate limit over a time ranging from one to a few seconds, depending upon whether the underlying token bucket is at its full capacity.
  burstLimit?: number;

  // Method to apply the throttle settings for. Specfiy the path and method, for example `/test/GET`.
  path?: string;

  // The API request steady-state rate limit.
  rateLimit?: number;
}

export function apigateway_UsagePlanApiStageThrottle_GetTypes(): DynamicUIProps[] {
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
      InputType.String,
      "path",
      "Method to apply the throttle settings for. Specfiy the path and method, for example `/test/GET`.",
      [],
      true,
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
