import { PosturePolicySetPolicyConstraintOrgPolicyConstraintCustom } from "./PosturePolicySetPolicyConstraintOrgPolicyConstraintCustom";
import { PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModule } from "./PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModule";
import { PosturePolicySetPolicyConstraintSecurityHealthAnalyticsModule } from "./PosturePolicySetPolicyConstraintSecurityHealthAnalyticsModule";
import { PosturePolicySetPolicyConstraintOrgPolicyConstraint } from "./PosturePolicySetPolicyConstraintOrgPolicyConstraint";

export interface PosturePolicySetPolicyConstraint {
  /*
Organization policy canned constraint definition.
Structure is documented below.
*/
  OrgPolicyConstraint?: PosturePolicySetPolicyConstraintOrgPolicyConstraint;

  /*
Organization policy custom constraint policy definition.
Structure is documented below.
*/
  OrgPolicyConstraintCustom?: PosturePolicySetPolicyConstraintOrgPolicyConstraintCustom;

  /*
Definition of Security Health Analytics Custom Module.
Structure is documented below.
*/
  SecurityHealthAnalyticsCustomModule?: PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModule;

  /*
Security Health Analytics built-in detector definition.
Structure is documented below.
*/
  SecurityHealthAnalyticsModule?: PosturePolicySetPolicyConstraintSecurityHealthAnalyticsModule;
}
