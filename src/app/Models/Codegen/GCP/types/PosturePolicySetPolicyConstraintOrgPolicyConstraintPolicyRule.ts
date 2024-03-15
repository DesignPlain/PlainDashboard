import { PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRuleValues } from "./PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRuleValues";
import { PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRuleCondition } from "./PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRuleCondition";

export interface PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRule {
  // Setting this to true means that all values are denied. This field can be set only in policies for list constraints.
  DenyAll?: boolean;

  /*
If `true`, then the policy is enforced. If `false`, then any configuration is acceptable.
This field can be set only in policies for boolean constraints.
*/
  Enforce?: boolean;

  /*
List of values to be used for this policy rule. This field can be set only in policies for list constraints.
Structure is documented below.
*/
  Values?: PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRuleValues;

  // Setting this to true means that all values are allowed. This field can be set only in policies for list constraints.
  AllowAll?: boolean;

  /*
Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language.
This page details the objects and attributes that are used to the build the CEL expressions for
custom access levels - https://cloud.google.com/access-context-manager/docs/custom-access-level-spec.
Structure is documented below.
*/
  Condition?: PosturePolicySetPolicyConstraintOrgPolicyConstraintPolicyRuleCondition;
}
