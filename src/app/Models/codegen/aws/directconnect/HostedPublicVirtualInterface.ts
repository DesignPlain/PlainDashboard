import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface HostedPublicVirtualInterfaceArgs {
  // The IPv4 CIDR address to use to send traffic to Amazon. Required for IPv4 BGP peers.
  amazonAddress?: string;

  // The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.
  bgpAsn?: number;

  // The authentication key for BGP configuration.
  bgpAuthKey?: string;

  // The IPv4 CIDR destination address to which Amazon should send traffic. Required for IPv4 BGP peers.
  customerAddress?: string;

  // The name for the virtual interface.
  name?: string;

  // The address family for the BGP peer. `ipv4 ` or `ipv6`.
  addressFamily?: string;

  // The ID of the Direct Connect connection (or LAG) on which to create the virtual interface.
  connectionId?: string;

  // The AWS account that will own the new virtual interface.
  ownerAccountId?: string;

  // A list of routes to be advertised to the AWS network in this region.
  routeFilterPrefixes?: Array<string>;

  // The VLAN ID.
  vlan?: number;
}
export class HostedPublicVirtualInterface extends DS_Resource {
  // The AWS account that will own the new virtual interface.
  public ownerAccountId?: string;

  // The IPv4 CIDR address to use to send traffic to Amazon. Required for IPv4 BGP peers.
  public amazonAddress?: string;

  //
  public amazonSideAsn?: string;

  // The ARN of the virtual interface.
  public arn?: string;

  // The Direct Connect endpoint on which the virtual interface terminates.
  public awsDevice?: string;

  // The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.
  public bgpAsn?: number;

  // The authentication key for BGP configuration.
  public bgpAuthKey?: string;

  // The ID of the Direct Connect connection (or LAG) on which to create the virtual interface.
  public connectionId?: string;

  // A list of routes to be advertised to the AWS network in this region.
  public routeFilterPrefixes?: Array<string>;

  // The address family for the BGP peer. `ipv4 ` or `ipv6`.
  public addressFamily?: string;

  // The IPv4 CIDR destination address to which Amazon should send traffic. Required for IPv4 BGP peers.
  public customerAddress?: string;

  // The name for the virtual interface.
  public name?: string;

  // The VLAN ID.
  public vlan?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "amazonAddress",
        "The IPv4 CIDR address to use to send traffic to Amazon. Required for IPv4 BGP peers.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name for the virtual interface.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "routeFilterPrefixes",
        "A list of routes to be advertised to the AWS network in this region.",
        () => InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ownerAccountId",
        "The AWS account that will own the new virtual interface.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "vlan",
        "The VLAN ID.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "bgpAsn",
        "The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "bgpAuthKey",
        "The authentication key for BGP configuration.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "customerAddress",
        "The IPv4 CIDR destination address to which Amazon should send traffic. Required for IPv4 BGP peers.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "addressFamily",
        "The address family for the BGP peer. `ipv4 ` or `ipv6`.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "connectionId",
        "The ID of the Direct Connect connection (or LAG) on which to create the virtual interface.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
