import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface apigatewayv2_StageDefaultRouteSettings {
  /*
Logging level for the default route. Affects the log entries pushed to Amazon CloudWatch Logs.
Valid values: `ERROR`, `INFO`, `OFF`. Defaults to `OFF`. Supported only for WebSocket APIs. This provider will only perform drift detection of its value when present in a configuration.
*/
  loggingLevel?: string;

  // Throttling burst limit for the default route.
  throttlingBurstLimit?: number;

  // Throttling rate limit for the default route.
  throttlingRateLimit?: number;

  /*
Whether data trace logging is enabled for the default route. Affects the log entries pushed to Amazon CloudWatch Logs.
Defaults to `false`. Supported only for WebSocket APIs.
*/
  dataTraceEnabled?: boolean;

  // Whether detailed metrics are enabled for the default route. Defaults to `false`.
  detailedMetricsEnabled?: boolean;
}

export function apigatewayv2_StageDefaultRouteSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "loggingLevel",
      "Logging level for the default route. Affects the log entries pushed to Amazon CloudWatch Logs.\nValid values: `ERROR`, `INFO`, `OFF`. Defaults to `OFF`. Supported only for WebSocket APIs. This provider will only perform drift detection of its value when present in a configuration.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "throttlingBurstLimit",
      "Throttling burst limit for the default route.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "throttlingRateLimit",
      "Throttling rate limit for the default route.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "dataTraceEnabled",
      "Whether data trace logging is enabled for the default route. Affects the log entries pushed to Amazon CloudWatch Logs.\nDefaults to `false`. Supported only for WebSocket APIs.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "detailedMetricsEnabled",
      "Whether detailed metrics are enabled for the default route. Defaults to `false`.",
      () => [],
      false,
      false,
    ),
  ];
}
