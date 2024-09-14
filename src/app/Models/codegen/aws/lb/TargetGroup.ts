import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  lb_TargetGroupHealthCheck,
  lb_TargetGroupHealthCheck_GetTypes,
} from "../types/lb_TargetGroupHealthCheck";
import {
  lb_TargetGroupStickiness,
  lb_TargetGroupStickiness_GetTypes,
} from "../types/lb_TargetGroupStickiness";
import {
  lb_TargetGroupTargetFailover,
  lb_TargetGroupTargetFailover_GetTypes,
} from "../types/lb_TargetGroupTargetFailover";
import {
  lb_TargetGroupTargetHealthState,
  lb_TargetGroupTargetHealthState_GetTypes,
} from "../types/lb_TargetGroupTargetHealthState";
import {
  lb_TargetGroupTargetGroupHealth,
  lb_TargetGroupTargetGroupHealth_GetTypes,
} from "../types/lb_TargetGroupTargetGroupHealth";

export interface TargetGroupArgs {
  // Amount time for targets to warm up before the load balancer sends them a full share of requests. The range is 30-900 seconds or 0 to disable. The default value is 0 seconds.
  slowStart?: number;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Name of the target group. If omitted, this provider will assign a random, unique name. This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and must not begin or end with a hyphen.
  name?: string;

  // Amount time for Elastic Load Balancing to wait before changing the state of a deregistering target from draining to unused. The range is 0-3600 seconds. The default value is 300 seconds.
  deregistrationDelay?: number;

  // Health Check configuration block. Detailed below.
  healthCheck?: lb_TargetGroupHealthCheck;

  // The type of IP addresses used by the target group, only supported when target type is set to `ip`. Possible values are `ipv4` or `ipv6`.
  ipAddressType?: string;

  // Determines how the load balancer selects targets when routing requests. Only applicable for Application Load Balancer Target Groups. The value is `round_robin`, `least_outstanding_requests`, or `weighted_random`. The default is `round_robin`.
  loadBalancingAlgorithmType?: string;

