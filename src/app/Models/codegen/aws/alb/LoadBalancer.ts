import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  alb_LoadBalancerSubnetMapping,
  alb_LoadBalancerSubnetMapping_GetTypes,
} from '../types/alb_LoadBalancerSubnetMapping';
import {
  alb_LoadBalancerAccessLogs,
  alb_LoadBalancerAccessLogs_GetTypes,
} from '../types/alb_LoadBalancerAccessLogs';
import {
  alb_LoadBalancerConnectionLogs,
  alb_LoadBalancerConnectionLogs_GetTypes,
} from '../types/alb_LoadBalancerConnectionLogs';

export interface LoadBalancerArgs {
  // Client keep alive value in seconds. The valid range is 60-604800 seconds. The default is 3600 seconds.
  clientKeepAlive?: number;

  // Connection Logs block. See below. Only valid for Load Balancers of type `application`.
  connectionLogs?: alb_LoadBalancerConnectionLogs;

  // List of security group IDs to assign to the LB. Only valid for Load Balancers of type `application` or `network`. For load balancers of type `network` security groups cannot be added if none are currently present, and cannot all be removed once added. If either of these conditions are met, this will force a recreation of the resource.
  securityGroups?: Array<string>;

  // List of subnet IDs to attach to the LB. For Load Balancers of type `network` subnets can only be added (see [Availability Zones](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#availability-zones)), deleting a subnet for load balancers of type `network` will force a recreation of the resource.
  subnets?: Array<string>;

  // How traffic is distributed among the load balancer Availability Zones. Possible values are `any_availability_zone` (default), `availability_zone_affinity`, or `partial_availability_zone_affinity`. See   [Availability Zone DNS affinity](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#zonal-dns-affinity) for additional details. Only valid for `network` type load balancers.
  dnsRecordClientRoutingPolicy?: string;

  // If true, cross-zone load balancing of the load balancer will be enabled. For `network` and `gateway` type load balancers, this feature is disabled by default (`false`). For `application` load balancer this feature is always enabled (`true`) and cannot be disabled. Defaults to `false`.
  enableCrossZoneLoadBalancing?: boolean;

  // Whether HTTP/2 is enabled in `application` load balancers. Defaults to `true`.
  enableHttp2?: boolean;

  // Whether the X-Forwarded-For header should preserve the source port that the client used to connect to the load balancer in `application` load balancers. Defaults to `false`.
  enableXffClientPort?: boolean;

  // Whether the Application Load Balancer should preserve the Host header in the HTTP request and send it to the target without any change. Defaults to `false`.
  preserveHostHeader?: boolean;

  // Whether the two headers (`x-amzn-tls-version` and `x-amzn-tls-cipher-suite`), which contain information about the negotiated TLS version and cipher suite, are added to the client request before sending it to the target. Only valid for Load Balancers of type `application`. Defaults to `false`
  enableTlsVersionAndCipherSuiteHeaders?: boolean;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  namePrefix?: string;

  // Subnet mapping block. See below. For Load Balancers of type `network` subnet mappings can only be added.
  subnetMappings?: Array<alb_LoadBalancerSubnetMapping>;

  // Determines how the load balancer modifies the `X-Forwarded-For` header in the HTTP request before sending the request to the target. The possible values are `append`, `preserve`, and `remove`. Only valid for Load Balancers of type `application`. The default is `append`.
  xffHeaderProcessingMode?: string;

  // Whether to allow a WAF-enabled load balancer to route requests to targets if it is unable to forward the request to AWS WAF. Defaults to `false`.
  enableWafFailOpen?: boolean;

  // Whether inbound security group rules are enforced for traffic originating from a PrivateLink. Only valid for Load Balancers of type `network`. The possible values are `on` and `off`.
  enforceSecurityGroupInboundRulesOnPrivateLinkTraffic?: string;

  // Time in seconds that the connection is allowed to be idle. Only valid for Load Balancers of type `application`. Default: 60.
  idleTimeout?: number;

  // Access Logs block. See below.
  accessLogs?: alb_LoadBalancerAccessLogs;

  // ID of the customer owned ipv4 pool to use for this load balancer.
  customerOwnedIpv4Pool?: string;

  // How the load balancer handles requests that might pose a security risk to an application due to HTTP desync. Valid values are `monitor`, `defensive` (default), `strictest`.
  desyncMitigationMode?: string;

  // Whether HTTP headers with header fields that are not valid are removed by the load balancer (true) or routed to targets (false). The default is false. Elastic Load Balancing requires that message header names contain only alphanumeric characters and hyphens. Only valid for Load Balancers of type `application`.
  dropInvalidHeaderFields?: boolean;

  // If true, deletion of the load balancer will be disabled via the AWS API. This will prevent this provider from deleting the load balancer. Defaults to `false`.
  enableDeletionProtection?: boolean;

  // If true, the LB will be internal. Defaults to `false`.
  internal?: boolean;

  // Type of IP addresses used by the subnets for your load balancer. The possible values depend upon the load balancer type: `ipv4` (all load balancer types), `dualstack` (all load balancer types), and `dualstack-without-public-ipv4` (type `application` only).
  ipAddressType?: string;

