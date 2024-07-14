import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  networkfirewall_getFirewallFirewallStatusSyncStateAttachment,
  networkfirewall_getFirewallFirewallStatusSyncStateAttachment_GetTypes,
} from "./networkfirewall_getFirewallFirewallStatusSyncStateAttachment";

export interface networkfirewall_getFirewallFirewallStatusSyncState {
  // Nested list describing the attachment status of the firewall's association with a single VPC subnet.
  attachments?: Array<networkfirewall_getFirewallFirewallStatusSyncStateAttachment>;

  // The Availability Zone where the subnet is configured.
  availabilityZone?: string;
}

export function networkfirewall_getFirewallFirewallStatusSyncState_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "attachments",
      "Nested list describing the attachment status of the firewall's association with a single VPC subnet.",
      networkfirewall_getFirewallFirewallStatusSyncStateAttachment_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "availabilityZone",
      "The Availability Zone where the subnet is configured.",
      [],
      true,
      false,
    ),
  ];
}
