import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface vmwareengine_getExternalAccessRuleDestinationIpRange {
  // The name of an 'ExternalAddress' resource.
  externalAddress?: string;

  // An IP address range in the CIDR format.
  ipAddressRange?: string;
}

export function vmwareengine_getExternalAccessRuleDestinationIpRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "externalAddress",
      "The name of an 'ExternalAddress' resource.",
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
