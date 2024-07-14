import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  ec2_NetworkInterfaceAttachment,
  ec2_NetworkInterfaceAttachment_GetTypes,
} from "../types/ec2_NetworkInterfaceAttachment";

export interface NetworkInterfaceArgs {
  // Number of IPv4 prefixes that AWS automatically assigns to the network interface.
  ipv4PrefixCount?: number;

  // Number of IPv6 prefixes that AWS automatically assigns to the network interface.
  ipv6PrefixCount?: number;

  // List of private IPs to assign to the ENI in sequential order. Requires setting `private_ip_list_enabled` to `true`.
  privateIpLists?: Array<string>;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // List of private IPs to assign to the ENI in sequential order.
  ipv6AddressLists?: Array<string>;

  // One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet. Addresses are assigned without regard to order. You can't use this option if you're specifying `ipv6_address_count`.
  ipv6Addresses?: Array<string>;

  //
  privateIp?: string;

  // List of private IPs to assign to the ENI without regard to order.
  privateIps?: Array<string>;

  // Whether to enable source destination checking for the ENI. Default true.
  sourceDestCheck?: boolean;

  /*
Subnet ID to create the ENI in.

The following arguments are optional:
*/
  subnetId?: string;

  // Description for the network interface.
  description?: string;

  // Type of network interface to create. Set to `efa` for Elastic Fabric Adapter. Changing `interface_type` will cause the resource to be destroyed and re-created.
  interfaceType?: string;

  // One or more IPv4 prefixes assigned to the network interface.
  ipv4Prefixes?: Array<string>;

  // Whether `ipv6_address_list` is allowed and controls the IPs to assign to the ENI and `ipv6_addresses` and `ipv6_address_count` become read-only. Default false.
  ipv6AddressListEnabled?: boolean;

  // One or more IPv6 prefixes assigned to the network interface.
  ipv6Prefixes?: Array<string>;

  // Whether `private_ip_list` is allowed and controls the IPs to assign to the ENI and `private_ips` and `private_ips_count` become read-only. Default false.
  privateIpListEnabled?: boolean;

  // List of security group IDs to assign to the ENI.
  securityGroups?: Array<string>;

  // Configuration block to define the attachment of the ENI. See Attachment below for more details!
  attachments?: Array<ec2_NetworkInterfaceAttachment>;

  // Number of IPv6 addresses to assign to a network interface. You can't use this option if specifying specific `ipv6_addresses`. If your subnet has the AssignIpv6AddressOnCreation attribute set to `true`, you can specify `0` to override this setting.
  ipv6AddressCount?: number;

  // Number of secondary private IPs to assign to the ENI. The total number of private IPs will be 1 + `private_ips_count`, as a primary private IP will be assiged to an ENI by default.
  privateIpsCount?: number;
}
export class NetworkInterface extends Resource {
  // ARN of the network interface.
  public arn?: string;

  // Number of IPv4 prefixes that AWS automatically assigns to the network interface.
  public ipv4PrefixCount?: number;

  // One or more IPv4 prefixes assigned to the network interface.
  public ipv4Prefixes?: Array<string>;

  // Number of IPv6 addresses to assign to a network interface. You can't use this option if specifying specific `ipv6_addresses`. If your subnet has the AssignIpv6AddressOnCreation attribute set to `true`, you can specify `0` to override this setting.
  public ipv6AddressCount?: number;

  // Whether `ipv6_address_list` is allowed and controls the IPs to assign to the ENI and `ipv6_addresses` and `ipv6_address_count` become read-only. Default false.
  public ipv6AddressListEnabled?: boolean;

  // List of private IPs to assign to the ENI in sequential order. Requires setting `private_ip_list_enabled` to `true`.
  public privateIpLists?: Array<string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Type of network interface to create. Set to `efa` for Elastic Fabric Adapter. Changing `interface_type` will cause the resource to be destroyed and re-created.
  public interfaceType?: string;

  // AWS account ID of the owner of the network interface.
  public ownerId?: string;

