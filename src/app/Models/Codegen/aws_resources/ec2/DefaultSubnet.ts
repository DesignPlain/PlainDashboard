import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface DefaultSubnetArgs {
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
  enableDns64?: boolean;

  //
  enableResourceNameDnsARecordOnLaunch?: boolean;

  //
  enableResourceNameDnsAaaaRecordOnLaunch?: boolean;

  // Whether destroying the resource deletes the default subnet. Default: `false`
  forceDestroy?: boolean;

  //
  mapCustomerOwnedIpOnLaunch?: boolean;

  //
  mapPublicIpOnLaunch?: boolean;

  //
  tags?: Map<string, string>;

  //
  assignIpv6AddressOnCreation?: boolean;

  //
  ipv6CidrBlock?: string;

  //
  ipv6Native?: boolean;

  //
  privateDnsHostnameTypeOnLaunch?: string;
}
export class DefaultSubnet extends Resource {
  //
  public ipv6Native?: boolean;

  //
  public ownerId?: string;

  //
  public assignIpv6AddressOnCreation?: boolean;

  // The AZ ID of the subnet
  public availabilityZoneId?: string;

  //
  public customerOwnedIpv4Pool?: string;

  //
  public enableLniAtDeviceIndex?: number;

  // Whether destroying the resource deletes the default subnet. Default: `false`
  public forceDestroy?: boolean;

  //
  public ipv6CidrBlock?: string;

  //
  public enableDns64?: boolean;

  //
  public enableResourceNameDnsARecordOnLaunch?: boolean;

  //
  public privateDnsHostnameTypeOnLaunch?: string;

  //
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  /*
is required
- The `availability_zone_id`, `cidr_block` and `vpc_id` arguments become computed attributes
- The default value for `map_public_ip_on_launch` is `true`

This resource supports the following additional arguments:
*/
  public availabilityZone?: string;

  //
  public existingDefaultSubnet?: boolean;

  //
  public mapCustomerOwnedIpOnLaunch?: boolean;

  //
  public mapPublicIpOnLaunch?: boolean;

  //
  public outpostArn?: string;

  // The ID of the VPC the subnet is in
  public vpcId?: string;

  //
  public arn?: string;

  // The IPv4 CIDR block assigned to the subnet
  public cidrBlock?: string;

  //
  public enableResourceNameDnsAaaaRecordOnLaunch?: boolean;

  //
  public ipv6CidrBlockAssociationId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "availabilityZone",
        "is required\n* The `availability_zone_id`, `cidr_block` and `vpc_id` arguments become computed attributes\n* The default value for `map_public_ip_on_launch` is `true`\n\nThis resource supports the following additional arguments:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "customerOwnedIpv4Pool",
        "",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "forceDestroy",
        "Whether destroying the resource deletes the default subnet. Default: `false`",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "mapCustomerOwnedIpOnLaunch",
        "",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "assignIpv6AddressOnCreation",
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
        InputType.String,
        "privateDnsHostnameTypeOnLaunch",
        "",
        [],
        false,
        false,
      ),
      new DynamicUIProps(InputType.Bool, "enableDns64", "", [], false, false),
      new DynamicUIProps(
        InputType.Bool,
        "enableResourceNameDnsARecordOnLaunch",
        "",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableResourceNameDnsAaaaRecordOnLaunch",
        "",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "mapPublicIpOnLaunch",
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
      new DynamicUIProps(InputType.Bool, "ipv6Native", "", [], false, true),
    ];
  }
}
