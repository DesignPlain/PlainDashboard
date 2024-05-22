import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface VpcIpv4CidrBlockAssociationArgs {
  // The IPv4 CIDR block for the VPC. CIDR can be explicitly set or it can be derived from IPAM using `ipv4_netmask_length`.
  cidrBlock?: string;

  // The ID of an IPv4 IPAM pool you want to use for allocating this VPC's CIDR. IPAM is a VPC feature that you can use to automate your IP address management workflows including assigning, tracking, troubleshooting, and auditing IP addresses across AWS Regions and accounts. Using IPAM you can monitor IP address usage throughout your AWS Organization.
  ipv4IpamPoolId?: string;

  // The netmask length of the IPv4 CIDR you want to allocate to this VPC. Requires specifying a `ipv4_ipam_pool_id`.
  ipv4NetmaskLength?: number;

  // The ID of the VPC to make the association with.
  vpcId?: string;
}
export class VpcIpv4CidrBlockAssociation extends Resource {
  // The ID of the VPC to make the association with.
  public vpcId?: string;

  // The IPv4 CIDR block for the VPC. CIDR can be explicitly set or it can be derived from IPAM using `ipv4_netmask_length`.
  public cidrBlock?: string;

  // The ID of an IPv4 IPAM pool you want to use for allocating this VPC's CIDR. IPAM is a VPC feature that you can use to automate your IP address management workflows including assigning, tracking, troubleshooting, and auditing IP addresses across AWS Regions and accounts. Using IPAM you can monitor IP address usage throughout your AWS Organization.
  public ipv4IpamPoolId?: string;

  // The netmask length of the IPv4 CIDR you want to allocate to this VPC. Requires specifying a `ipv4_ipam_pool_id`.
  public ipv4NetmaskLength?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ipv4IpamPoolId",
        "The ID of an IPv4 IPAM pool you want to use for allocating this VPC's CIDR. IPAM is a VPC feature that you can use to automate your IP address management workflows including assigning, tracking, troubleshooting, and auditing IP addresses across AWS Regions and accounts. Using IPAM you can monitor IP address usage throughout your AWS Organization.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "ipv4NetmaskLength",
        "The netmask length of the IPv4 CIDR you want to allocate to this VPC. Requires specifying a `ipv4_ipam_pool_id`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpcId",
        "The ID of the VPC to make the association with.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "cidrBlock",
        "The IPv4 CIDR block for the VPC. CIDR can be explicitly set or it can be derived from IPAM using `ipv4_netmask_length`.",
        [],
        false,
        true,
      ),
    ];
  }
}
