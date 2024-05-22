import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lb_LoadBalancerSubnetMapping,
  lb_LoadBalancerSubnetMapping_GetTypes,
} from "../types/lb_LoadBalancerSubnetMapping";
import {
  lb_LoadBalancerAccessLogs,
  lb_LoadBalancerAccessLogs_GetTypes,
} from "../types/lb_LoadBalancerAccessLogs";
import {
  lb_LoadBalancerConnectionLogs,
  lb_LoadBalancerConnectionLogs_GetTypes,
} from "../types/lb_LoadBalancerConnectionLogs";

export interface LoadBalancerArgs {
  // If true, cross-zone load balancing of the load balancer will be enabled. For `network` and `gateway` type load balancers, this feature is disabled by default (`false`). For `application` load balancer this feature is always enabled (`true`) and cannot be disabled. Defaults to `false`.
  enableCrossZoneLoadBalancing?: boolean;

  // If true, the LB will be internal. Defaults to `false`.
  internal?: boolean;

  // Indicates whether the Application Load Balancer should preserve the Host header in the HTTP request and send it to the target without any change. Defaults to `false`.
  preserveHostHeader?: boolean;

  // A list of subnet IDs to attach to the LB. For Load Balancers of type `network` subnets can only be added (see [Availability Zones](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#availability-zones)), deleting a subnet for load balancers of type `network` will force a recreation of the resource.
  subnets?: Array<string>;

  // Indicates how traffic is distributed among the load balancer Availability Zones. Possible values are `any_availability_zone` (default), `availability_zone_affinity`, or `partial_availability_zone_affinity`. See   [Availability Zone DNS affinity](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#zonal-dns-affinity) for additional details. Only valid for `network` type load balancers.
  dnsRecordClientRoutingPolicy?: string;

  // Indicates whether HTTP headers with header fields that are not valid are removed by the load balancer (true) or routed to targets (false). The default is false. Elastic Load Balancing requires that message header names contain only alphanumeric characters and hyphens. Only valid for Load Balancers of type `application`.
  dropInvalidHeaderFields?: boolean;

  // Indicates whether inbound security group rules are enforced for traffic originating from a PrivateLink. Only valid for Load Balancers of type `network`. The possible values are `on` and `off`.
  enforceSecurityGroupInboundRulesOnPrivateLinkTraffic?: string;

  // The time in seconds that the connection is allowed to be idle. Only valid for Load Balancers of type `application`. Default: 60.
  idleTimeout?: number;

  // The type of IP addresses used by the subnets for your load balancer. The possible values are `ipv4` and `dualstack`.
  ipAddressType?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  namePrefix?: string;

  // A subnet mapping block as documented below. For Load Balancers of type `network` subnet mappings can only be added.
  subnetMappings?: Array<lb_LoadBalancerSubnetMapping>;

  // An Access Logs block. Access Logs documented below.
  accessLogs?: lb_LoadBalancerAccessLogs;

  // Indicates whether HTTP/2 is enabled in `application` load balancers. Defaults to `true`.
  enableHttp2?: boolean;

  // Indicates whether the two headers (`x-amzn-tls-version` and `x-amzn-tls-cipher-suite`), which contain information about the negotiated TLS version and cipher suite, are added to the client request before sending it to the target. Only valid for Load Balancers of type `application`. Defaults to `false`
  enableTlsVersionAndCipherSuiteHeaders?: boolean;

  // The type of load balancer to create. Possible values are `application`, `gateway`, or `network`. The default value is `application`.
  loadBalancerType?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Determines how the load balancer modifies the `X-Forwarded-For` header in the HTTP request before sending the request to the target. The possible values are `append`, `preserve`, and `remove`. Only valid for Load Balancers of type `application`. The default is `append`.
  xffHeaderProcessingMode?: string;

  // A Connection Logs block. Connection Logs documented below. Only valid for Load Balancers of type `application`.
  connectionLogs?: lb_LoadBalancerConnectionLogs;

  // The ID of the customer owned ipv4 pool to use for this load balancer.
  customerOwnedIpv4Pool?: string;

  // Indicates whether to allow a WAF-enabled load balancer to route requests to targets if it is unable to forward the request to AWS WAF. Defaults to `false`.
  enableWafFailOpen?: boolean;

  // Indicates whether the X-Forwarded-For header should preserve the source port that the client used to connect to the load balancer in `application` load balancers. Defaults to `false`.
  enableXffClientPort?: boolean;

  /*
The name of the LB. This name must be unique within your AWS account, can have a maximum of 32 characters,
must contain only alphanumeric characters or hyphens, and must not begin or end with a hyphen. If not specified,
this provider will autogenerate a name beginning with `tf-lb`.
*/
  name?: string;

  // A list of security group IDs to assign to the LB. Only valid for Load Balancers of type `application` or `network`. For load balancers of type `network` security groups cannot be added if none are currently present, and cannot all be removed once added. If either of these conditions are met, this will force a recreation of the resource.
  securityGroups?: Array<string>;

