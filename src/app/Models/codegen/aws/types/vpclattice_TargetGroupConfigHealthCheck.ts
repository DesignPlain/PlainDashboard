import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  vpclattice_TargetGroupConfigHealthCheckMatcher,
  vpclattice_TargetGroupConfigHealthCheckMatcher_GetTypes,
} from "./vpclattice_TargetGroupConfigHealthCheckMatcher";

export interface vpclattice_TargetGroupConfigHealthCheck {
  // Indicates whether health checking is enabled. Defaults to `true`.
  enabled?: boolean;

  /*
The amount of time, in seconds, to wait before reporting a target as unhealthy. The range is 1–120 seconds. The default is 5 seconds.
- `healthy_threshold_count ` - (Optional) The number of consecutive successful health checks required before considering an unhealthy target healthy. The range is 2–10. The default is 5.
*/
  healthCheckTimeoutSeconds?: number;

  // The codes to use when checking for a successful response from a target. These are called _Success codes_ in the console.
  matcher?: vpclattice_TargetGroupConfigHealthCheckMatcher;

  // The port used when performing health checks on targets. The default setting is the port that a target receives traffic on.
  port?: number;

  // The number of consecutive failed health checks required before considering a target unhealthy. The range is 2–10. The default is 2.
  unhealthyThresholdCount?: number;

  // The approximate amount of time, in seconds, between health checks of an individual target. The range is 5–300 seconds. The default is 30 seconds.
  healthCheckIntervalSeconds?: number;

  //
  healthyThresholdCount?: number;

  // The destination for health checks on the targets. If the protocol version is HTTP/1.1 or HTTP/2, specify a valid URI (for example, /path?query). The default path is `/`. Health checks are not supported if the protocol version is gRPC, however, you can choose HTTP/1.1 or HTTP/2 and specify a valid URI.
  path?: string;

  // The protocol used when performing health checks on targets. The possible protocols are `HTTP` and `HTTPS`.
  protocol?: string;

  // The protocol version used when performing health checks on targets. The possible protocol versions are `HTTP1` and `HTTP2`. The default is `HTTP1`.
  protocolVersion?: string;
}

export function vpclattice_TargetGroupConfigHealthCheck_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Indicates whether health checking is enabled. Defaults to `true`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "matcher",
      "The codes to use when checking for a successful response from a target. These are called _Success codes_ in the console.",
      () => vpclattice_TargetGroupConfigHealthCheckMatcher_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "The destination for health checks on the targets. If the protocol version is HTTP/1.1 or HTTP/2, specify a valid URI (for example, /path?query). The default path is `/`. Health checks are not supported if the protocol version is gRPC, however, you can choose HTTP/1.1 or HTTP/2 and specify a valid URI.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "protocol",
      "The protocol used when performing health checks on targets. The possible protocols are `HTTP` and `HTTPS`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "healthCheckTimeoutSeconds",
      "The amount of time, in seconds, to wait before reporting a target as unhealthy. The range is 1–120 seconds. The default is 5 seconds.\n* `healthy_threshold_count ` - (Optional) The number of consecutive successful health checks required before considering an unhealthy target healthy. The range is 2–10. The default is 5.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "The port used when performing health checks on targets. The default setting is the port that a target receives traffic on.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "unhealthyThresholdCount",
      "The number of consecutive failed health checks required before considering a target unhealthy. The range is 2–10. The default is 2.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "healthCheckIntervalSeconds",
      "The approximate amount of time, in seconds, between health checks of an individual target. The range is 5–300 seconds. The default is 30 seconds.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "healthyThresholdCount",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "protocolVersion",
      "The protocol version used when performing health checks on targets. The possible protocol versions are `HTTP1` and `HTTP2`. The default is `HTTP1`.",
      () => [],
      false,
      false,
    ),
  ];
}
