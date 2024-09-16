import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface NatGatewayArgs {
  // A list of secondary private IPv4 addresses to assign to the NAT Gateway.
  secondaryPrivateIpAddresses?: Array<string>;

  // The Subnet ID of the subnet in which to place the NAT Gateway.
  subnetId?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The Allocation ID of the Elastic IP address for the NAT Gateway. Required for `connectivity_type` of `public`.
  allocationId?: string;

  // Connectivity type for the NAT Gateway. Valid values are `private` and `public`. Defaults to `public`.
  connectivityType?: string;

  // The private IPv4 address to assign to the NAT Gateway. If you don't provide an address, a private IPv4 address will be automatically assigned.
  privateIp?: string;

  // A list of secondary allocation EIP IDs for this NAT Gateway.
  secondaryAllocationIds?: Array<string>;

  // [Private NAT Gateway only] The number of secondary private IPv4 addresses you want to assign to the NAT Gateway.
  secondaryPrivateIpAddressCount?: number;
}
export class NatGateway extends DS_Resource {
  // The Allocation ID of the Elastic IP address for the NAT Gateway. Required for `connectivity_type` of `public`.
  public allocationId?: string;

  // Connectivity type for the NAT Gateway. Valid values are `private` and `public`. Defaults to `public`.
  public connectivityType?: string;

  // A list of secondary private IPv4 addresses to assign to the NAT Gateway.
  public secondaryPrivateIpAddresses?: Array<string>;

  // The association ID of the Elastic IP address that's associated with the NAT Gateway. Only available when `connectivity_type` is `public`.
  public associationId?: string;

  // The ID of the network interface associated with the NAT Gateway.
  public networkInterfaceId?: string;

  // The private IPv4 address to assign to the NAT Gateway. If you don't provide an address, a private IPv4 address will be automatically assigned.
  public privateIp?: string;

  // The Elastic IP address associated with the NAT Gateway.
  public publicIp?: string;

  // A list of secondary allocation EIP IDs for this NAT Gateway.
  public secondaryAllocationIds?: Array<string>;

  // [Private NAT Gateway only] The number of secondary private IPv4 addresses you want to assign to the NAT Gateway.
  public secondaryPrivateIpAddressCount?: number;

  // The Subnet ID of the subnet in which to place the NAT Gateway.
  public subnetId?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'subnetId',
        'The Subnet ID of the subnet in which to place the NAT Gateway.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'allocationId',
        'The Allocation ID of the Elastic IP address for the NAT Gateway. Required for `connectivity_type` of `public`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'connectivityType',
        'Connectivity type for the NAT Gateway. Valid values are `private` and `public`. Defaults to `public`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'privateIp',
        "The private IPv4 address to assign to the NAT Gateway. If you don't provide an address, a private IPv4 address will be automatically assigned.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'secondaryAllocationIds',
        'A list of secondary allocation EIP IDs for this NAT Gateway.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'secondaryPrivateIpAddressCount',
        '[Private NAT Gateway only] The number of secondary private IPv4 addresses you want to assign to the NAT Gateway.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'secondaryPrivateIpAddresses',
        'A list of secondary private IPv4 addresses to assign to the NAT Gateway.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
