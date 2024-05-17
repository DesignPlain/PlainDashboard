import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Vmwareengine_ExternalAccessRuleSourceIpRange {
  // A single IP address.
  IpAddress?: string;

  // An IP address range in the CIDR format.
  IpAddressRange?: string;
}

export function Vmwareengine_ExternalAccessRuleSourceIpRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "IpAddress",
      "A single IP address.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "IpAddressRange",
      "An IP address range in the CIDR format.",
      [],
      false,
      false,
    ),
  ];
}
