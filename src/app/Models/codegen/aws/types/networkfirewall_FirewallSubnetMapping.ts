import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

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
      'subnetId',
      'The unique identifier for the subnet.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'ipAddressType',
      'The subnet\'s IP address type. Valida values: `"DUALSTACK"`, `"IPV4"`.',
      () => [],
      false,
      false,
    ),
  ];
}
