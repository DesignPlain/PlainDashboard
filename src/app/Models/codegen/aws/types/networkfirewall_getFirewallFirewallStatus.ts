import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  networkfirewall_getFirewallFirewallStatusCapacityUsageSummary,
  networkfirewall_getFirewallFirewallStatusCapacityUsageSummary_GetTypes,
} from './networkfirewall_getFirewallFirewallStatusCapacityUsageSummary';
import {
  networkfirewall_getFirewallFirewallStatusSyncState,
  networkfirewall_getFirewallFirewallStatusSyncState_GetTypes,
} from './networkfirewall_getFirewallFirewallStatusSyncState';

export interface networkfirewall_getFirewallFirewallStatus {
  // Aggregated count of all resources used by reference sets in a firewall.
  capacityUsageSummaries?: Array<networkfirewall_getFirewallFirewallStatusCapacityUsageSummary>;

  // Summary of sync states for all availability zones in which the firewall is configured.
  configurationSyncStateSummary?: string;

  //
  status?: string;

  // Set of subnets configured for use by the firewall.
  syncStates?: Array<networkfirewall_getFirewallFirewallStatusSyncState>;
}

export function networkfirewall_getFirewallFirewallStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'capacityUsageSummaries',
      'Aggregated count of all resources used by reference sets in a firewall.',
      () =>
        networkfirewall_getFirewallFirewallStatusCapacityUsageSummary_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'configurationSyncStateSummary',
      'Summary of sync states for all availability zones in which the firewall is configured.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'status', '', () => [], true, false),
    new DynamicUIProps(
      InputType.Array,
      'syncStates',
      'Set of subnets configured for use by the firewall.',
      () => networkfirewall_getFirewallFirewallStatusSyncState_GetTypes(),
      true,
      false,
    ),
  ];
}