  // Type of load balancer to create. Possible values are `application`, `gateway`, or `network`. The default value is `application`.
  loadBalancerType?: string;

  // Name of the LB. This name must be unique within your AWS account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and must not begin or end with a hyphen. If not specified, this provider will autogenerate a name beginning with `tf-lb`.
  name?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class LoadBalancer extends DS_Resource {
  // Time in seconds that the connection is allowed to be idle. Only valid for Load Balancers of type `application`. Default: 60.
  public idleTimeout?: number;

  // Canonical hosted zone ID of the load balancer (to be used in a Route 53 Alias record).
  public zoneId?: string;

  // Access Logs block. See below.
  public accessLogs?: alb_LoadBalancerAccessLogs;

  // How traffic is distributed among the load balancer Availability Zones. Possible values are `any_availability_zone` (default), `availability_zone_affinity`, or `partial_availability_zone_affinity`. See   [Availability Zone DNS affinity](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#zonal-dns-affinity) for additional details. Only valid for `network` type load balancers.
  public dnsRecordClientRoutingPolicy?: string;

  // Whether HTTP headers with header fields that are not valid are removed by the load balancer (true) or routed to targets (false). The default is false. Elastic Load Balancing requires that message header names contain only alphanumeric characters and hyphens. Only valid for Load Balancers of type `application`.
  public dropInvalidHeaderFields?: boolean;

  // Whether the two headers (`x-amzn-tls-version` and `x-amzn-tls-cipher-suite`), which contain information about the negotiated TLS version and cipher suite, are added to the client request before sending it to the target. Only valid for Load Balancers of type `application`. Defaults to `false`
  public enableTlsVersionAndCipherSuiteHeaders?: boolean;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  public namePrefix?: string;

  // Connection Logs block. See below. Only valid for Load Balancers of type `application`.
  public connectionLogs?: alb_LoadBalancerConnectionLogs;

  // If true, cross-zone load balancing of the load balancer will be enabled. For `network` and `gateway` type load balancers, this feature is disabled by default (`false`). For `application` load balancer this feature is always enabled (`true`) and cannot be disabled. Defaults to `false`.
  public enableCrossZoneLoadBalancing?: boolean;

  // If true, deletion of the load balancer will be disabled via the AWS API. This will prevent this provider from deleting the load balancer. Defaults to `false`.
  public enableDeletionProtection?: boolean;

  // Type of load balancer to create. Possible values are `application`, `gateway`, or `network`. The default value is `application`.
  public loadBalancerType?: string;

  // Whether the Application Load Balancer should preserve the Host header in the HTTP request and send it to the target without any change. Defaults to `false`.
  public preserveHostHeader?: boolean;

  // Determines how the load balancer modifies the `X-Forwarded-For` header in the HTTP request before sending the request to the target. The possible values are `append`, `preserve`, and `remove`. Only valid for Load Balancers of type `application`. The default is `append`.
  public xffHeaderProcessingMode?: string;

  // ARN suffix for use with CloudWatch Metrics.
  public arnSuffix?: string;

  // Name of the LB. This name must be unique within your AWS account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and must not begin or end with a hyphen. If not specified, this provider will autogenerate a name beginning with `tf-lb`.
  public name?: string;

  // ARN of the load balancer (matches `id`).
  public arn?: string;

  // Client keep alive value in seconds. The valid range is 60-604800 seconds. The default is 3600 seconds.
  public clientKeepAlive?: number;

  // Whether HTTP/2 is enabled in `application` load balancers. Defaults to `true`.
  public enableHttp2?: boolean;

  // Whether to allow a WAF-enabled load balancer to route requests to targets if it is unable to forward the request to AWS WAF. Defaults to `false`.
  public enableWafFailOpen?: boolean;

  // Whether the X-Forwarded-For header should preserve the source port that the client used to connect to the load balancer in `application` load balancers. Defaults to `false`.
  public enableXffClientPort?: boolean;

  // Subnet mapping block. See below. For Load Balancers of type `network` subnet mappings can only be added.
  public subnetMappings?: Array<alb_LoadBalancerSubnetMapping>;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  //
  public vpcId?: string;

  // DNS name of the load balancer.
  public dnsName?: string;

  // List of security group IDs to assign to the LB. Only valid for Load Balancers of type `application` or `network`. For load balancers of type `network` security groups cannot be added if none are currently present, and cannot all be removed once added. If either of these conditions are met, this will force a recreation of the resource.
  public securityGroups?: Array<string>;

  // List of subnet IDs to attach to the LB. For Load Balancers of type `network` subnets can only be added (see [Availability Zones](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#availability-zones)), deleting a subnet for load balancers of type `network` will force a recreation of the resource.
  public subnets?: Array<string>;

  // How the load balancer handles requests that might pose a security risk to an application due to HTTP desync. Valid values are `monitor`, `defensive` (default), `strictest`.
  public desyncMitigationMode?: string;

  // ID of the customer owned ipv4 pool to use for this load balancer.
  public customerOwnedIpv4Pool?: string;

  // Whether inbound security group rules are enforced for traffic originating from a PrivateLink. Only valid for Load Balancers of type `network`. The possible values are `on` and `off`.
  public enforceSecurityGroupInboundRulesOnPrivateLinkTraffic?: string;

  // If true, the LB will be internal. Defaults to `false`.
  public internal?: boolean;

  // Type of IP addresses used by the subnets for your load balancer. The possible values depend upon the load balancer type: `ipv4` (all load balancer types), `dualstack` (all load balancer types), and `dualstack-without-public-ipv4` (type `application` only).
  public ipAddressType?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        'preserveHostHeader',
        'Whether the Application Load Balancer should preserve the Host header in the HTTP request and send it to the target without any change. Defaults to `false`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'namePrefix',
        'Creates a unique name beginning with the specified prefix. Conflicts with `name`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'xffHeaderProcessingMode',
        'Determines how the load balancer modifies the `X-Forwarded-For` header in the HTTP request before sending the request to the target. The possible values are `append`, `preserve`, and `remove`. Only valid for Load Balancers of type `application`. The default is `append`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'idleTimeout',
        'Time in seconds that the connection is allowed to be idle. Only valid for Load Balancers of type `application`. Default: 60.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'internal',
        'If true, the LB will be internal. Defaults to `false`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the LB. This name must be unique within your AWS account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and must not begin or end with a hyphen. If not specified, this provider will autogenerate a name beginning with `tf-lb`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'connectionLogs',
        'Connection Logs block. See below. Only valid for Load Balancers of type `application`.',
        () => alb_LoadBalancerConnectionLogs_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'dnsRecordClientRoutingPolicy',
        'How traffic is distributed among the load balancer Availability Zones. Possible values are `any_availability_zone` (default), `availability_zone_affinity`, or `partial_availability_zone_affinity`. See   [Availability Zone DNS affinity](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#zonal-dns-affinity) for additional details. Only valid for `network` type load balancers.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enableTlsVersionAndCipherSuiteHeaders',
        'Whether the two headers (`x-amzn-tls-version` and `x-amzn-tls-cipher-suite`), which contain information about the negotiated TLS version and cipher suite, are added to the client request before sending it to the target. Only valid for Load Balancers of type `application`. Defaults to `false`',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enableWafFailOpen',
        'Whether to allow a WAF-enabled load balancer to route requests to targets if it is unable to forward the request to AWS WAF. Defaults to `false`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'desyncMitigationMode',
        'How the load balancer handles requests that might pose a security risk to an application due to HTTP desync. Valid values are `monitor`, `defensive` (default), `strictest`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'dropInvalidHeaderFields',
        'Whether HTTP headers with header fields that are not valid are removed by the load balancer (true) or routed to targets (false). The default is false. Elastic Load Balancing requires that message header names contain only alphanumeric characters and hyphens. Only valid for Load Balancers of type `application`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enableDeletionProtection',
        'If true, deletion of the load balancer will be disabled via the AWS API. This will prevent this provider from deleting the load balancer. Defaults to `false`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'clientKeepAlive',
        'Client keep alive value in seconds. The valid range is 60-604800 seconds. The default is 3600 seconds.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'securityGroups',
        'List of security group IDs to assign to the LB. Only valid for Load Balancers of type `application` or `network`. For load balancers of type `network` security groups cannot be added if none are currently present, and cannot all be removed once added. If either of these conditions are met, this will force a recreation of the resource.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'subnets',
        'List of subnet IDs to attach to the LB. For Load Balancers of type `network` subnets can only be added (see [Availability Zones](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#availability-zones)), deleting a subnet for load balancers of type `network` will force a recreation of the resource.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enableHttp2',
        'Whether HTTP/2 is enabled in `application` load balancers. Defaults to `true`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enableXffClientPort',
        'Whether the X-Forwarded-For header should preserve the source port that the client used to connect to the load balancer in `application` load balancers. Defaults to `false`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'enforceSecurityGroupInboundRulesOnPrivateLinkTraffic',
        'Whether inbound security group rules are enforced for traffic originating from a PrivateLink. Only valid for Load Balancers of type `network`. The possible values are `on` and `off`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'accessLogs',
        'Access Logs block. See below.',
        () => alb_LoadBalancerAccessLogs_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enableCrossZoneLoadBalancing',
        'If true, cross-zone load balancing of the load balancer will be enabled. For `network` and `gateway` type load balancers, this feature is disabled by default (`false`). For `application` load balancer this feature is always enabled (`true`) and cannot be disabled. Defaults to `false`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'subnetMappings',
        'Subnet mapping block. See below. For Load Balancers of type `network` subnet mappings can only be added.',
        () => alb_LoadBalancerSubnetMapping_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'customerOwnedIpv4Pool',
        'ID of the customer owned ipv4 pool to use for this load balancer.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'ipAddressType',
        'Type of IP addresses used by the subnets for your load balancer. The possible values depend upon the load balancer type: `ipv4` (all load balancer types), `dualstack` (all load balancer types), and `dualstack-without-public-ipv4` (type `application` only).',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'loadBalancerType',
        'Type of load balancer to create. Possible values are `application`, `gateway`, or `network`. The default value is `application`.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
