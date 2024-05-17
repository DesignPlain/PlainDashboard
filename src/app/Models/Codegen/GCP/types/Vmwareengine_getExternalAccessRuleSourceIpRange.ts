import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Vmwareengine_getExternalAccessRuleSourceIpRange {
  // An IP address range in the CIDR format.
  IpAddressRange?: string;

  // A single IP address.
  IpAddress?: string;
}

export function Vmwareengine_getExternalAccessRuleSourceIpRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "IpAddressRange",
      "An IP address range in the CIDR format.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "IpAddress",
      "A single IP address.",
      [],
      true,
      false,
    ),
  ];
}
