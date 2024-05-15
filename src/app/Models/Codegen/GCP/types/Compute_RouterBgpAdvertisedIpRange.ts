import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_RouterBgpAdvertisedIpRange {
  // User-specified description for the IP range.
  Description?: string;

  /*
The IP range to advertise. The value must be a
CIDR-formatted string.
*/
  Range?: string;
}

export function Compute_RouterBgpAdvertisedIpRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Description",
      "User-specified description for the IP range.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Range",
      "The IP range to advertise. The value must be a\nCIDR-formatted string.",
      [],
      true,
      false,
    ),
  ];
}
