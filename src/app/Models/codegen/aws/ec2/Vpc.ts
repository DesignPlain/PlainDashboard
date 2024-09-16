import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface VpcArgs {
  // A boolean flag to enable/disable DNS support in the VPC. Defaults to true.
  enableDnsSupport?: boolean;

  // Indicates whether Network Address Usage metrics are enabled for your VPC. Defaults to false.
  enableNetworkAddressUsageMetrics?: boolean;

  // A tenancy option for instances launched into the VPC. Default is `default`, which ensures that EC2 instances launched in this VPC use the EC2 instance tenancy attribute specified when the EC2 instance is launched. The only other option is `dedicated`, which ensures that EC2 instances launched in this VPC are run on dedicated tenancy instances regardless of the tenancy attribute specified at launch. This has a dedicated per region fee of $2 per hour, plus an hourly per instance usage fee.
  instanceTenancy?: string;

  // The ID of an IPv4 IPAM pool you want to use for allocating this VPC's CIDR. IPAM is a VPC feature that you can use to automate your IP address management workflows including assigning, tracking, troubleshooting, and auditing IP addresses across AWS Regions and accounts. Using IPAM you can monitor IP address usage throughout your AWS Organization.
  ipv4IpamPoolId?: string;

  // The netmask length of the IPv4 CIDR you want to allocate to this VPC. Requires specifying a `ipv4_ipam_pool_id`.
  ipv4NetmaskLength?: number;

  // By default when an IPv6 CIDR is assigned to a VPC a default ipv6_cidr_block_network_border_group will be set to the region of the VPC. This can be changed to restrict advertisement of public addresses to specific Network Border Groups such as LocalZones.
  ipv6CidrBlockNetworkBorderGroup?: string;

  // Netmask length to request from IPAM Pool. Conflicts with `ipv6_cidr_block`. This can be omitted if IPAM pool as a `allocation_default_netmask_length` set. Valid values are from `44` to `60` in increments of 4.
  ipv6NetmaskLength?: number;

  // Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. You cannot specify the range of IP addresses, or the size of the CIDR block. Default is `false`. Conflicts with `ipv6_ipam_pool_id`
  assignGeneratedIpv6CidrBlock?: boolean;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // A boolean flag to enable/disable DNS hostnames in the VPC. Defaults false.
  enableDnsHostnames?: boolean;

  // IPv6 CIDR block to request from an IPAM Pool. Can be set explicitly or derived from IPAM using `ipv6_netmask_length`.
  ipv6CidrBlock?: string;

  // IPAM Pool ID for a IPv6 pool. Conflicts with `assign_generated_ipv6_cidr_block`.
  ipv6IpamPoolId?: string;

  // The IPv4 CIDR block for the VPC. CIDR can be explicitly set or it can be derived from IPAM using `ipv4_netmask_length`.
  cidrBlock?: string;
}
export class Vpc extends DS_Resource {
  // IPAM Pool ID for a IPv6 pool. Conflicts with `assign_generated_ipv6_cidr_block`.
  public ipv6IpamPoolId?: string;

  /*
The ID of the main route table associated with
this VPC. Note that you can change a VPC's main route table by using an
`aws.ec2.MainRouteTableAssociation`.
*/
  public mainRouteTableId?: string;

  // The ID of the AWS account that owns the VPC.
  public ownerId?: string;

  // Amazon Resource Name (ARN) of VPC
  public arn?: string;

  // The ID of the security group created by default on VPC creation
  public defaultSecurityGroupId?: string;

  // The ID of an IPv4 IPAM pool you want to use for allocating this VPC's CIDR. IPAM is a VPC feature that you can use to automate your IP address management workflows including assigning, tracking, troubleshooting, and auditing IP addresses across AWS Regions and accounts. Using IPAM you can monitor IP address usage throughout your AWS Organization.
  public ipv4IpamPoolId?: string;

  // The association ID for the IPv6 CIDR block.
  public ipv6AssociationId?: string;

  // Netmask length to request from IPAM Pool. Conflicts with `ipv6_cidr_block`. This can be omitted if IPAM pool as a `allocation_default_netmask_length` set. Valid values are from `44` to `60` in increments of 4.
  public ipv6NetmaskLength?: number;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ID of the route table created by default on VPC creation
  public defaultRouteTableId?: string;

  // DHCP options id of the desired VPC.
  public dhcpOptionsId?: string;

  // Indicates whether Network Address Usage metrics are enabled for your VPC. Defaults to false.
  public enableNetworkAddressUsageMetrics?: boolean;

