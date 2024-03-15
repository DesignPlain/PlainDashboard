import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { RouterPeerMd5AuthenticationKey } from "../types/RouterPeerMd5AuthenticationKey";
import { RouterPeerAdvertisedIpRange } from "../types/RouterPeerAdvertisedIpRange";
import { RouterPeerBfd } from "../types/RouterPeerBfd";

export interface RouterPeerArgs {
  /*
IPv6 address of the interface inside Google Cloud Platform.
The address must be in the range 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64.
If you do not specify the next hop addresses, Google Cloud automatically
assigns unused addresses from the 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64 range for you.
*/
  Ipv6NexthopAddress?: string;

  /*
The name of the Cloud Router in which this BgpPeer will be configured.


- - -
*/
  Router?: string;

  /*
IPv6 address of the BGP interface outside Google Cloud Platform.
The address must be in the range 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64.
If you do not specify the next hop addresses, Google Cloud automatically
assigns unused addresses from the 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64 range for you.
*/
  PeerIpv6NexthopAddress?: string;

  /*
Region where the router and BgpPeer reside.
If it is not provided, the provider region is used.
*/
  Region?: string;

  /*
The priority of routes advertised to this BGP peer.
Where there is more than one matching route of maximum
length, the routes with the lowest priority value win.
*/
  AdvertisedRoutePriority?: number;

  // Enable IPv6 traffic over BGP Peer. If not specified, it is disabled by default.
  EnableIpv6?: boolean;

  // Name of the interface the BGP peer is associated with.
  Interface?: string;

  /*
IP address of the BGP interface outside Google Cloud Platform.
Only IPv4 is supported. Required if `ip_address` is set.
*/
  PeerIpAddress?: string;

  /*
Present if MD5 authentication is enabled for the peering. Must be the name of one of the entries in the
Router.md5_authentication_keys. The field must comply with RFC1035.
*/
  Md5AuthenticationKey?: RouterPeerMd5AuthenticationKey;

  /*
Peer BGP Autonomous System Number (ASN).
Each BGP interface may use a different value.
*/
  PeerAsn?: number;

  /*
The URI of the VM instance that is used as third-party router appliances
such as Next Gen Firewalls, Virtual Routers, or Router Appliances.
The VM instance must be located in zones contained in the same region as
this Cloud Router. The VM instance is the peer side of the BGP session.
*/
  RouterApplianceInstance?: string;

  /*
User-specified list of prefix groups to advertise in custom
mode, which currently supports the following option:
*/
  AdvertisedGroups?: Array<string>;

  /*
User-specified list of individual IP ranges to advertise in
custom mode. This field can only be populated if advertiseMode
is `CUSTOM` and is advertised to all peers of the router. These IP
ranges will be advertised in addition to any specified groups.
Leave this field blank to advertise no custom IP ranges.
Structure is documented below.
*/
  AdvertisedIpRanges?: Array<RouterPeerAdvertisedIpRange>;

  /*
The status of the BGP peer connection. If set to false, any active session
with the peer is terminated and all associated routing information is removed.
If set to true, the peer connection can be established with routing information.
The default is true.
*/
  Enable?: boolean;

  /*
IP address of the interface inside Google Cloud Platform.
Only IPv4 is supported.
*/
  IpAddress?: string;

  /*
User-specified flag to indicate which mode to use for advertisement.
Valid values of this enum field are: `DEFAULT`, `CUSTOM`
Default value is `DEFAULT`.
Possible values are: `DEFAULT`, `CUSTOM`.
*/
  AdvertiseMode?: string;

  /*
BFD configuration for the BGP peering.
Structure is documented below.
*/
  Bfd?: RouterPeerBfd;

  /*
Name of this BGP peer. The name must be 1-63 characters long,
and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression `a-z?` which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class RouterPeer extends Resource {
  /*
Name of this BGP peer. The name must be 1-63 characters long,
and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression `a-z?` which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.
*/
  public Name?: string;

  /*
IPv6 address of the BGP interface outside Google Cloud Platform.
The address must be in the range 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64.
If you do not specify the next hop addresses, Google Cloud automatically
assigns unused addresses from the 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64 range for you.
*/
  public PeerIpv6NexthopAddress?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
User-specified list of individual IP ranges to advertise in
custom mode. This field can only be populated if advertiseMode
is `CUSTOM` and is advertised to all peers of the router. These IP
ranges will be advertised in addition to any specified groups.
Leave this field blank to advertise no custom IP ranges.
Structure is documented below.
*/
  public AdvertisedIpRanges?: Array<RouterPeerAdvertisedIpRange>;

  /*
The status of the BGP peer connection. If set to false, any active session
with the peer is terminated and all associated routing information is removed.
If set to true, the peer connection can be established with routing information.
The default is true.
*/
  public Enable?: boolean;

  // The resource that configures and manages this BGP peer.
  public ManagementType?: string;

  /*
IPv6 address of the interface inside Google Cloud Platform.
The address must be in the range 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64.
If you do not specify the next hop addresses, Google Cloud automatically
assigns unused addresses from the 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64 range for you.
*/
  public Ipv6NexthopAddress?: string;

  /*
Peer BGP Autonomous System Number (ASN).
Each BGP interface may use a different value.
*/
  public PeerAsn?: number;

