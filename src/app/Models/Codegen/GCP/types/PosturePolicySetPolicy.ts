import { PosturePolicySetPolicyComplianceStandard } from "./PosturePolicySetPolicyComplianceStandard";
import { PosturePolicySetPolicyConstraint } from "./PosturePolicySetPolicyConstraint";

export interface PosturePolicySetPolicy {
  // Description of the policy.
  Description?: string;

  // ID of the policy.
  PolicyId?: string;

  /*
Mapping for policy to security standards and controls.
Structure is documented below.
*/
  ComplianceStandards?: Array<PosturePolicySetPolicyComplianceStandard>;

  /*
Policy constraint definition.It can have the definition of one of following constraints: orgPolicyConstraint orgPolicyConstraintCustom securityHealthAnalyticsModule securityHealthAnalyticsCustomModule
Structure is documented below.
*/
  Constraint?: PosturePolicySetPolicyConstraint;
}