  // Determines how the load balancer handles requests that might pose a security risk to an application due to HTTP desync. Valid values are `monitor`, `defensive` (default), `strictest`.
  desyncMitigationMode?: string;

  // If true, deletion of the load balancer will be disabled via the AWS API. This will prevent this provider from deleting the load balancer. Defaults to `false`.
  enableDeletionProtection?: boolean;
}
export class LoadBalancer extends Resource {
  // The ARN of the load balancer (matches `id`).
  public arn?: string;

  // Determines how the load balancer handles requests that might pose a security risk to an application due to HTTP desync. Valid values are `monitor`, `defensive` (default), `strictest`.
  public desyncMitigationMode?: string;

  // Indicates whether the two headers (`x-amzn-tls-version` and `x-amzn-tls-cipher-suite`), which contain information about the negotiated TLS version and cipher suite, are added to the client request before sending it to the target. Only valid for Load Balancers of type `application`. Defaults to `false`
  public enableTlsVersionAndCipherSuiteHeaders?: boolean;

  // Indicates whether the X-Forwarded-For header should preserve the source port that the client used to connect to the load balancer in `application` load balancers. Defaults to `false`.
  public enableXffClientPort?: boolean;

  // Indicates whether to allow a WAF-enabled load balancer to route requests to targets if it is unable to forward the request to AWS WAF. Defaults to `false`.
  public enableWafFailOpen?: boolean;

  // Indicates whether inbound security group rules are enforced for traffic originating from a PrivateLink. Only valid for Load Balancers of type `network`. The possible values are `on` and `off`.
  public enforceSecurityGroupInboundRulesOnPrivateLinkTraffic?: string;

  // If true, the LB will be internal. Defaults to `false`.
  public internal?: boolean;

  // The type of load balancer to create. Possible values are `application`, `gateway`, or `network`. The default value is `application`.
  public loadBalancerType?: string;

  /*
The name of the LB. This name must be unique within your AWS account, can have a maximum of 32 characters,
must contain only alphanumeric characters or hyphens, and must not begin or end with a hyphen. If not specified,
this provider will autogenerate a name beginning with `tf-lb`.
*/
  public name?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Determines how the load balancer modifies the `X-Forwarded-For` header in the HTTP request before sending the request to the target. The possible values are `append`, `preserve`, and `remove`. Only valid for Load Balancers of type `application`. The default is `append`.
  public xffHeaderProcessingMode?: string;

  // The ID of the customer owned ipv4 pool to use for this load balancer.
  public customerOwnedIpv4Pool?: string;

  // If true, cross-zone load balancing of the load balancer will be enabled. For `network` and `gateway` type load balancers, this feature is disabled by default (`false`). For `application` load balancer this feature is always enabled (`true`) and cannot be disabled. Defaults to `false`.
  public enableCrossZoneLoadBalancing?: boolean;

  // A Connection Logs block. Connection Logs documented below. Only valid for Load Balancers of type `application`.
  public connectionLogs?: lb_LoadBalancerConnectionLogs;

  // Indicates whether HTTP/2 is enabled in `application` load balancers. Defaults to `true`.
  public enableHttp2?: boolean;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  public namePrefix?: string;

  // A subnet mapping block as documented below. For Load Balancers of type `network` subnet mappings can only be added.
  public subnetMappings?: Array<lb_LoadBalancerSubnetMapping>;

  // The ARN suffix for use with CloudWatch Metrics.
  public arnSuffix?: string;

  // Indicates whether HTTP headers with header fields that are not valid are removed by the load balancer (true) or routed to targets (false). The default is false. Elastic Load Balancing requires that message header names contain only alphanumeric characters and hyphens. Only valid for Load Balancers of type `application`.
  public dropInvalidHeaderFields?: boolean;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The time in seconds that the connection is allowed to be idle. Only valid for Load Balancers of type `application`. Default: 60.
  public idleTimeout?: number;

  // The type of IP addresses used by the subnets for your load balancer. The possible values are `ipv4` and `dualstack`.
  public ipAddressType?: string;

  // Indicates whether the Application Load Balancer should preserve the Host header in the HTTP request and send it to the target without any change. Defaults to `false`.
  public preserveHostHeader?: boolean;

  // A list of security group IDs to assign to the LB. Only valid for Load Balancers of type `application` or `network`. For load balancers of type `network` security groups cannot be added if none are currently present, and cannot all be removed once added. If either of these conditions are met, this will force a recreation of the resource.
  public securityGroups?: Array<string>;

  // The canonical hosted zone ID of the load balancer (to be used in a Route 53 Alias record).
  public zoneId?: string;

  // The DNS name of the load balancer.
  public dnsName?: string;

  // Indicates how traffic is distributed among the load balancer Availability Zones. Possible values are `any_availability_zone` (default), `availability_zone_affinity`, or `partial_availability_zone_affinity`. See   [Availability Zone DNS affinity](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#zonal-dns-affinity) for additional details. Only valid for `network` type load balancers.
  public dnsRecordClientRoutingPolicy?: string;

  //
  public vpcId?: string;

