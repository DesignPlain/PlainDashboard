import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_SubnetworkSecondaryIpRange {
  /*
The range of IP addresses belonging to this subnetwork secondary
range. Provide this property when you create the subnetwork.
Ranges must be unique and non-overlapping with all primary and
secondary IP ranges within a network. Only IPv4 is supported.
*/
  IpCidrRange?: string;

  /*
The name associated with this subnetwork secondary range, used
when adding an alias IP range to a VM instance. The name must
be 1-63 characters long, and comply with RFC1035. The name
must be unique within the subnetwork.
*/
  RangeName?: string;
}

export function Compute_SubnetworkSecondaryIpRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "IpCidrRange",
      "The range of IP addresses belonging to this subnetwork secondary\nrange. Provide this property when you create the subnetwork.\nRanges must be unique and non-overlapping with all primary and\nsecondary IP ranges within a network. Only IPv4 is supported.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RangeName",
      "The name associated with this subnetwork secondary range, used\nwhen adding an alias IP range to a VM instance. The name must\nbe 1-63 characters long, and comply with RFC1035. The name\nmust be unique within the subnetwork.",
      [],
      true,
      false,
    ),
  ];
}
