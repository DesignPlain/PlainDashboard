import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface lb_TargetGroupHealthCheck {
  // Number of consecutive health check successes required before considering a target healthy. The range is 2-10. Defaults to 3.
  healthyThreshold?: number;

  // Approximate amount of time, in seconds, between health checks of an individual target. The range is 5-300. For `lambda` target groups, it needs to be greater than the timeout of the underlying `lambda`. Defaults to 30.
  interval?: number;

  /*
The HTTP or gRPC codes to use when checking for a successful response from a target.
The `health_check.protocol` must be one of `HTTP` or `HTTPS` or the `target_type` must be `lambda`.
Values can be comma-separated individual values (e.g., "200,202") or a range of values (e.g., "200-299").
- For gRPC-based target groups (i.e., the `protocol` is one of `HTTP` or `HTTPS` and the `protocol_version` is `GRPC`), values can be between `0` and `99`. The default is `12`.
- When used with an Application Load Balancer (i.e., the `protocol` is one of `HTTP` or `HTTPS` and the `protocol_version` is not `GRPC`), values can be between `200` and `499`. The default is `200`.
- When used with a Network Load Balancer (i.e., the `protocol` is one of `TCP`, `TCP_UDP`, `UDP`, or `TLS`), values can be between `200` and `599`. The default is `200-399`.
- When the `target_type` is `lambda`, values can be between `200` and `499`. The default is `200`.
*/
  matcher?: string;

  /*
Destination for the health check request. Required for HTTP/HTTPS ALB and HTTP NLB. Only applies to HTTP/HTTPS.
- For HTTP and HTTPS health checks, the default is `/`.
- For gRPC health checks, the default is `/Amazon Web Services.ALB/healthcheck`.
*/
  path?: string;

  /*
The port the load balancer uses when performing health checks on targets.
Valid values are either `traffic-port`, to use the same port as the target group, or a valid port number between `1` and `65536`.
Default is `traffic-port`.
*/
  port?: string;

  // Whether health checks are enabled. Defaults to `true`.
  enabled?: boolean;

  /*
Protocol the load balancer uses when performing health checks on targets.
Must be one of `TCP`, `HTTP`, or `HTTPS`.
The `TCP` protocol is not supported for health checks if the protocol of the target group is `HTTP` or `HTTPS`.
Default is `HTTP`.
Cannot be specified when the `target_type` is `lambda`.
*/
  protocol?: string;

  // Amount of time, in seconds, during which no response from a target means a failed health check. The range is 2–120 seconds. For target groups with a protocol of HTTP, the default is 6 seconds. For target groups with a protocol of TCP, TLS or HTTPS, the default is 10 seconds. For target groups with a protocol of GENEVE, the default is 5 seconds. If the target type is lambda, the default is 30 seconds.
  timeout?: number;

  // Number of consecutive health check failures required before considering a target unhealthy. The range is 2-10. Defaults to 3.
  unhealthyThreshold?: number;
}

export function lb_TargetGroupHealthCheck_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "interval",
      "Approximate amount of time, in seconds, between health checks of an individual target. The range is 5-300. For `lambda` target groups, it needs to be greater than the timeout of the underlying `lambda`. Defaults to 30.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "port",
      "The port the load balancer uses when performing health checks on targets.\nValid values are either `traffic-port`, to use the same port as the target group, or a valid port number between `1` and `65536`.\nDefault is `traffic-port`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether health checks are enabled. Defaults to `true`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "timeout",
      "Amount of time, in seconds, during which no response from a target means a failed health check. The range is 2–120 seconds. For target groups with a protocol of HTTP, the default is 6 seconds. For target groups with a protocol of TCP, TLS or HTTPS, the default is 10 seconds. For target groups with a protocol of GENEVE, the default is 5 seconds. If the target type is lambda, the default is 30 seconds.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "healthyThreshold",
      "Number of consecutive health check successes required before considering a target healthy. The range is 2-10. Defaults to 3.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "matcher",
      'The HTTP or gRPC codes to use when checking for a successful response from a target.\nThe `health_check.protocol` must be one of `HTTP` or `HTTPS` or the `target_type` must be `lambda`.\nValues can be comma-separated individual values (e.g., "200,202") or a range of values (e.g., "200-299").\n* For gRPC-based target groups (i.e., the `protocol` is one of `HTTP` or `HTTPS` and the `protocol_version` is `GRPC`), values can be between `0` and `99`. The default is `12`.\n* When used with an Application Load Balancer (i.e., the `protocol` is one of `HTTP` or `HTTPS` and the `protocol_version` is not `GRPC`), values can be between `200` and `499`. The default is `200`.\n* When used with a Network Load Balancer (i.e., the `protocol` is one of `TCP`, `TCP_UDP`, `UDP`, or `TLS`), values can be between `200` and `599`. The default is `200-399`.\n* When the `target_type` is `lambda`, values can be between `200` and `499`. The default is `200`.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "Destination for the health check request. Required for HTTP/HTTPS ALB and HTTP NLB. Only applies to HTTP/HTTPS.\n* For HTTP and HTTPS health checks, the default is `/`.\n* For gRPC health checks, the default is `/Amazon Web Services.ALB/healthcheck`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "protocol",
      "Protocol the load balancer uses when performing health checks on targets.\nMust be one of `TCP`, `HTTP`, or `HTTPS`.\nThe `TCP` protocol is not supported for health checks if the protocol of the target group is `HTTP` or `HTTPS`.\nDefault is `HTTP`.\nCannot be specified when the `target_type` is `lambda`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "unhealthyThreshold",
      "Number of consecutive health check failures required before considering a target unhealthy. The range is 2-10. Defaults to 3.",
      [],
      false,
      false,
    ),
  ];
}
