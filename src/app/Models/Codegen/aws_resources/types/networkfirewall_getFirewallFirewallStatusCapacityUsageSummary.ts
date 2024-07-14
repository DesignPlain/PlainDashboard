import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  networkfirewall_getFirewallFirewallStatusCapacityUsageSummaryCidr,
  networkfirewall_getFirewallFirewallStatusCapacityUsageSummaryCidr_GetTypes,
} from "./networkfirewall_getFirewallFirewallStatusCapacityUsageSummaryCidr";

export interface networkfirewall_getFirewallFirewallStatusCapacityUsageSummary {
  // Capacity usage of CIDR blocks used by IP set references in a firewall.
  cidrs?: Array<networkfirewall_getFirewallFirewallStatusCapacityUsageSummaryCidr>;
}

export function networkfirewall_getFirewallFirewallStatusCapacityUsageSummary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "cidrs",
      "Capacity usage of CIDR blocks used by IP set references in a firewall.",
      networkfirewall_getFirewallFirewallStatusCapacityUsageSummaryCidr_GetTypes(),
      true,
      false,
    ),
  ];
}
