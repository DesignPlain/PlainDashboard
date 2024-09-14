import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface DefaultSubnetArgs {
  //
  ipv6Native?: boolean;

  //
  mapCustomerOwnedIpOnLaunch?: boolean;

  //
  privateDnsHostnameTypeOnLaunch?: string;

  /*
is required
- The `availability_zone_id`, `cidr_block` and `vpc_id` arguments become computed attributes
- The default value for `map_public_ip_on_launch` is `true`

This resource supports the following additional arguments:
*/
  availabilityZone?: string;

  //
  customerOwnedIpv4Pool?: string;

  //
  enableResourceNameDnsARecordOnLaunch?: boolean;

  //
  enableResourceNameDnsAaaaRecordOnLaunch?: boolean;

  //
  ipv6CidrBlock?: string;

  //
  assignIpv6AddressOnCreation?: boolean;

  //
  enableDns64?: boolean;

  // Whether destroying the resource deletes the default subnet. Default: `false`
  forceDestroy?: boolean;

  //
  mapPublicIpOnLaunch?: boolean;

  //
  tags?: Map<string, string>;
}
export class DefaultSubnet extends DS_Resource {
  // Whether destroying the resource deletes the default subnet. Default: `false`
  public forceDestroy?: boolean;

  //
  public mapCustomerOwnedIpOnLaunch?: boolean;

  //
  public outpostArn?: string;

  //
  public tagsAll?: Map<string, string>;

  //
  public arn?: string;

  //
  public assignIpv6AddressOnCreation?: boolean;

  //
  public customerOwnedIpv4Pool?: string;

  //
  public enableLniAtDeviceIndex?: number;

  // The ID of the VPC the subnet is in
  public vpcId?: string;

  //
  public ipv6Native?: boolean;

  //
  public mapPublicIpOnLaunch?: boolean;

  //
  public ownerId?: string;

  //
  public privateDnsHostnameTypeOnLaunch?: string;

  /*
is required
- The `availability_zone_id`, `cidr_block` and `vpc_id` arguments become computed attributes
- The default value for `map_public_ip_on_launch` is `true`

This resource supports the following additional arguments:
*/
  public availabilityZone?: string;

  //
  public enableDns64?: boolean;

  //
  public existingDefaultSubnet?: boolean;

  //
  public ipv6CidrBlockAssociationId?: string;

  //
  public tags?: Map<string, string>;

  //
  public ipv6CidrBlock?: string;

  // The AZ ID of the subnet
  public availabilityZoneId?: string;

  // The IPv4 CIDR block assigned to the subnet
  public cidrBlock?: string;

  //
  public enableResourceNameDnsARecordOnLaunch?: boolean;

  //
  public enableResourceNameDnsAaaaRecordOnLaunch?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "availabilityZone",
        "is required\n* The `availability_zone_id`, `cidr_block` and `vpc_id` arguments become computed attributes\n* The default value for `map_public_ip_on_launch` is `true`\n\nThis resource supports the following additional arguments:",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableResourceNameDnsAaaaRecordOnLaunch",
        "",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "assignIpv6AddressOnCreation",
        "",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "forceDestroy",
        "Whether destroying the resource deletes the default subnet. Default: `false`",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "mapCustomerOwnedIpOnLaunch",
        "",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "privateDnsHostnameTypeOnLaunch",
        "",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableResourceNameDnsARecordOnLaunch",
        "",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ipv6CidrBlock",
        "",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableDns64",
        "",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "mapPublicIpOnLaunch",
        "",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "ipv6Native",
        "",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "customerOwnedIpv4Pool",
        "",
        () => [],
        false,
        false,
      ),
    ];
  }
}
