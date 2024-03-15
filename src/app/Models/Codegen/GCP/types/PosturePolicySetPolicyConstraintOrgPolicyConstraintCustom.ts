import { PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomCustomConstraint } from "./PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomCustomConstraint";
import { PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRule } from "./PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRule";

export interface PosturePolicySetPolicyConstraintOrgPolicyConstraintCustom {
  /*
Organization policy custom constraint definition.
Structure is documented below.
*/
  CustomConstraint?: PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomCustomConstraint;

  /*
Definition of policy rules
Structure is documented below.
*/
  PolicyRules?: Array<PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRule>;
}
