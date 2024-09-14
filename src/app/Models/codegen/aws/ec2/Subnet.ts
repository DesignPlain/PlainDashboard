import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface SubnetArgs {
  /*
Specify true to indicate
that network interfaces created in the specified subnet should be
assigned an IPv6 address. Default is `false`
*/
  assignIpv6AddressOnCreation?: boolean;

  // AZ ID of the subnet. This argument is not supported in all regions or partitions. If necessary, use `availability_zone` instead.
  availabilityZoneId?: string;

  // Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations. Default: `false`.
  enableDns64?: boolean;

  // Indicates whether to create an IPv6-only subnet. Default: `false`.
  ipv6Native?: boolean;

  // AZ for the subnet.
  availabilityZone?: string;

  // The IPv4 CIDR block for the subnet.
  cidrBlock?: string;

  // The Amazon Resource Name (ARN) of the Outpost.
  outpostArn?: string;

  // Indicates the device position for local network interfaces in this subnet. For example, 1 indicates local network interfaces in this subnet are the secondary network interface (eth1). A local network interface cannot be the primary network interface (eth0).
  enableLniAtDeviceIndex?: number;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The type of hostnames to assign to instances in the subnet at launch. For IPv6-only subnets, an instance DNS name must be based on the instance ID. For dual-stack and IPv4-only subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. Valid values: `ip-name`, `resource-name`.
  privateDnsHostnameTypeOnLaunch?: string;

  // The VPC ID.
  vpcId?: string;

  // The customer owned IPv4 address pool. Typically used with the `map_customer_owned_ip_on_launch` argument. The `outpost_arn` argument must be specified when configured.
  customerOwnedIpv4Pool?: string;

  // Indicates whether to respond to DNS queries for instance hostnames with DNS A records. Default: `false`.
  enableResourceNameDnsARecordOnLaunch?: boolean;

  // Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records. Default: `false`.
  enableResourceNameDnsAaaaRecordOnLaunch?: boolean;

  /*
The IPv6 network range for the subnet,
in CIDR notation. The subnet size must use a /64 prefix length.
*/
  ipv6CidrBlock?: string;

  // Specify `true` to indicate that network interfaces created in the subnet should be assigned a customer owned IP address. The `customer_owned_ipv4_pool` and `outpost_arn` arguments must be specified when set to `true`. Default is `false`.
  mapCustomerOwnedIpOnLaunch?: boolean;

  /*
Specify true to indicate
that instances launched into the subnet should be assigned
a public IP address. Default is `false`.
*/
  mapPublicIpOnLaunch?: boolean;
}
export class Subnet extends DS_Resource {
  // The customer owned IPv4 address pool. Typically used with the `map_customer_owned_ip_on_launch` argument. The `outpost_arn` argument must be specified when configured.
  public customerOwnedIpv4Pool?: string;

  // The association ID for the IPv6 CIDR block.
  public ipv6CidrBlockAssociationId?: string;

  // Specify `true` to indicate that network interfaces created in the subnet should be assigned a customer owned IP address. The `customer_owned_ipv4_pool` and `outpost_arn` arguments must be specified when set to `true`. Default is `false`.
  public mapCustomerOwnedIpOnLaunch?: boolean;

  // The type of hostnames to assign to instances in the subnet at launch. For IPv6-only subnets, an instance DNS name must be based on the instance ID. For dual-stack and IPv4-only subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. Valid values: `ip-name`, `resource-name`.
  public privateDnsHostnameTypeOnLaunch?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The ARN of the subnet.
  public arn?: string;

  /*
Specify true to indicate
that network interfaces created in the specified subnet should be
assigned an IPv6 address. Default is `false`
*/
  public assignIpv6AddressOnCreation?: boolean;

  // AZ for the subnet.
  public availabilityZone?: string;

  // Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations. Default: `false`.
  public enableDns64?: boolean;

  // Indicates whether to respond to DNS queries for instance hostnames with DNS A records. Default: `false`.
  public enableResourceNameDnsARecordOnLaunch?: boolean;

  // Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records. Default: `false`.
  public enableResourceNameDnsAaaaRecordOnLaunch?: boolean;

  /*
The IPv6 network range for the subnet,
in CIDR notation. The subnet size must use a /64 prefix length.
*/
  public ipv6CidrBlock?: string;

  // The ID of the AWS account that owns the subnet.
  public ownerId?: string;

  // Indicates the device position for local network interfaces in this subnet. For example, 1 indicates local network interfaces in this subnet are the secondary network interface (eth1). A local network interface cannot be the primary network interface (eth0).
  public enableLniAtDeviceIndex?: number;

  // Indicates whether to create an IPv6-only subnet. Default: `false`.
  public ipv6Native?: boolean;

  /*
Specify true to indicate
that instances launched into the subnet should be assigned
a public IP address. Default is `false`.
*/
  public mapPublicIpOnLaunch?: boolean;

  // The Amazon Resource Name (ARN) of the Outpost.
  public outpostArn?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The VPC ID.
  public vpcId?: string;

  // AZ ID of the subnet. This argument is not supported in all regions or partitions. If necessary, use `availability_zone` instead.
  public availabilityZoneId?: string;

  // The IPv4 CIDR block for the subnet.
  public cidrBlock?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "customerOwnedIpv4Pool",
        "The customer owned IPv4 address pool. Typically used with the `map_customer_owned_ip_on_launch` argument. The `outpost_arn` argument must be specified when configured.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "mapPublicIpOnLaunch",
        "Specify true to indicate\nthat instances launched into the subnet should be assigned\na public IP address. Default is `false`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "privateDnsHostnameTypeOnLaunch",
        "The type of hostnames to assign to instances in the subnet at launch. For IPv6-only subnets, an instance DNS name must be based on the instance ID. For dual-stack and IPv4-only subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. Valid values: `ip-name`, `resource-name`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableResourceNameDnsAaaaRecordOnLaunch",
        "Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records. Default: `false`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ipv6CidrBlock",
        "The IPv6 network range for the subnet,\nin CIDR notation. The subnet size must use a /64 prefix length.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "assignIpv6AddressOnCreation",
        "Specify true to indicate\nthat network interfaces created in the specified subnet should be\nassigned an IPv6 address. Default is `false`",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "availabilityZoneId",
        "AZ ID of the subnet. This argument is not supported in all regions or partitions. If necessary, use `availability_zone` instead.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "ipv6Native",
        "Indicates whether to create an IPv6-only subnet. Default: `false`.",
        () => [],
        false,
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
        InputType.Number,
        "enableLniAtDeviceIndex",
        "Indicates the device position for local network interfaces in this subnet. For example, 1 indicates local network interfaces in this subnet are the secondary network interface (eth1). A local network interface cannot be the primary network interface (eth0).",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpcId",
        "The VPC ID.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "mapCustomerOwnedIpOnLaunch",
        "Specify `true` to indicate that network interfaces created in the subnet should be assigned a customer owned IP address. The `customer_owned_ipv4_pool` and `outpost_arn` arguments must be specified when set to `true`. Default is `false`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableResourceNameDnsARecordOnLaunch",
        "Indicates whether to respond to DNS queries for instance hostnames with DNS A records. Default: `false`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableDns64",
        "Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations. Default: `false`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "availabilityZone",
        "AZ for the subnet.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "cidrBlock",
        "The IPv4 CIDR block for the subnet.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "outpostArn",
        "The Amazon Resource Name (ARN) of the Outpost.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
