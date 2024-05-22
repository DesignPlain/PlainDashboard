import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface apigateway_MethodSettingsSettings {
  // Whether data trace logging is enabled for this method, which effects the log entries pushed to Amazon CloudWatch Logs.
  dataTraceEnabled?: boolean;

  // Whether Amazon CloudWatch metrics are enabled for this method.
  metricsEnabled?: boolean;

  // Throttling burst limit. Default: `-1` (throttling disabled).
  throttlingBurstLimit?: number;

  // How to handle unauthorized requests for cache invalidation. The available values are `FAIL_WITH_403`, `SUCCEED_WITH_RESPONSE_HEADER`, `SUCCEED_WITHOUT_RESPONSE_HEADER`.
  unauthorizedCacheControlHeaderStrategy?: string;

  // Whether the cached responses are encrypted.
  cacheDataEncrypted?: boolean;

  // Whether responses should be cached and returned for requests. A cache cluster must be enabled on the stage for responses to be cached.
  cachingEnabled?: boolean;

  // Whether authorization is required for a cache invalidation request.
  requireAuthorizationForCacheControl?: boolean;

  // Throttling rate limit. Default: `-1` (throttling disabled).
  throttlingRateLimit?: number;

  // Time to live (TTL), in seconds, for cached responses. The higher the TTL, the longer the response will be cached.
  cacheTtlInSeconds?: number;

  // Logging level for this method, which effects the log entries pushed to Amazon CloudWatch Logs. The available levels are `OFF`, `ERROR`, and `INFO`.
  loggingLevel?: string;
}

export function apigateway_MethodSettingsSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "metricsEnabled",
      "Whether Amazon CloudWatch metrics are enabled for this method.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "throttlingBurstLimit",
      "Throttling burst limit. Default: `-1` (throttling disabled).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "cacheDataEncrypted",
      "Whether the cached responses are encrypted.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "requireAuthorizationForCacheControl",
      "Whether authorization is required for a cache invalidation request.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "dataTraceEnabled",
      "Whether data trace logging is enabled for this method, which effects the log entries pushed to Amazon CloudWatch Logs.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "unauthorizedCacheControlHeaderStrategy",
      "How to handle unauthorized requests for cache invalidation. The available values are `FAIL_WITH_403`, `SUCCEED_WITH_RESPONSE_HEADER`, `SUCCEED_WITHOUT_RESPONSE_HEADER`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "cachingEnabled",
      "Whether responses should be cached and returned for requests. A cache cluster must be enabled on the stage for responses to be cached.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "throttlingRateLimit",
      "Throttling rate limit. Default: `-1` (throttling disabled).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "cacheTtlInSeconds",
      "Time to live (TTL), in seconds, for cached responses. The higher the TTL, the longer the response will be cached.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "loggingLevel",
      "Logging level for this method, which effects the log entries pushed to Amazon CloudWatch Logs. The available levels are `OFF`, `ERROR`, and `INFO`.",
      [],
      false,
      false,
    ),
  ];
}
