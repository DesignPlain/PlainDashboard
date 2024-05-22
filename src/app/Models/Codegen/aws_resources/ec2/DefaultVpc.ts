import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DefaultVpcArgs {
  //
  ipv6CidrBlock?: string;

  //
  enableNetworkAddressUsageMetrics?: boolean;

  // Whether destroying the resource deletes the default VPC. Default: `false`
  forceDestroy?: boolean;

  //
  enableDnsSupport?: boolean;

  //
  ipv6CidrBlockNetworkBorderGroup?: string;

  //
  ipv6IpamPoolId?: string;

  //
  ipv6NetmaskLength?: number;

  //
  tags?: Map<string, string>;

  //
  assignGeneratedIpv6CidrBlock?: boolean;

  //
  enableDnsHostnames?: boolean;
}
export class DefaultVpc extends Resource {
  // The primary IPv4 CIDR block for the VPC
  public cidrBlock?: string;

  //
  public tags?: Map<string, string>;

  //
  public enableDnsHostnames?: boolean;

  //
  public enableNetworkAddressUsageMetrics?: boolean;

  //
  public existingDefaultVpc?: boolean;

  //
  public assignGeneratedIpv6CidrBlock?: boolean;

  //
  public defaultNetworkAclId?: string;

  //
  public defaultRouteTableId?: string;

  //
  public defaultSecurityGroupId?: string;

  //
  public dhcpOptionsId?: string;

  //
  public tagsAll?: Map<string, string>;

  // The allowed tenancy of instances launched into the VPC
  public instanceTenancy?: string;

  //
  public ipv6AssociationId?: string;

  //
  public ipv6CidrBlock?: string;

  //
  public ipv6CidrBlockNetworkBorderGroup?: string;

  //
  public ipv6IpamPoolId?: string;

  //
  public arn?: string;

  // Whether destroying the resource deletes the default VPC. Default: `false`
  public forceDestroy?: boolean;

  //
  public ipv6NetmaskLength?: number;

  //
  public ownerId?: string;

  //
  public enableDnsSupport?: boolean;

  //
  public mainRouteTableId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "enableDnsHostnames",
        "",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ipv6CidrBlock",
        "",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableNetworkAddressUsageMetrics",
        "",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "forceDestroy",
        "Whether destroying the resource deletes the default VPC. Default: `false`",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "ipv6NetmaskLength",
        "",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "assignGeneratedIpv6CidrBlock",
        "",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableDnsSupport",
        "",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ipv6CidrBlockNetworkBorderGroup",
        "",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ipv6IpamPoolId",
        "",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
