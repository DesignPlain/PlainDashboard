import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface apigateway_MethodSettingsSettings {
  // Throttling rate limit. Default: `-1` (throttling disabled).
  throttlingRateLimit?: number;

  // Whether the cached responses are encrypted.
  cacheDataEncrypted?: boolean;

  // Whether authorization is required for a cache invalidation request.
  requireAuthorizationForCacheControl?: boolean;

  // Throttling burst limit. Default: `-1` (throttling disabled).
  throttlingBurstLimit?: number;

  // Logging level for this method, which effects the log entries pushed to Amazon CloudWatch Logs. The available levels are `OFF`, `ERROR`, and `INFO`.
  loggingLevel?: string;

  // Whether Amazon CloudWatch metrics are enabled for this method.
  metricsEnabled?: boolean;

  // How to handle unauthorized requests for cache invalidation. The available values are `FAIL_WITH_403`, `SUCCEED_WITH_RESPONSE_HEADER`, `SUCCEED_WITHOUT_RESPONSE_HEADER`.
  unauthorizedCacheControlHeaderStrategy?: string;

  // Time to live (TTL), in seconds, for cached responses. The higher the TTL, the longer the response will be cached.
  cacheTtlInSeconds?: number;

  // Whether responses should be cached and returned for requests. A cache cluster must be enabled on the stage for responses to be cached.
  cachingEnabled?: boolean;

  // Whether data trace logging is enabled for this method, which effects the log entries pushed to Amazon CloudWatch Logs.
  dataTraceEnabled?: boolean;
}

export function apigateway_MethodSettingsSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'requireAuthorizationForCacheControl',
      'Whether authorization is required for a cache invalidation request.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'loggingLevel',
      'Logging level for this method, which effects the log entries pushed to Amazon CloudWatch Logs. The available levels are `OFF`, `ERROR`, and `INFO`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'unauthorizedCacheControlHeaderStrategy',
      'How to handle unauthorized requests for cache invalidation. The available values are `FAIL_WITH_403`, `SUCCEED_WITH_RESPONSE_HEADER`, `SUCCEED_WITHOUT_RESPONSE_HEADER`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'cacheTtlInSeconds',
      'Time to live (TTL), in seconds, for cached responses. The higher the TTL, the longer the response will be cached.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'cachingEnabled',
      'Whether responses should be cached and returned for requests. A cache cluster must be enabled on the stage for responses to be cached.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'dataTraceEnabled',
      'Whether data trace logging is enabled for this method, which effects the log entries pushed to Amazon CloudWatch Logs.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'throttlingRateLimit',
      'Throttling rate limit. Default: `-1` (throttling disabled).',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'throttlingBurstLimit',
      'Throttling burst limit. Default: `-1` (throttling disabled).',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'metricsEnabled',
      'Whether Amazon CloudWatch metrics are enabled for this method.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'cacheDataEncrypted',
      'Whether the cached responses are encrypted.',
      () => [],
      false,
      false,
    ),
  ];
}
