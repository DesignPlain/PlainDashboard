import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  networkfirewall_getFirewallFirewallStatusCapacityUsageSummaryCidrIpSetReference,
  networkfirewall_getFirewallFirewallStatusCapacityUsageSummaryCidrIpSetReference_GetTypes,
} from "./networkfirewall_getFirewallFirewallStatusCapacityUsageSummaryCidrIpSetReference";

export interface networkfirewall_getFirewallFirewallStatusCapacityUsageSummaryCidr {
  // Available number of CIDR blocks available for use by the IP set references in a firewall.
  availableCidrCount?: number;

  // The list of IP set references used by a firewall.
  ipSetReferences?: Array<networkfirewall_getFirewallFirewallStatusCapacityUsageSummaryCidrIpSetReference>;

  // Number of CIDR blocks used by the IP set references in a firewall.
  utilizedCidrCount?: number;
}

export function networkfirewall_getFirewallFirewallStatusCapacityUsageSummaryCidr_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "availableCidrCount",
      "Available number of CIDR blocks available for use by the IP set references in a firewall.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ipSetReferences",
      "The list of IP set references used by a firewall.",
      () =>
        networkfirewall_getFirewallFirewallStatusCapacityUsageSummaryCidrIpSetReference_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "utilizedCidrCount",
      "Number of CIDR blocks used by the IP set references in a firewall.",
      () => [],
      true,
      false,
    ),
  ];
}
