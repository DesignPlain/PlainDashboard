import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface networkfirewall_getFirewallSubnetMapping {
  // The unique identifier for the subnet.
  subnetId?: string;
}

export function networkfirewall_getFirewallSubnetMapping_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'subnetId',
      'The unique identifier for the subnet.',
      () => [],
      true,
      false,
    ),
  ];
}
