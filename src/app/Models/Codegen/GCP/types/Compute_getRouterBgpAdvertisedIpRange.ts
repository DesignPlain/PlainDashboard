import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getRouterBgpAdvertisedIpRange {
  /*
The IP range to advertise. The value must be a
CIDR-formatted string.
*/
  Range?: string;

  // User-specified description for the IP range.
  Description?: string;
}

export function Compute_getRouterBgpAdvertisedIpRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Range",
      "The IP range to advertise. The value must be a\nCIDR-formatted string.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "User-specified description for the IP range.",
      [],
      true,
      false,
    ),
  ];
}
