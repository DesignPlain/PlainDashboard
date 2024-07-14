import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  networkfirewall_FirewallFirewallStatusSyncStateAttachment,
  networkfirewall_FirewallFirewallStatusSyncStateAttachment_GetTypes,
} from "./networkfirewall_FirewallFirewallStatusSyncStateAttachment";

export interface networkfirewall_FirewallFirewallStatusSyncState {
  // Nested list describing the attachment status of the firewall's association with a single VPC subnet.
  attachments?: Array<networkfirewall_FirewallFirewallStatusSyncStateAttachment>;

  // The Availability Zone where the subnet is configured.
  availabilityZone?: string;
}

export function networkfirewall_FirewallFirewallStatusSyncState_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "attachments",
      "Nested list describing the attachment status of the firewall's association with a single VPC subnet.",
      networkfirewall_FirewallFirewallStatusSyncStateAttachment_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "availabilityZone",
      "The Availability Zone where the subnet is configured.",
      [],
      false,
      false,
    ),
  ];
}
