import { PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRule } from "./PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRule";

export interface PosturePolicySetPolicyConstraintOrgPolicyConstraint {
  // Organization policy canned constraint Id
  CannedConstraintId?: string;

  /*
Definition of policy rules
Structure is documented below.
*/
  PolicyRules?: Array<PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRule>;
}
