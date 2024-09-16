import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface networkfirewall_getFirewallFirewallStatusSyncStateAttachment {
  // The identifier of the firewall endpoint that AWS Network Firewall has instantiated in the subnet. You use this to identify the firewall endpoint in the VPC route tables, when you redirect the VPC traffic through the endpoint.
  endpointId?: string;

  //
  status?: string;

  // The unique identifier for the subnet.
  subnetId?: string;
}

export function networkfirewall_getFirewallFirewallStatusSyncStateAttachment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'status', '', () => [], true, false),
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
      'endpointId',
      'The identifier of the firewall endpoint that AWS Network Firewall has instantiated in the subnet. You use this to identify the firewall endpoint in the VPC route tables, when you redirect the VPC traffic through the endpoint.',
      () => [],
      true,
      false,
    ),
  ];
}