  // The netmask length of the IPv4 CIDR you want to allocate to this VPC. Requires specifying a `ipv4_ipam_pool_id`.
  public ipv4NetmaskLength?: number;

  // The ID of the network ACL created by default on VPC creation
  public defaultNetworkAclId?: string;

  // A boolean flag to enable/disable DNS hostnames in the VPC. Defaults false.
  public enableDnsHostnames?: boolean;

  // A boolean flag to enable/disable DNS support in the VPC. Defaults to true.
  public enableDnsSupport?: boolean;

  // By default when an IPv6 CIDR is assigned to a VPC a default ipv6_cidr_block_network_border_group will be set to the region of the VPC. This can be changed to restrict advertisement of public addresses to specific Network Border Groups such as LocalZones.
  public ipv6CidrBlockNetworkBorderGroup?: string;

  // Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. You cannot specify the range of IP addresses, or the size of the CIDR block. Default is `false`. Conflicts with `ipv6_ipam_pool_id`
  public assignGeneratedIpv6CidrBlock?: boolean;

  // The IPv4 CIDR block for the VPC. CIDR can be explicitly set or it can be derived from IPAM using `ipv4_netmask_length`.
  public cidrBlock?: string;

  // A tenancy option for instances launched into the VPC. Default is `default`, which ensures that EC2 instances launched in this VPC use the EC2 instance tenancy attribute specified when the EC2 instance is launched. The only other option is `dedicated`, which ensures that EC2 instances launched in this VPC are run on dedicated tenancy instances regardless of the tenancy attribute specified at launch. This has a dedicated per region fee of $2 per hour, plus an hourly per instance usage fee.
  public instanceTenancy?: string;

  // IPv6 CIDR block to request from an IPAM Pool. Can be set explicitly or derived from IPAM using `ipv6_netmask_length`.
  public ipv6CidrBlock?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        'ipv6NetmaskLength',
        'Netmask length to request from IPAM Pool. Conflicts with `ipv6_cidr_block`. This can be omitted if IPAM pool as a `allocation_default_netmask_length` set. Valid values are from `44` to `60` in increments of 4.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'assignGeneratedIpv6CidrBlock',
        'Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. You cannot specify the range of IP addresses, or the size of the CIDR block. Default is `false`. Conflicts with `ipv6_ipam_pool_id`',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enableNetworkAddressUsageMetrics',
        'Indicates whether Network Address Usage metrics are enabled for your VPC. Defaults to false.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'instanceTenancy',
        'A tenancy option for instances launched into the VPC. Default is `default`, which ensures that EC2 instances launched in this VPC use the EC2 instance tenancy attribute specified when the EC2 instance is launched. The only other option is `dedicated`, which ensures that EC2 instances launched in this VPC are run on dedicated tenancy instances regardless of the tenancy attribute specified at launch. This has a dedicated per region fee of $2 per hour, plus an hourly per instance usage fee.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'ipv4IpamPoolId',
        "The ID of an IPv4 IPAM pool you want to use for allocating this VPC's CIDR. IPAM is a VPC feature that you can use to automate your IP address management workflows including assigning, tracking, troubleshooting, and auditing IP addresses across AWS Regions and accounts. Using IPAM you can monitor IP address usage throughout your AWS Organization.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'ipv4NetmaskLength',
        'The netmask length of the IPv4 CIDR you want to allocate to this VPC. Requires specifying a `ipv4_ipam_pool_id`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'ipv6CidrBlockNetworkBorderGroup',
        'By default when an IPv6 CIDR is assigned to a VPC a default ipv6_cidr_block_network_border_group will be set to the region of the VPC. This can be changed to restrict advertisement of public addresses to specific Network Border Groups such as LocalZones.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enableDnsHostnames',
        'A boolean flag to enable/disable DNS hostnames in the VPC. Defaults false.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'ipv6CidrBlock',
        'IPv6 CIDR block to request from an IPAM Pool. Can be set explicitly or derived from IPAM using `ipv6_netmask_length`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enableDnsSupport',
        'A boolean flag to enable/disable DNS support in the VPC. Defaults to true.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'cidrBlock',
        'The IPv4 CIDR block for the VPC. CIDR can be explicitly set or it can be derived from IPAM using `ipv4_netmask_length`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'ipv6IpamPoolId',
        'IPAM Pool ID for a IPv6 pool. Conflicts with `assign_generated_ipv6_cidr_block`.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
