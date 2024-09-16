import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  fms_PolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy,
  fms_PolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy_GetTypes,
} from './fms_PolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy';
import {
  fms_PolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy,
  fms_PolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy_GetTypes,
} from './fms_PolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy';

export interface fms_PolicySecurityServicePolicyDataPolicyOption {
  //
  thirdPartyFirewallPolicy?: fms_PolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy;

  // Defines the deployment model to use for the firewall policy. Documented below.
  networkFirewallPolicy?: fms_PolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy;
}

export function fms_PolicySecurityServicePolicyDataPolicyOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'thirdPartyFirewallPolicy',
      '',
      () =>
        fms_PolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'networkFirewallPolicy',
      'Defines the deployment model to use for the firewall policy. Documented below.',
      () =>
        fms_PolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy_GetTypes(),
      false,
      false,
    ),
  ];
}
