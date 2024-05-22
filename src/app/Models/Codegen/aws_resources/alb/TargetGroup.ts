import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  alb_TargetGroupTargetFailover,
  alb_TargetGroupTargetFailover_GetTypes,
} from "../types/alb_TargetGroupTargetFailover";
import {
  alb_TargetGroupTargetHealthState,
  alb_TargetGroupTargetHealthState_GetTypes,
} from "../types/alb_TargetGroupTargetHealthState";
import {
  alb_TargetGroupHealthCheck,
  alb_TargetGroupHealthCheck_GetTypes,
} from "../types/alb_TargetGroupHealthCheck";
import {
  alb_TargetGroupStickiness,
  alb_TargetGroupStickiness_GetTypes,
} from "../types/alb_TargetGroupStickiness";

export interface TargetGroupArgs {
  // Creates a unique name beginning with the specified prefix. Conflicts with `name`. Cannot be longer than 6 characters.
  namePrefix?: string;

  // Whether client IP preservation is enabled. See [doc](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#client-ip-preservation) for more information.
  preserveClientIp?: string;

  // Amount time for targets to warm up before the load balancer sends them a full share of requests. The range is 30-900 seconds or 0 to disable. The default value is 0 seconds.
  slowStart?: number;

  // Target failover block. Only applicable for Gateway Load Balancer target groups. See target_failover for more information.
  targetFailovers?: Array<alb_TargetGroupTargetFailover>;

  // Whether to terminate connections at the end of the deregistration timeout on Network Load Balancers. See [doc](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#deregistration-delay) for more information. Default is `false`.
  connectionTermination?: boolean;

  // Amount time for Elastic Load Balancing to wait before changing the state of a deregistering target from draining to unused. The range is 0-3600 seconds. The default value is 300 seconds.
  deregistrationDelay?: number;

  // Determines whether to enable target anomaly mitigation.  Target anomaly mitigation is only supported by the `weighted_random` load balancing algorithm type.  See [doc](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#automatic-target-weights) for more information.  The value is `"on"` or `"off"`. The default is `"off"`.
  loadBalancingAnomalyMitigation?: string;

  // Name of the target group. If omitted, this provider will assign a random, unique name. This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and must not begin or end with a hyphen.
  name?: string;

  // Target health state block. Only applicable for Network Load Balancer target groups when `protocol` is `TCP` or `TLS`. See target_health_state for more information.
  targetHealthStates?: Array<alb_TargetGroupTargetHealthState>;

  // Health Check configuration block. Detailed below.
  healthCheck?: alb_TargetGroupHealthCheck;

  // Whether the request and response headers exchanged between the load balancer and the Lambda function include arrays of values or strings. Only applies when `target_type` is `lambda`. Default is `false`.
  lambdaMultiValueHeadersEnabled?: boolean;

  // Determines how the load balancer selects targets when routing requests. Only applicable for Application Load Balancer Target Groups. The value is `round_robin`, `least_outstanding_requests`, or `weighted_random`. The default is `round_robin`.
  loadBalancingAlgorithmType?: string;

  // Indicates whether cross zone load balancing is enabled. The value is `"true"`, `"false"` or `"use_load_balancer_configuration"`. The default is `"use_load_balancer_configuration"`.
  loadBalancingCrossZoneEnabled?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
Type of target that you must specify when registering targets with this target group.
See [doc](https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_CreateTargetGroup.html) for supported values.
The default is `instance`.

Note that you can't specify targets for a target group using both instance IDs and IP addresses.

If the target type is `ip`, specify IP addresses from the subnets of the virtual private cloud (VPC) for the target group, the RFC 1918 range (10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16), and the RFC 6598 range (100.64.0.0/10). You can't specify publicly routable IP addresses.

Network Load Balancers do not support the `lambda` target type.

Application Load Balancers do not support the `alb` target type.
*/
  targetType?: string;

  // Identifier of the VPC in which to create the target group. Required when `target_type` is `instance`, `ip` or `alb`. Does not apply when `target_type` is `lambda`.
  vpcId?: string;

  // The type of IP addresses used by the target group, only supported when target type is set to `ip`. Possible values are `ipv4` or `ipv6`.
  ipAddressType?: string;

  // Port on which targets receive traffic, unless overridden when registering a specific target. Required when `target_type` is `instance`, `ip` or `alb`. Does not apply when `target_type` is `lambda`.
  port?: number;

  /*
Protocol to use for routing traffic to the targets.
Should be one of `GENEVE`, `HTTP`, `HTTPS`, `TCP`, `TCP_UDP`, `TLS`, or `UDP`.
Required when `target_type` is `instance`, `ip`, or `alb`.
Does not apply when `target_type` is `lambda`.
*/
  protocol?: string;

  // Whether to enable support for proxy protocol v2 on Network Load Balancers. See [doc](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#proxy-protocol) for more information. Default is `false`.
  proxyProtocolV2?: boolean;

