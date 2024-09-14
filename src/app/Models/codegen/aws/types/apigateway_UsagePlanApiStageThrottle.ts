import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface apigateway_UsagePlanApiStageThrottle {
  // Method to apply the throttle settings for. Specfiy the path and method, for example `/test/GET`.
  path?: string;

  // The API request steady-state rate limit.
  rateLimit?: number;

  // The API request burst limit, the maximum rate limit over a time ranging from one to a few seconds, depending upon whether the underlying token bucket is at its full capacity.
  burstLimit?: number;
}

export function apigateway_UsagePlanApiStageThrottle_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "path",
      "Method to apply the throttle settings for. Specfiy the path and method, for example `/test/GET`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "rateLimit",
      "The API request steady-state rate limit.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "burstLimit",
      "The API request burst limit, the maximum rate limit over a time ranging from one to a few seconds, depending upon whether the underlying token bucket is at its full capacity.",
      () => [],
      false,
      false,
    ),
  ];
}
