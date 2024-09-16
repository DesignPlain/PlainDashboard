import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface DefaultVpcArgs {
  // Whether destroying the resource deletes the default VPC. Default: `false`
  forceDestroy?: boolean;

  //
  ipv6CidrBlock?: string;

  //
  ipv6NetmaskLength?: number;

  //
  tags?: Map<string, string>;

  //
  assignGeneratedIpv6CidrBlock?: boolean;

  //
  enableDnsSupport?: boolean;

  //
  enableNetworkAddressUsageMetrics?: boolean;

  //
  enableDnsHostnames?: boolean;

  //
  ipv6CidrBlockNetworkBorderGroup?: string;

  //
  ipv6IpamPoolId?: string;
}
export class DefaultVpc extends DS_Resource {
  //
  public enableDnsHostnames?: boolean;

  //
  public ipv6AssociationId?: string;

  //
  public ipv6CidrBlock?: string;

  //
  public dhcpOptionsId?: string;

  // The primary IPv4 CIDR block for the VPC
  public cidrBlock?: string;

  //
  public defaultRouteTableId?: string;

  // The allowed tenancy of instances launched into the VPC
  public instanceTenancy?: string;

  //
  public ipv6NetmaskLength?: number;

  //
  public arn?: string;

  //
  public defaultSecurityGroupId?: string;

  //
  public enableDnsSupport?: boolean;

  //
  public enableNetworkAddressUsageMetrics?: boolean;

  //
  public existingDefaultVpc?: boolean;

  // Whether destroying the resource deletes the default VPC. Default: `false`
  public forceDestroy?: boolean;

  //
  public ownerId?: string;

  //
  public defaultNetworkAclId?: string;

  //
  public ipv6CidrBlockNetworkBorderGroup?: string;

  //
  public ipv6IpamPoolId?: string;

  //
  public mainRouteTableId?: string;

  //
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  //
  public assignGeneratedIpv6CidrBlock?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'ipv6CidrBlock',
        '',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'ipv6NetmaskLength',
        '',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        '',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'assignGeneratedIpv6CidrBlock',
        '',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'ipv6CidrBlockNetworkBorderGroup',
        '',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'forceDestroy',
        'Whether destroying the resource deletes the default VPC. Default: `false`',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enableNetworkAddressUsageMetrics',
        '',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enableDnsHostnames',
        '',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'ipv6IpamPoolId',
        '',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enableDnsSupport',
        '',
        () => [],
        false,
        false,
      ),
    ];
  }
}
