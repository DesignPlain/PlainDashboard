import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface VpcIpv6CidrBlockAssociationArgs {
  // - (Optional) The ID of an IPv6 IPAM pool you want to use for allocating this VPC's CIDR. IPAM is a VPC feature that you can use to automate your IP address management workflows including assigning, tracking, troubleshooting, and auditing IP addresses across AWS Regions and accounts. Conflict with `assign_generated_ipv6_cidr_block` and `ipv6_ipam_pool_id`.
  ipv6IpamPoolId?: string;

  // The netmask length of the IPv6 CIDR you want to allocate to this VPC. Requires specifying a `ipv6_ipam_pool_id`. This parameter is optional if the IPAM pool has `allocation_default_netmask` set, otherwise it or `ipv6_cidr_block` are required. Conflicts with `assign_generated_ipv6_cidr_block` and `ipv6_ipam_pool_id`.
  ipv6NetmaskLength?: number;

  // The  ID of an IPv6 address pool from which to allocate the IPv6 CIDR block. Conflicts with `ipv6_pam_pool_id`, `ipv6_pool`.
  ipv6Pool?: string;

  // The ID of the VPC to make the association with.
  vpcId?: string;

  // Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. You cannot specify the range of IPv6 addresses, or the size of the CIDR block. Default is `false`. Conflicts with `ipv6_pam_pool_id`, `ipv6_pool`, `ipv6_cidr_block` and `ipv6_netmask_length`.
  assignGeneratedIpv6CidrBlock?: boolean;

  // The IPv6 CIDR block for the VPC. CIDR can be explicitly set or it can be derived from IPAM using `ipv6_netmask_length`. This parameter is required if `ipv6_netmask_length` is not set and the IPAM pool does not have `allocation_default_netmask` set. Conflicts with `assign_generated_ipv6_cidr_block`.
  ipv6CidrBlock?: string;
}
export class VpcIpv6CidrBlockAssociation extends DS_Resource {
  // The netmask length of the IPv6 CIDR you want to allocate to this VPC. Requires specifying a `ipv6_ipam_pool_id`. This parameter is optional if the IPAM pool has `allocation_default_netmask` set, otherwise it or `ipv6_cidr_block` are required. Conflicts with `assign_generated_ipv6_cidr_block` and `ipv6_ipam_pool_id`.
  public ipv6NetmaskLength?: number;

  // The  ID of an IPv6 address pool from which to allocate the IPv6 CIDR block. Conflicts with `ipv6_pam_pool_id`, `ipv6_pool`.
  public ipv6Pool?: string;

  // The ID of the VPC to make the association with.
  public vpcId?: string;

  // Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. You cannot specify the range of IPv6 addresses, or the size of the CIDR block. Default is `false`. Conflicts with `ipv6_pam_pool_id`, `ipv6_pool`, `ipv6_cidr_block` and `ipv6_netmask_length`.
  public assignGeneratedIpv6CidrBlock?: boolean;

  // The IPv6 CIDR block for the VPC. CIDR can be explicitly set or it can be derived from IPAM using `ipv6_netmask_length`. This parameter is required if `ipv6_netmask_length` is not set and the IPAM pool does not have `allocation_default_netmask` set. Conflicts with `assign_generated_ipv6_cidr_block`.
  public ipv6CidrBlock?: string;

  // - (Optional) The ID of an IPv6 IPAM pool you want to use for allocating this VPC's CIDR. IPAM is a VPC feature that you can use to automate your IP address management workflows including assigning, tracking, troubleshooting, and auditing IP addresses across AWS Regions and accounts. Conflict with `assign_generated_ipv6_cidr_block` and `ipv6_ipam_pool_id`.
  public ipv6IpamPoolId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'ipv6CidrBlock',
        'The IPv6 CIDR block for the VPC. CIDR can be explicitly set or it can be derived from IPAM using `ipv6_netmask_length`. This parameter is required if `ipv6_netmask_length` is not set and the IPAM pool does not have `allocation_default_netmask` set. Conflicts with `assign_generated_ipv6_cidr_block`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'ipv6IpamPoolId',
        "- (Optional) The ID of an IPv6 IPAM pool you want to use for allocating this VPC's CIDR. IPAM is a VPC feature that you can use to automate your IP address management workflows including assigning, tracking, troubleshooting, and auditing IP addresses across AWS Regions and accounts. Conflict with `assign_generated_ipv6_cidr_block` and `ipv6_ipam_pool_id`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'ipv6NetmaskLength',
        'The netmask length of the IPv6 CIDR you want to allocate to this VPC. Requires specifying a `ipv6_ipam_pool_id`. This parameter is optional if the IPAM pool has `allocation_default_netmask` set, otherwise it or `ipv6_cidr_block` are required. Conflicts with `assign_generated_ipv6_cidr_block` and `ipv6_ipam_pool_id`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'ipv6Pool',
        'The  ID of an IPv6 address pool from which to allocate the IPv6 CIDR block. Conflicts with `ipv6_pam_pool_id`, `ipv6_pool`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'vpcId',
        'The ID of the VPC to make the association with.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'assignGeneratedIpv6CidrBlock',
        'Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. You cannot specify the range of IPv6 addresses, or the size of the CIDR block. Default is `false`. Conflicts with `ipv6_pam_pool_id`, `ipv6_pool`, `ipv6_cidr_block` and `ipv6_netmask_length`.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
