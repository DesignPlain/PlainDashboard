import { AccessBoundaryPolicyRuleAccessBoundaryRuleAvailabilityCondition } from "./AccessBoundaryPolicyRuleAccessBoundaryRuleAvailabilityCondition";

export interface AccessBoundaryPolicyRuleAccessBoundaryRule {
  /*
The availability condition further constrains the access allowed by the access boundary rule.
Structure is documented below.
*/
  AvailabilityCondition?: AccessBoundaryPolicyRuleAccessBoundaryRuleAvailabilityCondition;

  // A list of permissions that may be allowed for use on the specified resource.
  AvailablePermissions?: Array<string>;

  // The full resource name of a Google Cloud resource entity.
  AvailableResource?: string;
}
