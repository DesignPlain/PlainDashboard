import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  networkmanager_getCoreNetworkPolicyDocumentSegmentActionVia,
  networkmanager_getCoreNetworkPolicyDocumentSegmentActionVia_GetTypes,
} from "./networkmanager_getCoreNetworkPolicyDocumentSegmentActionVia";
import {
  networkmanager_getCoreNetworkPolicyDocumentSegmentActionWhenSentTo,
  networkmanager_getCoreNetworkPolicyDocumentSegmentActionWhenSentTo_GetTypes,
} from "./networkmanager_getCoreNetworkPolicyDocumentSegmentActionWhenSentTo";

export interface networkmanager_getCoreNetworkPolicyDocumentSegmentAction {
  // Action to take for the chosen segment. Valid values: `create-route`, `share`, `send-via` and `send-to`.
  action?: string;

  // A user-defined string describing the segment action.
  description?: string;

  // List of strings containing CIDRs. You can define the IPv4 and IPv6 CIDR notation for each AWS Region. For example, `10.1.0.0/16` or `2001:db8::/56`. This is an array of CIDR notation strings.
  destinationCidrBlocks?: Array<string>;

  // Name of the segment.
  segment?: string;

  // A list of strings to share with. Must be a substring is all segments. Valid values include: `["-"]` or `["<segment-names>"]`.
  shareWiths?: Array<string>;

  // A list of strings. Valid values include `["blackhole"]` or a list of attachment ids.
  destinations?: Array<string>;

  // String. When `action` is `share`, a `mode` value of `attachment-route` places the attachment and return routes in each of the `share_with` segments. When `action` is `send-via`, indicates the mode used for packets. Valid values: `attachment-route`, `single-hop`, `dual-hop`.
  mode?: string;

  // A set subtraction of segments to not share with.
  shareWithExcepts?: Array<string>;

  // The network function groups and any edge overrides associated with the action.
  via?: networkmanager_getCoreNetworkPolicyDocumentSegmentActionVia;

  // The destination segments for the `send-via` or `send-to` `action`.
  whenSentTo?: networkmanager_getCoreNetworkPolicyDocumentSegmentActionWhenSentTo;
}

export function networkmanager_getCoreNetworkPolicyDocumentSegmentAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "action",
      "Action to take for the chosen segment. Valid values: `create-route`, `share`, `send-via` and `send-to`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "A user-defined string describing the segment action.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "shareWiths",
      'A list of strings to share with. Must be a substring is all segments. Valid values include: `["*"]` or `["<segment-names>"]`.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "via",
      "The network function groups and any edge overrides associated with the action.",
      () =>
        networkmanager_getCoreNetworkPolicyDocumentSegmentActionVia_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "whenSentTo",
      "The destination segments for the `send-via` or `send-to` `action`.",
      () =>
        networkmanager_getCoreNetworkPolicyDocumentSegmentActionWhenSentTo_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "destinationCidrBlocks",
      "List of strings containing CIDRs. You can define the IPv4 and IPv6 CIDR notation for each AWS Region. For example, `10.1.0.0/16` or `2001:db8::/56`. This is an array of CIDR notation strings.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "segment",
      "Name of the segment.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "destinations",
      'A list of strings. Valid values include `["blackhole"]` or a list of attachment ids.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mode",
      "String. When `action` is `share`, a `mode` value of `attachment-route` places the attachment and return routes in each of the `share_with` segments. When `action` is `send-via`, indicates the mode used for packets. Valid values: `attachment-route`, `single-hop`, `dual-hop`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "shareWithExcepts",
      "A set subtraction of segments to not share with.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