  // An Access Logs block. Access Logs documented below.
  public accessLogs?: lb_LoadBalancerAccessLogs;

  // If true, deletion of the load balancer will be disabled via the AWS API. This will prevent this provider from deleting the load balancer. Defaults to `false`.
  public enableDeletionProtection?: boolean;

  // A list of subnet IDs to attach to the LB. For Load Balancers of type `network` subnets can only be added (see [Availability Zones](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#availability-zones)), deleting a subnet for load balancers of type `network` will force a recreation of the resource.
  public subnets?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "enforceSecurityGroupInboundRulesOnPrivateLinkTraffic",
        "Indicates whether inbound security group rules are enforced for traffic originating from a PrivateLink. Only valid for Load Balancers of type `network`. The possible values are `on` and `off`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "idleTimeout",
        "The time in seconds that the connection is allowed to be idle. Only valid for Load Balancers of type `application`. Default: 60.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableHttp2",
        "Indicates whether HTTP/2 is enabled in `application` load balancers. Defaults to `true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableTlsVersionAndCipherSuiteHeaders",
        "Indicates whether the two headers (`x-amzn-tls-version` and `x-amzn-tls-cipher-suite`), which contain information about the negotiated TLS version and cipher suite, are added to the client request before sending it to the target. Only valid for Load Balancers of type `application`. Defaults to `false`",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "connectionLogs",
        "A Connection Logs block. Connection Logs documented below. Only valid for Load Balancers of type `application`.",
        lb_LoadBalancerConnectionLogs_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the LB. This name must be unique within your AWS account, can have a maximum of 32 characters,\nmust contain only alphanumeric characters or hyphens, and must not begin or end with a hyphen. If not specified,\nthis provider will autogenerate a name beginning with `tf-lb`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "dnsRecordClientRoutingPolicy",
        "Indicates how traffic is distributed among the load balancer Availability Zones. Possible values are `any_availability_zone` (default), `availability_zone_affinity`, or `partial_availability_zone_affinity`. See   [Availability Zone DNS affinity](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#zonal-dns-affinity) for additional details. Only valid for `network` type load balancers.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "dropInvalidHeaderFields",
        "Indicates whether HTTP headers with header fields that are not valid are removed by the load balancer (true) or routed to targets (false). The default is false. Elastic Load Balancing requires that message header names contain only alphanumeric characters and hyphens. Only valid for Load Balancers of type `application`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "securityGroups",
        "A list of security group IDs to assign to the LB. Only valid for Load Balancers of type `application` or `network`. For load balancers of type `network` security groups cannot be added if none are currently present, and cannot all be removed once added. If either of these conditions are met, this will force a recreation of the resource.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableWafFailOpen",
        "Indicates whether to allow a WAF-enabled load balancer to route requests to targets if it is unable to forward the request to AWS WAF. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableDeletionProtection",
        "If true, deletion of the load balancer will be disabled via the AWS API. This will prevent this provider from deleting the load balancer. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "xffHeaderProcessingMode",
        "Determines how the load balancer modifies the `X-Forwarded-For` header in the HTTP request before sending the request to the target. The possible values are `append`, `preserve`, and `remove`. Only valid for Load Balancers of type `application`. The default is `append`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "customerOwnedIpv4Pool",
        "The ID of the customer owned ipv4 pool to use for this load balancer.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "desyncMitigationMode",
        "Determines how the load balancer handles requests that might pose a security risk to an application due to HTTP desync. Valid values are `monitor`, `defensive` (default), `strictest`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ipAddressType",
        "The type of IP addresses used by the subnets for your load balancer. The possible values are `ipv4` and `dualstack`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "namePrefix",
        "Creates a unique name beginning with the specified prefix. Conflicts with `name`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "preserveHostHeader",
        "Indicates whether the Application Load Balancer should preserve the Host header in the HTTP request and send it to the target without any change. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "subnets",
        "A list of subnet IDs to attach to the LB. For Load Balancers of type `network` subnets can only be added (see [Availability Zones](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#availability-zones)), deleting a subnet for load balancers of type `network` will force a recreation of the resource.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "subnetMappings",
        "A subnet mapping block as documented below. For Load Balancers of type `network` subnet mappings can only be added.",
        lb_LoadBalancerSubnetMapping_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "accessLogs",
        "An Access Logs block. Access Logs documented below.",
        lb_LoadBalancerAccessLogs_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "loadBalancerType",
        "The type of load balancer to create. Possible values are `application`, `gateway`, or `network`. The default value is `application`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableCrossZoneLoadBalancing",
        "If true, cross-zone load balancing of the load balancer will be enabled. For `network` and `gateway` type load balancers, this feature is disabled by default (`false`). For `application` load balancer this feature is always enabled (`true`) and cannot be disabled. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "internal",
        "If true, the LB will be internal. Defaults to `false`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableXffClientPort",
        "Indicates whether the X-Forwarded-For header should preserve the source port that the client used to connect to the load balancer in `application` load balancers. Defaults to `false`.",
        [],
        false,
        false,
      ),
    ];
  }
}