  // Only applicable when `protocol` is `HTTP` or `HTTPS`. The protocol version. Specify `GRPC` to send requests to targets using gRPC. Specify `HTTP2` to send requests to targets using HTTP/2. The default is `HTTP1`, which sends requests to targets using HTTP/1.1
  protocolVersion?: string;

  // Stickiness configuration block. Detailed below.
  stickiness?: alb_TargetGroupStickiness;
}
export class TargetGroup extends Resource {
  // ARNs of the Load Balancers associated with the Target Group.
  public loadBalancerArns?: Array<string>;

  // Name of the target group. If omitted, this provider will assign a random, unique name. This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and must not begin or end with a hyphen.
  public name?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Identifier of the VPC in which to create the target group. Required when `target_type` is `instance`, `ip` or `alb`. Does not apply when `target_type` is `lambda`.
  public vpcId?: string;

  // Whether client IP preservation is enabled. See [doc](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#client-ip-preservation) for more information.
  public preserveClientIp?: string;

  // Stickiness configuration block. Detailed below.
  public stickiness?: alb_TargetGroupStickiness;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  /*
Type of target that you must specify when registering targets with this target group.
See [doc](https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_CreateTargetGroup.html) for supported values.
The default is `instance`.

Note that you can't specify targets for a target group using both instance IDs and IP addresses.

If the target type is `ip`, specify IP addresses from the subnets of the virtual private cloud (VPC) for the target group, the RFC 1918 range (10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16), and the RFC 6598 range (100.64.0.0/10). You can't specify publicly routable IP addresses.

Network Load Balancers do not support the `lambda` target type.

Application Load Balancers do not support the `alb` target type.
*/
  public targetType?: string;

  // Health Check configuration block. Detailed below.
  public healthCheck?: alb_TargetGroupHealthCheck;

  // Whether the request and response headers exchanged between the load balancer and the Lambda function include arrays of values or strings. Only applies when `target_type` is `lambda`. Default is `false`.
  public lambdaMultiValueHeadersEnabled?: boolean;

  // Indicates whether cross zone load balancing is enabled. The value is `"true"`, `"false"` or `"use_load_balancer_configuration"`. The default is `"use_load_balancer_configuration"`.
  public loadBalancingCrossZoneEnabled?: string;

  // Port on which targets receive traffic, unless overridden when registering a specific target. Required when `target_type` is `instance`, `ip` or `alb`. Does not apply when `target_type` is `lambda`.
  public port?: number;

  // Determines how the load balancer selects targets when routing requests. Only applicable for Application Load Balancer Target Groups. The value is `round_robin`, `least_outstanding_requests`, or `weighted_random`. The default is `round_robin`.
  public loadBalancingAlgorithmType?: string;

  /*
Protocol to use for routing traffic to the targets.
Should be one of `GENEVE`, `HTTP`, `HTTPS`, `TCP`, `TCP_UDP`, `TLS`, or `UDP`.
Required when `target_type` is `instance`, `ip`, or `alb`.
Does not apply when `target_type` is `lambda`.
*/
  public protocol?: string;

  // Amount time for targets to warm up before the load balancer sends them a full share of requests. The range is 30-900 seconds or 0 to disable. The default value is 0 seconds.
  public slowStart?: number;

  // Target failover block. Only applicable for Gateway Load Balancer target groups. See target_failover for more information.
  public targetFailovers?: Array<alb_TargetGroupTargetFailover>;

  // ARN of the Target Group (matches `id`).
  public arn?: string;

  // ARN suffix for use with CloudWatch Metrics.
  public arnSuffix?: string;

  // Amount time for Elastic Load Balancing to wait before changing the state of a deregistering target from draining to unused. The range is 0-3600 seconds. The default value is 300 seconds.
  public deregistrationDelay?: number;

  // The type of IP addresses used by the target group, only supported when target type is set to `ip`. Possible values are `ipv4` or `ipv6`.
  public ipAddressType?: string;

  // Whether to enable support for proxy protocol v2 on Network Load Balancers. See [doc](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#proxy-protocol) for more information. Default is `false`.
  public proxyProtocolV2?: boolean;

  // Target health state block. Only applicable for Network Load Balancer target groups when `protocol` is `TCP` or `TLS`. See target_health_state for more information.
  public targetHealthStates?: Array<alb_TargetGroupTargetHealthState>;

  // Whether to terminate connections at the end of the deregistration timeout on Network Load Balancers. See [doc](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#deregistration-delay) for more information. Default is `false`.
  public connectionTermination?: boolean;

