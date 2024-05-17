import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Vmwareengine_getExternalAccessRuleDestinationIpRange {
  // The name of an 'ExternalAddress' resource.
  ExternalAddress?: string;

  // An IP address range in the CIDR format.
  IpAddressRange?: string;
}

export function Vmwareengine_getExternalAccessRuleDestinationIpRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ExternalAddress",
      "The name of an 'ExternalAddress' resource.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "IpAddressRange",
      "An IP address range in the CIDR format.",
      [],
      true,
      false,
    ),
  ];
}
