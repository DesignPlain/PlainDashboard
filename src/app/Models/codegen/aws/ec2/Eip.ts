import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface EipArgs {
  // ID  of a customer-owned address pool. For more on customer owned IP addressed check out [Customer-owned IP addresses guide](https://docs.aws.amazon.com/outposts/latest/userguide/outposts-networking-components.html#ip-addressing).
  customerOwnedIpv4Pool?: string;

  /*
Boolean if the EIP is in a VPC or not. Use `domain` instead.
Defaults to `true` unless the region supports EC2-Classic.

> --NOTE:-- You can specify either the `instance` ID or the `network_interface` ID, but not both. Including both will --not-- return an error from the AWS API, but will have undefined behavior. See the relevant [AssociateAddress API Call][1] for more information.

> --NOTE:-- Specifying both `public_ipv4_pool` and `address` won't cause an error but `address` will be used in the
case both options are defined as the api only requires one or the other.
*/
  vpc?: boolean;

  // EC2 instance ID.
  instance?: string;

  // Location from which the IP address is advertised. Use this parameter to limit the address to this location.
  networkBorderGroup?: string;

  // Network interface ID to associate with.
  networkInterface?: string;

  /*
EC2 IPv4 address pool identifier or `amazon`.
This option is only available for VPC EIPs.
*/
  publicIpv4Pool?: string;

  // Map of tags to assign to the resource. Tags can only be applied to EIPs in a VPC. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // IP address from an EC2 BYOIP pool. This option is only available for VPC EIPs.
  address?: string;

  // User-specified primary or secondary private IP address to associate with the Elastic IP address. If no private IP address is specified, the Elastic IP address is associated with the primary private IP address.
  associateWithPrivateIp?: string;

  // Indicates if this EIP is for use in VPC (`vpc`).
  domain?: string;
}
export class Eip extends DS_Resource {
  // ID  of a customer-owned address pool. For more on customer owned IP addressed check out [Customer-owned IP addresses guide](https://docs.aws.amazon.com/outposts/latest/userguide/outposts-networking-components.html#ip-addressing).
  public customerOwnedIpv4Pool?: string;

  // The DNS pointer (PTR) record for the IP address.
  public ptrRecord?: string;

  // Map of tags to assign to the resource. Tags can only be applied to EIPs in a VPC. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // IP address from an EC2 BYOIP pool. This option is only available for VPC EIPs.
  public address?: string;

  //
  public arn?: string;

  // User-specified primary or secondary private IP address to associate with the Elastic IP address. If no private IP address is specified, the Elastic IP address is associated with the primary private IP address.
  public associateWithPrivateIp?: string;

  // Carrier IP address.
  public carrierIp?: string;

  // EC2 instance ID.
  public instance?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  /*
Boolean if the EIP is in a VPC or not. Use `domain` instead.
Defaults to `true` unless the region supports EC2-Classic.

> --NOTE:-- You can specify either the `instance` ID or the `network_interface` ID, but not both. Including both will --not-- return an error from the AWS API, but will have undefined behavior. See the relevant [AssociateAddress API Call][1] for more information.

> --NOTE:-- Specifying both `public_ipv4_pool` and `address` won't cause an error but `address` will be used in the
case both options are defined as the api only requires one or the other.
*/
  public vpc?: boolean;

  // Contains the public IP address.
  public publicIp?: string;

  // ID that AWS assigns to represent the allocation of the Elastic IP address for use with instances in a VPC.
  public allocationId?: string;

  // Customer owned IP.
  public customerOwnedIp?: string;

  // Indicates if this EIP is for use in VPC (`vpc`).
  public domain?: string;

  // Public DNS associated with the Elastic IP address.
  public publicDns?: string;

  // Contains the private IP address (if in VPC).
  public privateIp?: string;

  /*
EC2 IPv4 address pool identifier or `amazon`.
This option is only available for VPC EIPs.
*/
  public publicIpv4Pool?: string;

  // ID representing the association of the address with an instance in a VPC.
  public associationId?: string;

  // Location from which the IP address is advertised. Use this parameter to limit the address to this location.
  public networkBorderGroup?: string;

  // Network interface ID to associate with.
  public networkInterface?: string;

  // The Private DNS associated with the Elastic IP address (if in VPC).
  public privateDns?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        'vpc',
        "Boolean if the EIP is in a VPC or not. Use `domain` instead.\nDefaults to `true` unless the region supports EC2-Classic.\n\n> **NOTE:** You can specify either the `instance` ID or the `network_interface` ID, but not both. Including both will **not** return an error from the AWS API, but will have undefined behavior. See the relevant [AssociateAddress API Call][1] for more information.\n\n> **NOTE:** Specifying both `public_ipv4_pool` and `address` won't cause an error but `address` will be used in the\ncase both options are defined as the api only requires one or the other.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'instance',
        'EC2 instance ID.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Map of tags to assign to the resource. Tags can only be applied to EIPs in a VPC. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'domain',
        'Indicates if this EIP is for use in VPC (`vpc`).',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'customerOwnedIpv4Pool',
        'ID  of a customer-owned address pool. For more on customer owned IP addressed check out [Customer-owned IP addresses guide](https://docs.aws.amazon.com/outposts/latest/userguide/outposts-networking-components.html#ip-addressing).',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'networkInterface',
        'Network interface ID to associate with.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'publicIpv4Pool',
        'EC2 IPv4 address pool identifier or `amazon`.\nThis option is only available for VPC EIPs.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'address',
        'IP address from an EC2 BYOIP pool. This option is only available for VPC EIPs.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'associateWithPrivateIp',
        'User-specified primary or secondary private IP address to associate with the Elastic IP address. If no private IP address is specified, the Elastic IP address is associated with the primary private IP address.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'networkBorderGroup',
        'Location from which the IP address is advertised. Use this parameter to limit the address to this location.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
