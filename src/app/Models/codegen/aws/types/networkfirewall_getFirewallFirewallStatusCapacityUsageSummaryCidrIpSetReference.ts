import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface networkfirewall_getFirewallFirewallStatusCapacityUsageSummaryCidrIpSetReference {
  // Total number of CIDR blocks used by the IP set references in a firewall.
  resolvedCidrCount?: number;
}

export function networkfirewall_getFirewallFirewallStatusCapacityUsageSummaryCidrIpSetReference_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'resolvedCidrCount',
      'Total number of CIDR blocks used by the IP set references in a firewall.',
      () => [],
      true,
      false,
    ),
  ];
}
