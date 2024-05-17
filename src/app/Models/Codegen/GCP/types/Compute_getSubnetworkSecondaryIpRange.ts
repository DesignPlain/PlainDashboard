import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getSubnetworkSecondaryIpRange {
  /*
The range of IP addresses belonging to this subnetwork
secondary range.
*/
  IpCidrRange?: string;

  /*
The name associated with this subnetwork secondary range, used
when adding an alias IP range to a VM instance.
*/
  RangeName?: string;
}

export function Compute_getSubnetworkSecondaryIpRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "IpCidrRange",
      "The range of IP addresses belonging to this subnetwork\nsecondary range.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RangeName",
      "The name associated with this subnetwork secondary range, used\nwhen adding an alias IP range to a VM instance.",
      [],
      true,
      false,
    ),
  ];
}