  // Determines whether to enable target anomaly mitigation.  Target anomaly mitigation is only supported by the `weighted_random` load balancing algorithm type.  See [doc](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#automatic-target-weights) for more information.  The value is `"on"` or `"off"`. The default is `"off"`.
  public loadBalancingAnomalyMitigation?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`. Cannot be longer than 6 characters.
  public namePrefix?: string;

  // Only applicable when `protocol` is `HTTP` or `HTTPS`. The protocol version. Specify `GRPC` to send requests to targets using gRPC. Specify `HTTP2` to send requests to targets using HTTP/2. The default is `HTTP1`, which sends requests to targets using HTTP/1.1
  public protocolVersion?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "vpcId",
        "Identifier of the VPC in which to create the target group. Required when `target_type` is `instance`, `ip` or `alb`. Does not apply when `target_type` is `lambda`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "proxyProtocolV2",
        "Whether to enable support for proxy protocol v2 on Network Load Balancers. See [doc](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#proxy-protocol) for more information. Default is `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "loadBalancingAnomalyMitigation",
        'Determines whether to enable target anomaly mitigation.  Target anomaly mitigation is only supported by the `weighted_random` load balancing algorithm type.  See [doc](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#automatic-target-weights) for more information.  The value is `"on"` or `"off"`. The default is `"off"`.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "loadBalancingAlgorithmType",
        "Determines how the load balancer selects targets when routing requests. Only applicable for Application Load Balancer Target Groups. The value is `round_robin`, `least_outstanding_requests`, or `weighted_random`. The default is `round_robin`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "targetHealthStates",
        "Target health state block. Only applicable for Network Load Balancer target groups when `protocol` is `TCP` or `TLS`. See target_health_state for more information.",
        alb_TargetGroupTargetHealthState_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "lambdaMultiValueHeadersEnabled",
        "Whether the request and response headers exchanged between the load balancer and the Lambda function include arrays of values or strings. Only applies when `target_type` is `lambda`. Default is `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ipAddressType",
        "The type of IP addresses used by the target group, only supported when target type is set to `ip`. Possible values are `ipv4` or `ipv6`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "port",
        "Port on which targets receive traffic, unless overridden when registering a specific target. Required when `target_type` is `instance`, `ip` or `alb`. Does not apply when `target_type` is `lambda`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "stickiness",
        "Stickiness configuration block. Detailed below.",
        alb_TargetGroupStickiness_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "slowStart",
        "Amount time for targets to warm up before the load balancer sends them a full share of requests. The range is 30-900 seconds or 0 to disable. The default value is 0 seconds.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "targetFailovers",
        "Target failover block. Only applicable for Gateway Load Balancer target groups. See target_failover for more information.",
        alb_TargetGroupTargetFailover_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "preserveClientIp",
        "Whether client IP preservation is enabled. See [doc](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#client-ip-preservation) for more information.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "healthCheck",
        "Health Check configuration block. Detailed below.",
        alb_TargetGroupHealthCheck_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "deregistrationDelay",
        "Amount time for Elastic Load Balancing to wait before changing the state of a deregistering target from draining to unused. The range is 0-3600 seconds. The default value is 300 seconds.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the target group. If omitted, this provider will assign a random, unique name. This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and must not begin or end with a hyphen.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "loadBalancingCrossZoneEnabled",
        'Indicates whether cross zone load balancing is enabled. The value is `"true"`, `"false"` or `"use_load_balancer_configuration"`. The default is `"use_load_balancer_configuration"`.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "targetType",
        "Type of target that you must specify when registering targets with this target group.\nSee [doc](https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_CreateTargetGroup.html) for supported values.\nThe default is `instance`.\n\nNote that you can't specify targets for a target group using both instance IDs and IP addresses.\n\nIf the target type is `ip`, specify IP addresses from the subnets of the virtual private cloud (VPC) for the target group, the RFC 1918 range (10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16), and the RFC 6598 range (100.64.0.0/10). You can't specify publicly routable IP addresses.\n\nNetwork Load Balancers do not support the `lambda` target type.\n\nApplication Load Balancers do not support the `alb` target type.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "protocol",
        "Protocol to use for routing traffic to the targets.\nShould be one of `GENEVE`, `HTTP`, `HTTPS`, `TCP`, `TCP_UDP`, `TLS`, or `UDP`.\nRequired when `target_type` is `instance`, `ip`, or `alb`.\nDoes not apply when `target_type` is `lambda`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "namePrefix",
        "Creates a unique name beginning with the specified prefix. Conflicts with `name`. Cannot be longer than 6 characters.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "connectionTermination",
        "Whether to terminate connections at the end of the deregistration timeout on Network Load Balancers. See [doc](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#deregistration-delay) for more information. Default is `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "protocolVersion",
        "Only applicable when `protocol` is `HTTP` or `HTTPS`. The protocol version. Specify `GRPC` to send requests to targets using gRPC. Specify `HTTP2` to send requests to targets using HTTP/2. The default is `HTTP1`, which sends requests to targets using HTTP/1.1",
        [],
        false,
        true,
      ),
    ];
  }
}