  // Indicates whether cross zone load balancing is enabled. The value is `"true"`, `"false"` or `"use_load_balancer_configuration"`. The default is `"use_load_balancer_configuration"`.
  loadBalancingCrossZoneEnabled?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`. Cannot be longer than 6 characters.
  namePrefix?: string;

  /*
Protocol to use for routing traffic to the targets.
Should be one of `GENEVE`, `HTTP`, `HTTPS`, `TCP`, `TCP_UDP`, `TLS`, or `UDP`.
Required when `target_type` is `instance`, `ip`, or `alb`.
Does not apply when `target_type` is `lambda`.
*/
  protocol?: string;

  // Whether to terminate connections at the end of the deregistration timeout on Network Load Balancers. See [doc](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#deregistration-delay) for more information. Default is `false`.
  connectionTermination?: boolean;

  // Whether to enable support for proxy protocol v2 on Network Load Balancers. See [doc](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#proxy-protocol) for more information. Default is `false`.
  proxyProtocolV2?: boolean;

  // Stickiness configuration block. Detailed below.
  stickiness?: lb_TargetGroupStickiness;

  // Target failover block. Only applicable for Gateway Load Balancer target groups. See target_failover for more information.
  targetFailovers?: Array<lb_TargetGroupTargetFailover>;

  // Only applicable when `protocol` is `HTTP` or `HTTPS`. The protocol version. Specify `GRPC` to send requests to targets using gRPC. Specify `HTTP2` to send requests to targets using HTTP/2. The default is `HTTP1`, which sends requests to targets using HTTP/1.1
  protocolVersion?: string;

  // Target health state block. Only applicable for Network Load Balancer target groups when `protocol` is `TCP` or `TLS`. See target_health_state for more information.
  targetHealthStates?: Array<lb_TargetGroupTargetHealthState>;

  // Identifier of the VPC in which to create the target group. Required when `target_type` is `instance`, `ip` or `alb`. Does not apply when `target_type` is `lambda`.
  vpcId?: string;

  // Port on which targets receive traffic, unless overridden when registering a specific target. Required when `target_type` is `instance`, `ip` or `alb`. Does not apply when `target_type` is `lambda`.
  port?: number;

  // Determines whether to enable target anomaly mitigation.  Target anomaly mitigation is only supported by the `weighted_random` load balancing algorithm type.  See [doc](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#automatic-target-weights) for more information.  The value is `"on"` or `"off"`. The default is `"off"`.
  loadBalancingAnomalyMitigation?: string;

  // Whether client IP preservation is enabled. See [doc](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#client-ip-preservation) for more information.
  preserveClientIp?: string;

  // Target health requirements block. See target_group_health for more information.
  targetGroupHealth?: lb_TargetGroupTargetGroupHealth;

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

  // Whether the request and response headers exchanged between the load balancer and the Lambda function include arrays of values or strings. Only applies when `target_type` is `lambda`. Default is `false`.
  lambdaMultiValueHeadersEnabled?: boolean;
}
export class TargetGroup extends DS_Resource {
  // Whether the request and response headers exchanged between the load balancer and the Lambda function include arrays of values or strings. Only applies when `target_type` is `lambda`. Default is `false`.
  public lambdaMultiValueHeadersEnabled?: boolean;

  // Whether client IP preservation is enabled. See [doc](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#client-ip-preservation) for more information.
  public preserveClientIp?: string;

  // Health Check configuration block. Detailed below.
  public healthCheck?: lb_TargetGroupHealthCheck;

  // Port on which targets receive traffic, unless overridden when registering a specific target. Required when `target_type` is `instance`, `ip` or `alb`. Does not apply when `target_type` is `lambda`.
  public port?: number;

  // Only applicable when `protocol` is `HTTP` or `HTTPS`. The protocol version. Specify `GRPC` to send requests to targets using gRPC. Specify `HTTP2` to send requests to targets using HTTP/2. The default is `HTTP1`, which sends requests to targets using HTTP/1.1
  public protocolVersion?: string;

  // The type of IP addresses used by the target group, only supported when target type is set to `ip`. Possible values are `ipv4` or `ipv6`.
  public ipAddressType?: string;

  // Determines how the load balancer selects targets when routing requests. Only applicable for Application Load Balancer Target Groups. The value is `round_robin`, `least_outstanding_requests`, or `weighted_random`. The default is `round_robin`.
  public loadBalancingAlgorithmType?: string;

  // Determines whether to enable target anomaly mitigation.  Target anomaly mitigation is only supported by the `weighted_random` load balancing algorithm type.  See [doc](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#automatic-target-weights) for more information.  The value is `"on"` or `"off"`. The default is `"off"`.
  public loadBalancingAnomalyMitigation?: string;

  // Whether to enable support for proxy protocol v2 on Network Load Balancers. See [doc](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#proxy-protocol) for more information. Default is `false`.
  public proxyProtocolV2?: boolean;

  // Amount time for targets to warm up before the load balancer sends them a full share of requests. The range is 30-900 seconds or 0 to disable. The default value is 0 seconds.
  public slowStart?: number;

  // Stickiness configuration block. Detailed below.
  public stickiness?: lb_TargetGroupStickiness;

  // Target failover block. Only applicable for Gateway Load Balancer target groups. See target_failover for more information.
  public targetFailovers?: Array<lb_TargetGroupTargetFailover>;

  // ARN suffix for use with CloudWatch Metrics.
  public arnSuffix?: string;

  // Amount time for Elastic Load Balancing to wait before changing the state of a deregistering target from draining to unused. The range is 0-3600 seconds. The default value is 300 seconds.
  public deregistrationDelay?: number;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`. Cannot be longer than 6 characters.
  public namePrefix?: string;

  // Target health requirements block. See target_group_health for more information.
  public targetGroupHealth?: lb_TargetGroupTargetGroupHealth;

  // Target health state block. Only applicable for Network Load Balancer target groups when `protocol` is `TCP` or `TLS`. See target_health_state for more information.
  public targetHealthStates?: Array<lb_TargetGroupTargetHealthState>;

  // Identifier of the VPC in which to create the target group. Required when `target_type` is `instance`, `ip` or `alb`. Does not apply when `target_type` is `lambda`.
  public vpcId?: string;

  // Whether to terminate connections at the end of the deregistration timeout on Network Load Balancers. See [doc](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#deregistration-delay) for more information. Default is `false`.
  public connectionTermination?: boolean;

  // Indicates whether cross zone load balancing is enabled. The value is `"true"`, `"false"` or `"use_load_balancer_configuration"`. The default is `"use_load_balancer_configuration"`.
  public loadBalancingCrossZoneEnabled?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // ARN of the Target Group (matches `id`).
  public arn?: string;

  // Name of the target group. If omitted, this provider will assign a random, unique name. This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and must not begin or end with a hyphen.
  public name?: string;

  /*
Protocol to use for routing traffic to the targets.
Should be one of `GENEVE`, `HTTP`, `HTTPS`, `TCP`, `TCP_UDP`, `TLS`, or `UDP`.
Required when `target_type` is `instance`, `ip`, or `alb`.
Does not apply when `target_type` is `lambda`.
*/
  public protocol?: string;

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

