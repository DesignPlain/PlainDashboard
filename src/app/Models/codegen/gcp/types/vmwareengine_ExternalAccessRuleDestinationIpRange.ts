import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface vmwareengine_ExternalAccessRuleDestinationIpRange {
  /*
The name of an `ExternalAddress` resource.

- - -
*/
  externalAddress?: string;

  // An IP address range in the CIDR format.
  ipAddressRange?: string;
}

export function vmwareengine_ExternalAccessRuleDestinationIpRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "externalAddress",
      "The name of an `ExternalAddress` resource.\n\n- - -",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ipAddressRange",
      "An IP address range in the CIDR format.",
      () => [],
      false,
      false,
    ),
  ];
}
