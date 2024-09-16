import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface PrivateVirtualInterfaceArgs {
  // The IPv4 CIDR destination address to which Amazon should send traffic. Required for IPv4 BGP peers.
  customerAddress?: string;

  // The name for the virtual interface.
  name?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The IPv4 CIDR address to use to send traffic to Amazon. Required for IPv4 BGP peers.
  amazonAddress?: string;

  // The ID of the Direct Connect connection (or LAG) on which to create the virtual interface.
  connectionId?: string;

  // The authentication key for BGP configuration.
  bgpAuthKey?: string;

  // The ID of the Direct Connect gateway to which to connect the virtual interface.
  dxGatewayId?: string;

  /*
The maximum transmission unit (MTU) is the size, in bytes, of the largest permissible packet that can be passed over the connection.
The MTU of a virtual private interface can be either `1500` or `9001` (jumbo frames). Default is `1500`.
*/
  mtu?: number;

  // Indicates whether to enable or disable SiteLink.
  sitelinkEnabled?: boolean;

  // The VLAN ID.
  vlan?: number;

  // The ID of the virtual private gateway to which to connect the virtual interface.
  vpnGatewayId?: string;

  // The address family for the BGP peer. `ipv4 ` or `ipv6`.
  addressFamily?: string;

  // The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.
  bgpAsn?: number;
}
export class PrivateVirtualInterface extends DS_Resource {
  // The IPv4 CIDR address to use to send traffic to Amazon. Required for IPv4 BGP peers.
  public amazonAddress?: string;

  //
  public amazonSideAsn?: string;

  // The Direct Connect endpoint on which the virtual interface terminates.
  public awsDevice?: string;

  // The ID of the Direct Connect connection (or LAG) on which to create the virtual interface.
  public connectionId?: string;

  // The ID of the Direct Connect gateway to which to connect the virtual interface.
  public dxGatewayId?: string;

  /*
The maximum transmission unit (MTU) is the size, in bytes, of the largest permissible packet that can be passed over the connection.
The MTU of a virtual private interface can be either `1500` or `9001` (jumbo frames). Default is `1500`.
*/
  public mtu?: number;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The VLAN ID.
  public vlan?: number;

  // The authentication key for BGP configuration.
  public bgpAuthKey?: string;

  // The IPv4 CIDR destination address to which Amazon should send traffic. Required for IPv4 BGP peers.
  public customerAddress?: string;

  // The name for the virtual interface.
  public name?: string;

  // The ID of the virtual private gateway to which to connect the virtual interface.
  public vpnGatewayId?: string;

  // The ARN of the virtual interface.
  public arn?: string;

  // The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.
  public bgpAsn?: number;

  // Indicates whether jumbo frames (9001 MTU) are supported.
  public jumboFrameCapable?: boolean;

  // The address family for the BGP peer. `ipv4 ` or `ipv6`.
  public addressFamily?: string;

  // Indicates whether to enable or disable SiteLink.
  public sitelinkEnabled?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
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
        'addressFamily',
        'The address family for the BGP peer. `ipv4 ` or `ipv6`.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name for the virtual interface.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'amazonAddress',
        'The IPv4 CIDR address to use to send traffic to Amazon. Required for IPv4 BGP peers.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'connectionId',
        'The ID of the Direct Connect connection (or LAG) on which to create the virtual interface.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'bgpAuthKey',
        'The authentication key for BGP configuration.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'dxGatewayId',
        'The ID of the Direct Connect gateway to which to connect the virtual interface.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'mtu',
        'The maximum transmission unit (MTU) is the size, in bytes, of the largest permissible packet that can be passed over the connection.\nThe MTU of a virtual private interface can be either `1500` or `9001` (jumbo frames). Default is `1500`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'sitelinkEnabled',
        'Indicates whether to enable or disable SiteLink.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'vlan',
        'The VLAN ID.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'customerAddress',
        'The IPv4 CIDR destination address to which Amazon should send traffic. Required for IPv4 BGP peers.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'bgpAsn',
        'The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'vpnGatewayId',
        'The ID of the virtual private gateway to which to connect the virtual interface.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
