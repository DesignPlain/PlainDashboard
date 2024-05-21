import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_getRouterBgpAdvertisedIpRange,
  compute_getRouterBgpAdvertisedIpRange_GetTypes,
} from "./compute_getRouterBgpAdvertisedIpRange";

export interface compute_getRouterBgp {
  /*
Local BGP Autonomous System Number (ASN). Must be an RFC6996
private ASN, either 16-bit or 32-bit. The value will be fixed for
this router resource. All VPN tunnels that link to this router
will have the same local ASN.
*/
  asn?: number;

  /*
The interval in seconds between BGP keepalive messages that are sent
to the peer. Hold time is three times the interval at which keepalive
messages are sent, and the hold time is the maximum number of seconds
allowed to elapse between successive keepalive messages that BGP
receives from a peer.

BGP will use the smaller of either the local hold time value or the
peer's hold time value as the hold time for the BGP connection
between the two peers. If set, this value must be between 20 and 60.
The default is 20.
*/
  keepaliveInterval?: number;

  // User-specified flag to indicate which mode to use for advertisement. Default value: "DEFAULT" Possible values: ["DEFAULT", "CUSTOM"]
  advertiseMode?: string;

  /*
User-specified list of prefix groups to advertise in custom mode.
This field can only be populated if advertiseMode is CUSTOM and
is advertised to all peers of the router. These groups will be
advertised in addition to any specified prefixes. Leave this field
blank to advertise no custom groups.

This enum field has the one valid value: ALL_SUBNETS
*/
  advertisedGroups?: Array<string>;

  /*
User-specified list of individual IP ranges to advertise in
custom mode. This field can only be populated if advertiseMode
is CUSTOM and is advertised to all peers of the router. These IP
ranges will be advertised in addition to any specified groups.
Leave this field blank to advertise no custom IP ranges.
*/
  advertisedIpRanges?: Array<compute_getRouterBgpAdvertisedIpRange>;
}

export function compute_getRouterBgp_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "asn",
      "Local BGP Autonomous System Number (ASN). Must be an RFC6996\nprivate ASN, either 16-bit or 32-bit. The value will be fixed for\nthis router resource. All VPN tunnels that link to this router\nwill have the same local ASN.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "keepaliveInterval",
      "The interval in seconds between BGP keepalive messages that are sent\nto the peer. Hold time is three times the interval at which keepalive\nmessages are sent, and the hold time is the maximum number of seconds\nallowed to elapse between successive keepalive messages that BGP\nreceives from a peer.\n\nBGP will use the smaller of either the local hold time value or the\npeer's hold time value as the hold time for the BGP connection\nbetween the two peers. If set, this value must be between 20 and 60.\nThe default is 20.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "advertiseMode",
      'User-specified flag to indicate which mode to use for advertisement. Default value: "DEFAULT" Possible values: ["DEFAULT", "CUSTOM"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "advertisedGroups",
      "User-specified list of prefix groups to advertise in custom mode.\nThis field can only be populated if advertiseMode is CUSTOM and\nis advertised to all peers of the router. These groups will be\nadvertised in addition to any specified prefixes. Leave this field\nblank to advertise no custom groups.\n\nThis enum field has the one valid value: ALL_SUBNETS",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "advertisedIpRanges",
      "User-specified list of individual IP ranges to advertise in\ncustom mode. This field can only be populated if advertiseMode\nis CUSTOM and is advertised to all peers of the router. These IP\nranges will be advertised in addition to any specified groups.\nLeave this field blank to advertise no custom IP ranges.",
      compute_getRouterBgpAdvertisedIpRange_GetTypes(),
      true,
      false,
    ),
  ];
}
