import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  networkfirewall_FirewallFirewallStatusSyncState,
  networkfirewall_FirewallFirewallStatusSyncState_GetTypes,
} from './networkfirewall_FirewallFirewallStatusSyncState';

export interface networkfirewall_FirewallFirewallStatus {
  // Set of subnets configured for use by the firewall.
  syncStates?: Array<networkfirewall_FirewallFirewallStatusSyncState>;
}

export function networkfirewall_FirewallFirewallStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'syncStates',
      'Set of subnets configured for use by the firewall.',
      () => networkfirewall_FirewallFirewallStatusSyncState_GetTypes(),
      false,
      false,
    ),
  ];
}
