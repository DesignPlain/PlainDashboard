import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Vmwareengine_ExternalAccessRuleDestinationIpRange {
  // An IP address range in the CIDR format.
  IpAddressRange?: string;

  /*
The name of an `ExternalAddress` resource.

- - -
*/
  ExternalAddress?: string;
}

export function Vmwareengine_ExternalAccessRuleDestinationIpRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "IpAddressRange",
      "An IP address range in the CIDR format.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ExternalAddress",
      "The name of an `ExternalAddress` resource.\n\n- - -",
      [],
      false,
      false,
    ),
  ];
}
