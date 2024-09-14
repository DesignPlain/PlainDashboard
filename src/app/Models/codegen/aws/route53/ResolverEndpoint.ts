import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  route53_ResolverEndpointIpAddress,
  route53_ResolverEndpointIpAddress_GetTypes,
} from "../types/route53_ResolverEndpointIpAddress";

export interface ResolverEndpointArgs {
  /*
The subnets and IP addresses in your VPC that you want DNS queries to pass through on the way from your VPCs
to your network (for outbound endpoints) or on the way from your network to your VPCs (for inbound endpoints). Described below.
*/
  ipAddresses?: Array<route53_ResolverEndpointIpAddress>;

  // The friendly name of the Route 53 Resolver endpoint.
  name?: string;

  // The protocols you want to use for the Route 53 Resolver endpoint. Valid values: `DoH`, `Do53`, `DoH-FIPS`.
  protocols?: Array<string>;

  // The Route 53 Resolver endpoint IP address type. Valid values: `IPV4`, `IPV6`, `DUALSTACK`.
  resolverEndpointType?: string;

  // The ID of one or more security groups that you want to use to control access to this VPC.
  securityGroupIds?: Array<string>;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
The direction of DNS queries to or from the Route 53 Resolver endpoint.
Valid values are `INBOUND` (resolver forwards DNS queries to the DNS service for a VPC from your network or another VPC)
or `OUTBOUND` (resolver forwards DNS queries from the DNS service for a VPC to your network or another VPC).
*/
  direction?: string;
}
export class ResolverEndpoint extends DS_Resource {
  /*
The subnets and IP addresses in your VPC that you want DNS queries to pass through on the way from your VPCs
to your network (for outbound endpoints) or on the way from your network to your VPCs (for inbound endpoints). Described below.
*/
  public ipAddresses?: Array<route53_ResolverEndpointIpAddress>;

  // The Route 53 Resolver endpoint IP address type. Valid values: `IPV4`, `IPV6`, `DUALSTACK`.
  public resolverEndpointType?: string;

  // The ID of one or more security groups that you want to use to control access to this VPC.
  public securityGroupIds?: Array<string>;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the Route 53 Resolver endpoint.
  public arn?: string;

  /*
The direction of DNS queries to or from the Route 53 Resolver endpoint.
Valid values are `INBOUND` (resolver forwards DNS queries to the DNS service for a VPC from your network or another VPC)
or `OUTBOUND` (resolver forwards DNS queries from the DNS service for a VPC to your network or another VPC).
*/
  public direction?: string;

  // The ID of the VPC that you want to create the resolver endpoint in.
  public hostVpcId?: string;

  // The friendly name of the Route 53 Resolver endpoint.
  public name?: string;

  // The protocols you want to use for the Route 53 Resolver endpoint. Valid values: `DoH`, `Do53`, `DoH-FIPS`.
  public protocols?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "resolverEndpointType",
        "The Route 53 Resolver endpoint IP address type. Valid values: `IPV4`, `IPV6`, `DUALSTACK`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "securityGroupIds",
        "The ID of one or more security groups that you want to use to control access to this VPC.",
        () => InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "direction",
        "The direction of DNS queries to or from the Route 53 Resolver endpoint.\nValid values are `INBOUND` (resolver forwards DNS queries to the DNS service for a VPC from your network or another VPC)\nor `OUTBOUND` (resolver forwards DNS queries from the DNS service for a VPC to your network or another VPC).",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ipAddresses",
        "The subnets and IP addresses in your VPC that you want DNS queries to pass through on the way from your VPCs\nto your network (for outbound endpoints) or on the way from your network to your VPCs (for inbound endpoints). Described below.",
        () => route53_ResolverEndpointIpAddress_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The friendly name of the Route 53 Resolver endpoint.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "protocols",
        "The protocols you want to use for the Route 53 Resolver endpoint. Valid values: `DoH`, `Do53`, `DoH-FIPS`.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
