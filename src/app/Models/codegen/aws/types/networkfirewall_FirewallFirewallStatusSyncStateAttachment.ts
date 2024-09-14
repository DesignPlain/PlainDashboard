import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface networkfirewall_FirewallFirewallStatusSyncStateAttachment {
  // The identifier of the firewall endpoint that AWS Network Firewall has instantiated in the subnet. You use this to identify the firewall endpoint in the VPC route tables, when you redirect the VPC traffic through the endpoint.
  endpointId?: string;

  // The unique identifier of the subnet that you've specified to be used for a firewall endpoint.
  subnetId?: string;
}

export function networkfirewall_FirewallFirewallStatusSyncStateAttachment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "endpointId",
      "The identifier of the firewall endpoint that AWS Network Firewall has instantiated in the subnet. You use this to identify the firewall endpoint in the VPC route tables, when you redirect the VPC traffic through the endpoint.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subnetId",
      "The unique identifier of the subnet that you've specified to be used for a firewall endpoint.",
      () => [],
      false,
      false,
    ),
  ];
}
