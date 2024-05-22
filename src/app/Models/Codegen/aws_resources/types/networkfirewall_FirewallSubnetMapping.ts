import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface networkfirewall_FirewallSubnetMapping {
  // The subnet's IP address type. Valida values: `"DUALSTACK"`, `"IPV4"`.
  ipAddressType?: string;

  // The unique identifier for the subnet.
  subnetId?: string;
}

export function networkfirewall_FirewallSubnetMapping_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ipAddressType",
      'The subnet\'s IP address type. Valida values: `"DUALSTACK"`, `"IPV4"`.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subnetId",
      "The unique identifier for the subnet.",
      [],
      true,
      false,
    ),
  ];
}
