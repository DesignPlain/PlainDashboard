import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_OrganizationSecurityPolicyRuleMatchConfig,
  compute_OrganizationSecurityPolicyRuleMatchConfig_GetTypes,
} from "./compute_OrganizationSecurityPolicyRuleMatchConfig";

export interface compute_OrganizationSecurityPolicyRuleMatch {
  /*
The configuration options for matching the rule.
Structure is documented below.
*/
  config?: compute_OrganizationSecurityPolicyRuleMatchConfig;

  // A description of the rule.
  description?: string;

  /*
Preconfigured versioned expression. For organization security policy rules,
the only supported type is "FIREWALL".
Default value is `FIREWALL`.
Possible values are: `FIREWALL`.
*/
  versionedExpr?: string;
}

export function compute_OrganizationSecurityPolicyRuleMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "versionedExpr",
      'Preconfigured versioned expression. For organization security policy rules,\nthe only supported type is "FIREWALL".\nDefault value is `FIREWALL`.\nPossible values are: `FIREWALL`.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "config",
      "The configuration options for matching the rule.\nStructure is documented below.",
      compute_OrganizationSecurityPolicyRuleMatchConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "A description of the rule.",
      [],
      false,
      false,
    ),
  ];
}
