import { AccessBoundaryPolicyRuleAccessBoundaryRule } from "./AccessBoundaryPolicyRuleAccessBoundaryRule";

export interface AccessBoundaryPolicyRule {
  /*
An access boundary rule in an IAM policy.
Structure is documented below.
*/
  AccessBoundaryRule?: AccessBoundaryPolicyRuleAccessBoundaryRule;

  // The description of the rule.
  Description?: string;
}
