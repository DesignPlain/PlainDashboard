import { SecurityPolicyRulePreconfiguredWafConfigExclusion } from "./SecurityPolicyRulePreconfiguredWafConfigExclusion";

export interface SecurityPolicyRulePreconfiguredWafConfig {
  // An exclusion to apply during preconfigured WAF evaluation. Structure is documented below.
  Exclusions?: Array<SecurityPolicyRulePreconfiguredWafConfigExclusion>;
}
