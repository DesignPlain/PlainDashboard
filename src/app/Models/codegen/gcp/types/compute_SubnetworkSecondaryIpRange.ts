import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_SubnetworkSecondaryIpRange {
  /*
The name associated with this subnetwork secondary range, used
when adding an alias IP range to a VM instance. The name must
be 1-63 characters long, and comply with RFC1035. The name
must be unique within the subnetwork.
*/
  rangeName?: string;

  /*
The range of IP addresses belonging to this subnetwork secondary
range. Provide this property when you create the subnetwork.
Ranges must be unique and non-overlapping with all primary and
secondary IP ranges within a network. Only IPv4 is supported.
*/
  ipCidrRange?: string;
}

export function compute_SubnetworkSecondaryIpRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "rangeName",
      "The name associated with this subnetwork secondary range, used\nwhen adding an alias IP range to a VM instance. The name must\nbe 1-63 characters long, and comply with RFC1035. The name\nmust be unique within the subnetwork.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ipCidrRange",
      "The range of IP addresses belonging to this subnetwork secondary\nrange. Provide this property when you create the subnetwork.\nRanges must be unique and non-overlapping with all primary and\nsecondary IP ranges within a network. Only IPv4 is supported.",
      () => [],
      true,
      false,
    ),
  ];
}
