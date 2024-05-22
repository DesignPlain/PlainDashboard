import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface PublicVirtualInterfaceArgs {
  // The ID of the Direct Connect connection (or LAG) on which to create the virtual interface.
  connectionId?: string;

  // The IPv4 CIDR destination address to which Amazon should send traffic. Required for IPv4 BGP peers.
  customerAddress?: string;

  // The name for the virtual interface.
  name?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The address family for the BGP peer. `ipv4 ` or `ipv6`.
  addressFamily?: string;

  // The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.
  bgpAsn?: number;

  // The authentication key for BGP configuration.
  bgpAuthKey?: string;

  // A list of routes to be advertised to the AWS network in this region.
  routeFilterPrefixes?: Array<string>;

  // The VLAN ID.
  vlan?: number;

  // The IPv4 CIDR address to use to send traffic to Amazon. Required for IPv4 BGP peers.
  amazonAddress?: string;
}
export class PublicVirtualInterface extends Resource {
  // The Direct Connect endpoint on which the virtual interface terminates.
  public awsDevice?: string;

  // The name for the virtual interface.
  public name?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  //
  public amazonSideAsn?: string;

  // The ARN of the virtual interface.
  public arn?: string;

  // The IPv4 CIDR destination address to which Amazon should send traffic. Required for IPv4 BGP peers.
  public customerAddress?: string;

  // The IPv4 CIDR address to use to send traffic to Amazon. Required for IPv4 BGP peers.
  public amazonAddress?: string;

  // The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.
  public bgpAsn?: number;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The VLAN ID.
  public vlan?: number;

  // The address family for the BGP peer. `ipv4 ` or `ipv6`.
  public addressFamily?: string;

  // The ID of the Direct Connect connection (or LAG) on which to create the virtual interface.
  public connectionId?: string;

  // A list of routes to be advertised to the AWS network in this region.
  public routeFilterPrefixes?: Array<string>;

  // The authentication key for BGP configuration.
  public bgpAuthKey?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
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
        InputType.String,
        "connectionId",
        "The ID of the Direct Connect connection (or LAG) on which to create the virtual interface.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
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
        "bgpAuthKey",
        "The authentication key for BGP configuration.",
        [],
        false,
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
    ];
  }
}