  //
  public privateIp?: string;

  // List of security group IDs to assign to the ENI.
  public securityGroups?: Array<string>;

  // Whether to enable source destination checking for the ENI. Default true.
  public sourceDestCheck?: boolean;

  /*
Subnet ID to create the ENI in.

The following arguments are optional:
*/
  public subnetId?: string;

  // Configuration block to define the attachment of the ENI. See Attachment below for more details!
  public attachments?: Array<ec2_NetworkInterfaceAttachment>;

  // List of private IPs to assign to the ENI in sequential order.
  public ipv6AddressLists?: Array<string>;

  // Number of IPv6 prefixes that AWS automatically assigns to the network interface.
  public ipv6PrefixCount?: number;

  //
  public outpostArn?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Number of secondary private IPs to assign to the ENI. The total number of private IPs will be 1 + `private_ips_count`, as a primary private IP will be assiged to an ENI by default.
  public privateIpsCount?: number;

  // Description for the network interface.
  public description?: string;

  // One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet. Addresses are assigned without regard to order. You can't use this option if you're specifying `ipv6_address_count`.
  public ipv6Addresses?: Array<string>;

  // One or more IPv6 prefixes assigned to the network interface.
  public ipv6Prefixes?: Array<string>;

  // MAC address of the network interface.
  public macAddress?: string;

  // Private DNS name of the network interface (IPv4).
  public privateDnsName?: string;

  // Whether `private_ip_list` is allowed and controls the IPs to assign to the ENI and `private_ips` and `private_ips_count` become read-only. Default false.
  public privateIpListEnabled?: boolean;

  // List of private IPs to assign to the ENI without regard to order.
  public privateIps?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "sourceDestCheck",
        "Whether to enable source destination checking for the ENI. Default true.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description for the network interface.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ipv6Prefixes",
        "One or more IPv6 prefixes assigned to the network interface.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "attachments",
        "Configuration block to define the attachment of the ENI. See Attachment below for more details!",
        ec2_NetworkInterfaceAttachment_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "ipv6PrefixCount",
        "Number of IPv6 prefixes that AWS automatically assigns to the network interface.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(InputType.String, "privateIp", "", [], false, false),
      new DynamicUIProps(
        InputType.String,
        "interfaceType",
        "Type of network interface to create. Set to `efa` for Elastic Fabric Adapter. Changing `interface_type` will cause the resource to be destroyed and re-created.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "privateIpListEnabled",
        "Whether `private_ip_list` is allowed and controls the IPs to assign to the ENI and `private_ips` and `private_ips_count` become read-only. Default false.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "securityGroups",
        "List of security group IDs to assign to the ENI.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "ipv6AddressCount",
        "Number of IPv6 addresses to assign to a network interface. You can't use this option if specifying specific `ipv6_addresses`. If your subnet has the AssignIpv6AddressOnCreation attribute set to `true`, you can specify `0` to override this setting.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "ipv4PrefixCount",
        "Number of IPv4 prefixes that AWS automatically assigns to the network interface.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ipv6AddressLists",
        "List of private IPs to assign to the ENI in sequential order.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "privateIps",
        "List of private IPs to assign to the ENI without regard to order.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "subnetId",
        "Subnet ID to create the ENI in.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ipv4Prefixes",
        "One or more IPv4 prefixes assigned to the network interface.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "privateIpLists",
        "List of private IPs to assign to the ENI in sequential order. Requires setting `private_ip_list_enabled` to `true`.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ipv6Addresses",
        "One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet. Addresses are assigned without regard to order. You can't use this option if you're specifying `ipv6_address_count`.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "ipv6AddressListEnabled",
        "Whether `ipv6_address_list` is allowed and controls the IPs to assign to the ENI and `ipv6_addresses` and `ipv6_address_count` become read-only. Default false.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "privateIpsCount",
        "Number of secondary private IPs to assign to the ENI. The total number of private IPs will be 1 + `private_ips_count`, as a primary private IP will be assiged to an ENI by default.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
