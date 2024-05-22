import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface networkmanager_getCoreNetworkPolicyDocumentSegmentAction {
  // A user-defined string describing the segment action.
  description?: string;

  // List of strings containing CIDRs. You can define the IPv4 and IPv6 CIDR notation for each AWS Region. For example, `10.1.0.0/16` or `2001:db8::/56`. This is an array of CIDR notation strings.
  destinationCidrBlocks?: Array<string>;

  // A list of strings. Valid values include `["blackhole"]` or a list of attachment ids.
  destinations?: Array<string>;

  // String. This mode places the attachment and return routes in each of the `share_with` segments. Valid values include: `attachment-route`.
  mode?: string;

  // Name of the segment.
  segment?: string;

  // A set subtraction of segments to not share with.
  shareWithExcepts?: Array<string>;

  // A list of strings to share with. Must be a substring is all segments. Valid values include: `["-"]` or `["<segment-names>"]`.
  shareWiths?: Array<string>;

  // Action to take for the chosen segment. Valid values `create-route` or `share`.
  action?: string;
}

export function networkmanager_getCoreNetworkPolicyDocumentSegmentAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "description",
      "A user-defined string describing the segment action.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "destinationCidrBlocks",
      "List of strings containing CIDRs. You can define the IPv4 and IPv6 CIDR notation for each AWS Region. For example, `10.1.0.0/16` or `2001:db8::/56`. This is an array of CIDR notation strings.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "destinations",
      'A list of strings. Valid values include `["blackhole"]` or a list of attachment ids.',
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mode",
      "String. This mode places the attachment and return routes in each of the `share_with` segments. Valid values include: `attachment-route`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "segment",
      "Name of the segment.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "shareWithExcepts",
      "A set subtraction of segments to not share with.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "shareWiths",
      'A list of strings to share with. Must be a substring is all segments. Valid values include: `["*"]` or `["<segment-names>"]`.',
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "action",
      "Action to take for the chosen segment. Valid values `create-route` or `share`.",
      [],
      true,
      false,
    ),
  ];
}
