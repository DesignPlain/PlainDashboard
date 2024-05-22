import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface HostedPublicVirtualInterfaceArgs {
  // The VLAN ID.
  vlan?: number;

  // The IPv4 CIDR address to use to send traffic to Amazon. Required for IPv4 BGP peers.
  amazonAddress?: string;

  // The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.
  bgpAsn?: number;

  // The ID of the Direct Connect connection (or LAG) on which to create the virtual interface.
  connectionId?: string;

  // The IPv4 CIDR destination address to which Amazon should send traffic. Required for IPv4 BGP peers.
  customerAddress?: string;

  // The name for the virtual interface.
  name?: string;

  // The AWS account that will own the new virtual interface.
  ownerAccountId?: string;

  // A list of routes to be advertised to the AWS network in this region.
  routeFilterPrefixes?: Array<string>;

  // The address family for the BGP peer. `ipv4 ` or `ipv6`.
  addressFamily?: string;

  // The authentication key for BGP configuration.
  bgpAuthKey?: string;
}
export class HostedPublicVirtualInterface extends Resource {
  // The IPv4 CIDR address to use to send traffic to Amazon. Required for IPv4 BGP peers.
  public amazonAddress?: string;

  //
  public amazonSideAsn?: string;

  // The Direct Connect endpoint on which the virtual interface terminates.
  public awsDevice?: string;

  // The IPv4 CIDR destination address to which Amazon should send traffic. Required for IPv4 BGP peers.
  public customerAddress?: string;

  // A list of routes to be advertised to the AWS network in this region.
  public routeFilterPrefixes?: Array<string>;

  // The VLAN ID.
  public vlan?: number;

  // The address family for the BGP peer. `ipv4 ` or `ipv6`.
  public addressFamily?: string;

  // The ARN of the virtual interface.
  public arn?: string;

  // The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.
  public bgpAsn?: number;

  // The authentication key for BGP configuration.
  public bgpAuthKey?: string;

  // The ID of the Direct Connect connection (or LAG) on which to create the virtual interface.
  public connectionId?: string;

  // The name for the virtual interface.
  public name?: string;

  // The AWS account that will own the new virtual interface.
  public ownerAccountId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ownerAccountId",
        "The AWS account that will own the new virtual interface.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "routeFilterPrefixes",
        "A list of routes to be advertised to the AWS network in this region.",
        InputType_String_GetTypes(),
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
        InputType.Number,
        "vlan",
        "The VLAN ID.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "amazonAddress",
        "The IPv4 CIDR address to use to send traffic to Amazon. Required for IPv4 BGP peers.",
        [],
        false,
        true,
      ),
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
        "connectionId",
        "The ID of the Direct Connect connection (or LAG) on which to create the virtual interface.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "customerAddress",
        "The IPv4 CIDR destination address to which Amazon should send traffic. Required for IPv4 BGP peers.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name for the virtual interface.",
        [],
        false,
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
    ];
  }
}
