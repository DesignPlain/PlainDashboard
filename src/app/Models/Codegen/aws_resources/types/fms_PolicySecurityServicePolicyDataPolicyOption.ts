import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  fms_PolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy,
  fms_PolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy_GetTypes,
} from "./fms_PolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy";
import {
  fms_PolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy,
  fms_PolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy_GetTypes,
} from "./fms_PolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy";

export interface fms_PolicySecurityServicePolicyDataPolicyOption {
  // Defines the deployment model to use for the firewall policy. Documented below.
  networkFirewallPolicy?: fms_PolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy;

  //
  thirdPartyFirewallPolicy?: fms_PolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy;
}

export function fms_PolicySecurityServicePolicyDataPolicyOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "networkFirewallPolicy",
      "Defines the deployment model to use for the firewall policy. Documented below.",
      fms_PolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "thirdPartyFirewallPolicy",
      "",
      fms_PolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy_GetTypes(),
      false,
      false,
    ),
  ];
}
