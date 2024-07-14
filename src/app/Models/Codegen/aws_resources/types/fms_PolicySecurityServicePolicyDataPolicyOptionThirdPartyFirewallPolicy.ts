import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface fms_PolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy {
  // Defines the deployment model to use for the third-party firewall policy. Valid values are `CENTRALIZED` and `DISTRIBUTED`.
  firewallDeploymentModel?: string;
}

export function fms_PolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "firewallDeploymentModel",
      "Defines the deployment model to use for the third-party firewall policy. Valid values are `CENTRALIZED` and `DISTRIBUTED`.",
      [],
      false,
      false,
    ),
  ];
}
