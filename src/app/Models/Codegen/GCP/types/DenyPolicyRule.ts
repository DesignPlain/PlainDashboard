import { DenyPolicyRuleDenyRule } from "./DenyPolicyRuleDenyRule";

export interface DenyPolicyRule {
  /*
A deny rule in an IAM deny policy.
Structure is documented below.
*/
  DenyRule?: DenyPolicyRuleDenyRule;

  // The description of the rule.
  Description?: string;
}