  // ARNs of the Load Balancers associated with the Target Group.
  public loadBalancerArns?: Array<string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "vpcId",
        "Identifier of the VPC in which to create the target group. Required when `target_type` is `instance`, `ip` or `alb`. Does not apply when `target_type` is `lambda`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "targetType",
        "Type of target that you must specify when registering targets with this target group.\nSee [doc](https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_CreateTargetGroup.html) for supported values.\nThe default is `instance`.\n\nNote that you can't specify targets for a target group using both instance IDs and IP addresses.\n\nIf the target type is `ip`, specify IP addresses from the subnets of the virtual private cloud (VPC) for the target group, the RFC 1918 range (10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16), and the RFC 6598 range (100.64.0.0/10). You can't specify publicly routable IP addresses.\n\nNetwork Load Balancers do not support the `lambda` target type.\n\nApplication Load Balancers do not support the `alb` target type.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "lambdaMultiValueHeadersEnabled",
        "Whether the request and response headers exchanged between the load balancer and the Lambda function include arrays of values or strings. Only applies when `target_type` is `lambda`. Default is `false`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ipAddressType",
        "The type of IP addresses used by the target group, only supported when target type is set to `ip`. Possible values are `ipv4` or `ipv6`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "protocol",
        "Protocol to use for routing traffic to the targets.\nShould be one of `GENEVE`, `HTTP`, `HTTPS`, `TCP`, `TCP_UDP`, `TLS`, or `UDP`.\nRequired when `target_type` is `instance`, `ip`, or `alb`.\nDoes not apply when `target_type` is `lambda`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "connectionTermination",
        "Whether to terminate connections at the end of the deregistration timeout on Network Load Balancers. See [doc](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#deregistration-delay) for more information. Default is `false`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "port",
        "Port on which targets receive traffic, unless overridden when registering a specific target. Required when `target_type` is `instance`, `ip` or `alb`. Does not apply when `target_type` is `lambda`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "preserveClientIp",
        "Whether client IP preservation is enabled. See [doc](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#client-ip-preservation) for more information.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "targetGroupHealth",
        "Target health requirements block. See target_group_health for more information.",
        () => lb_TargetGroupTargetGroupHealth_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "slowStart",
        "Amount time for targets to warm up before the load balancer sends them a full share of requests. The range is 30-900 seconds or 0 to disable. The default value is 0 seconds.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the target group. If omitted, this provider will assign a random, unique name. This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and must not begin or end with a hyphen.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "namePrefix",
        "Creates a unique name beginning with the specified prefix. Conflicts with `name`. Cannot be longer than 6 characters.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "protocolVersion",
        "Only applicable when `protocol` is `HTTP` or `HTTPS`. The protocol version. Specify `GRPC` to send requests to targets using gRPC. Specify `HTTP2` to send requests to targets using HTTP/2. The default is `HTTP1`, which sends requests to targets using HTTP/1.1",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "proxyProtocolV2",
        "Whether to enable support for proxy protocol v2 on Network Load Balancers. See [doc](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#proxy-protocol) for more information. Default is `false`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "stickiness",
        "Stickiness configuration block. Detailed below.",
        () => lb_TargetGroupStickiness_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "targetFailovers",
        "Target failover block. Only applicable for Gateway Load Balancer target groups. See target_failover for more information.",
        () => lb_TargetGroupTargetFailover_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "targetHealthStates",
        "Target health state block. Only applicable for Network Load Balancer target groups when `protocol` is `TCP` or `TLS`. See target_health_state for more information.",
        () => lb_TargetGroupTargetHealthState_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "deregistrationDelay",
        "Amount time for Elastic Load Balancing to wait before changing the state of a deregistering target from draining to unused. The range is 0-3600 seconds. The default value is 300 seconds.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "healthCheck",
        "Health Check configuration block. Detailed below.",
        () => lb_TargetGroupHealthCheck_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "loadBalancingAlgorithmType",
        "Determines how the load balancer selects targets when routing requests. Only applicable for Application Load Balancer Target Groups. The value is `round_robin`, `least_outstanding_requests`, or `weighted_random`. The default is `round_robin`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "loadBalancingCrossZoneEnabled",
        'Indicates whether cross zone load balancing is enabled. The value is `"true"`, `"false"` or `"use_load_balancer_configuration"`. The default is `"use_load_balancer_configuration"`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "loadBalancingAnomalyMitigation",
        'Determines whether to enable target anomaly mitigation.  Target anomaly mitigation is only supported by the `weighted_random` load balancing algorithm type.  See [doc](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#automatic-target-weights) for more information.  The value is `"on"` or `"off"`. The default is `"off"`.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