  /*
IP address of the BGP interface outside Google Cloud Platform.
Only IPv4 is supported. Required if `ip_address` is set.
*/
  public PeerIpAddress?: string;

  /*
Region where the router and BgpPeer reside.
If it is not provided, the provider region is used.
*/
  public Region?: string;

  /*
User-specified list of prefix groups to advertise in custom
mode, which currently supports the following option:
*/
  public AdvertisedGroups?: Array<string>;

  // Name of the interface the BGP peer is associated with.
  public Interface?: string;

  /*
IP address of the interface inside Google Cloud Platform.
Only IPv4 is supported.
*/
  public IpAddress?: string;

  /*
The URI of the VM instance that is used as third-party router appliances
such as Next Gen Firewalls, Virtual Routers, or Router Appliances.
The VM instance must be located in zones contained in the same region as
this Cloud Router. The VM instance is the peer side of the BGP session.
*/
  public RouterApplianceInstance?: string;

  /*
BFD configuration for the BGP peering.
Structure is documented below.
*/
  public Bfd?: RouterPeerBfd;

  // Enable IPv6 traffic over BGP Peer. If not specified, it is disabled by default.
  public EnableIpv6?: boolean;

  /*
Present if MD5 authentication is enabled for the peering. Must be the name of one of the entries in the
Router.md5_authentication_keys. The field must comply with RFC1035.
*/
  public Md5AuthenticationKey?: RouterPeerMd5AuthenticationKey;

  /*
User-specified flag to indicate which mode to use for advertisement.
Valid values of this enum field are: `DEFAULT`, `CUSTOM`
Default value is `DEFAULT`.
Possible values are: `DEFAULT`, `CUSTOM`.
*/
  public AdvertiseMode?: string;

  /*
The priority of routes advertised to this BGP peer.
Where there is more than one matching route of maximum
length, the routes with the lowest priority value win.
*/
  public AdvertisedRoutePriority?: number;

  /*
The name of the Cloud Router in which this BgpPeer will be configured.


- - -
*/
  public Router?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "AdvertiseMode",
        "User-specified flag to indicate which mode to use for advertisement.\nValid values of this enum field are: `DEFAULT`, `CUSTOM`\nDefault value is `DEFAULT`.\nPossible values are: `DEFAULT`, `CUSTOM`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of this BGP peer. The name must be 1-63 characters long,\nand comply with RFC1035. Specifically, the name must be 1-63 characters\nlong and match the regular expression `a-z?` which\nmeans the first character must be a lowercase letter, and all\nfollowing characters must be a dash, lowercase letter, or digit,\nexcept the last character, which cannot be a dash.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Interface",
        "Name of the interface the BGP peer is associated with.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "PeerAsn",
        "Peer BGP Autonomous System Number (ASN).\nEach BGP interface may use a different value.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "AdvertisedRoutePriority",
        "The priority of routes advertised to this BGP peer.\nWhere there is more than one matching route of maximum\nlength, the routes with the lowest priority value win.",
      ),
      new DynamicUIProps(
        InputType.String,
        "RouterApplianceInstance",
        "The URI of the VM instance that is used as third-party router appliances\nsuch as Next Gen Firewalls, Virtual Routers, or Router Appliances.\nThe VM instance must be located in zones contained in the same region as\nthis Cloud Router. The VM instance is the peer side of the BGP session.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "AdvertisedGroups",
        "User-specified list of prefix groups to advertise in custom\nmode, which currently supports the following option:",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "Enable",
        "The status of the BGP peer connection. If set to false, any active session\nwith the peer is terminated and all associated routing information is removed.\nIf set to true, the peer connection can be established with routing information.\nThe default is true.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Router",
        "The name of the Cloud Router in which this BgpPeer will be configured.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "Region where the router and BgpPeer reside.\nIf it is not provided, the provider region is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PeerIpAddress",
        "IP address of the BGP interface outside Google Cloud Platform.\nOnly IPv4 is supported. Required if `ip_address` is set.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Md5AuthenticationKey",
        "Present if MD5 authentication is enabled for the peering. Must be the name of one of the entries in the\nRouter.md5_authentication_keys. The field must comply with RFC1035.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "AdvertisedIpRanges",
        "User-specified list of individual IP ranges to advertise in\ncustom mode. This field can only be populated if advertiseMode\nis `CUSTOM` and is advertised to all peers of the router. These IP\nranges will be advertised in addition to any specified groups.\nLeave this field blank to advertise no custom IP ranges.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "IpAddress",
        "IP address of the interface inside Google Cloud Platform.\nOnly IPv4 is supported.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Bfd",
        "BFD configuration for the BGP peering.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PeerIpv6NexthopAddress",
        "IPv6 address of the BGP interface outside Google Cloud Platform.\nThe address must be in the range 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64.\nIf you do not specify the next hop addresses, Google Cloud automatically\nassigns unused addresses from the 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64 range for you.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EnableIpv6",
        "Enable IPv6 traffic over BGP Peer. If not specified, it is disabled by default.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Ipv6NexthopAddress",
        "IPv6 address of the interface inside Google Cloud Platform.\nThe address must be in the range 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64.\nIf you do not specify the next hop addresses, Google Cloud automatically\nassigns unused addresses from the 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64 range for you.",
      ),
    ];
  }
}
