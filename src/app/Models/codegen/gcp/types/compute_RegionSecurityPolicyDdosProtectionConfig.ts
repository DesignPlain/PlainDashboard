import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_RegionSecurityPolicyDdosProtectionConfig {
  /*
Google Cloud Armor offers the following options to help protect systems against DDoS attacks:
- STANDARD: basic always-on protection for network load balancers, protocol forwarding, or VMs with public IP addresses.
- ADVANCED: additional protections for Managed Protection Plus subscribers who use network load balancers, protocol forwarding, or VMs with public IP addresses.
- ADVANCED_PREVIEW: flag to enable the security policy in preview mode.
Possible values are: `ADVANCED`, `ADVANCED_PREVIEW`, `STANDARD`.
*/
  ddosProtection?: string;
}

export function compute_RegionSecurityPolicyDdosProtectionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ddosProtection",
      "Google Cloud Armor offers the following options to help protect systems against DDoS attacks:\n- STANDARD: basic always-on protection for network load balancers, protocol forwarding, or VMs with public IP addresses.\n- ADVANCED: additional protections for Managed Protection Plus subscribers who use network load balancers, protocol forwarding, or VMs with public IP addresses.\n- ADVANCED_PREVIEW: flag to enable the security policy in preview mode.\nPossible values are: `ADVANCED`, `ADVANCED_PREVIEW`, `STANDARD`.",
      () => [],
      true,
      false,
    ),
  ];
}
