import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface BgpPeerArgs {
  /*
The IPv4 CIDR destination address to which Amazon should send traffic.
Required for IPv4 BGP peers on public virtual interfaces.
*/
  customerAddress?: string;

  // The ID of the Direct Connect virtual interface on which to create the BGP peer.
  virtualInterfaceId?: string;

  // The address family for the BGP peer. `ipv4 ` or `ipv6`.
  addressFamily?: string;

  /*
The IPv4 CIDR address to use to send traffic to Amazon.
Required for IPv4 BGP peers on public virtual interfaces.
*/
  amazonAddress?: string;

  // The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.
  bgpAsn?: number;

  // The authentication key for BGP configuration.
  bgpAuthKey?: string;
}
export class BgpPeer extends Resource {
  // The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.
  public bgpAsn?: number;

  // The ID of the BGP peer.
  public bgpPeerId?: string;

  // The Up/Down state of the BGP peer.
  public bgpStatus?: string;

  // The ID of the Direct Connect virtual interface on which to create the BGP peer.
  public virtualInterfaceId?: string;

  // The address family for the BGP peer. `ipv4 ` or `ipv6`.
  public addressFamily?: string;

  /*
The IPv4 CIDR address to use to send traffic to Amazon.
Required for IPv4 BGP peers on public virtual interfaces.
*/
  public amazonAddress?: string;

  // The Direct Connect endpoint on which the BGP peer terminates.
  public awsDevice?: string;

  // The authentication key for BGP configuration.
  public bgpAuthKey?: string;

  /*
The IPv4 CIDR destination address to which Amazon should send traffic.
Required for IPv4 BGP peers on public virtual interfaces.
*/
  public customerAddress?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "bgpAsn",
        "The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "bgpAuthKey",
        "The authentication key for BGP configuration.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "customerAddress",
        "The IPv4 CIDR destination address to which Amazon should send traffic.\nRequired for IPv4 BGP peers on public virtual interfaces.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "virtualInterfaceId",
        "The ID of the Direct Connect virtual interface on which to create the BGP peer.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "addressFamily",
        "The address family for the BGP peer. `ipv4 ` or `ipv6`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "amazonAddress",
        "The IPv4 CIDR address to use to send traffic to Amazon.\nRequired for IPv4 BGP peers on public virtual interfaces.",
        [],
        false,
        true,
      ),
    ];
  }
}
