import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface vmwareengine_getExternalAccessRuleSourceIpRange {
  // A single IP address.
  ipAddress?: string;

  // An IP address range in the CIDR format.
  ipAddressRange?: string;
}

export function vmwareengine_getExternalAccessRuleSourceIpRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ipAddress",
      "A single IP address.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ipAddressRange",
      "An IP address range in the CIDR format.",
      [],
      true,
      false,
    ),
  ];
}
