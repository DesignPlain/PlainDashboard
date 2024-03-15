import { OrganizationSecurityPolicyRuleMatchConfig } from "./OrganizationSecurityPolicyRuleMatchConfig";

export interface OrganizationSecurityPolicyRuleMatch {
  /*
The configuration options for matching the rule.
Structure is documented below.
*/
  Config?: OrganizationSecurityPolicyRuleMatchConfig;

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
