import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_OrganizationSecurityPolicyRuleMatchConfig,
  Compute_OrganizationSecurityPolicyRuleMatchConfig_GetTypes,
} from "./Compute_OrganizationSecurityPolicyRuleMatchConfig";

export interface Compute_OrganizationSecurityPolicyRuleMatch {
  /*
The configuration options for matching the rule.
Structure is documented below.
*/
  Config?: Compute_OrganizationSecurityPolicyRuleMatchConfig;

  // A description of the rule.
  Description?: string;

  /*
Preconfigured versioned expression. For organization security policy rules,
the only supported type is "FIREWALL".
Default value is `FIREWALL`.
Possible values are: `FIREWALL`.
*/
  VersionedExpr?: string;
}

export function Compute_OrganizationSecurityPolicyRuleMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Config",
      "The configuration options for matching the rule.\nStructure is documented below.",
      Compute_OrganizationSecurityPolicyRuleMatchConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "A description of the rule.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "VersionedExpr",
      'Preconfigured versioned expression. For organization security policy rules,\nthe only supported type is "FIREWALL".\nDefault value is `FIREWALL`.\nPossible values are: `FIREWALL`.',
      [],
      false,
      false,
    ),
  ];
}
