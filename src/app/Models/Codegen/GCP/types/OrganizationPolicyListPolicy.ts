import { OrganizationPolicyListPolicyAllow } from "./OrganizationPolicyListPolicyAllow";
import { OrganizationPolicyListPolicyDeny } from "./OrganizationPolicyListPolicyDeny";

export interface OrganizationPolicyListPolicy {
  // or `deny` - (Optional) One or the other must be set.
  Allow?: OrganizationPolicyListPolicyAllow;

  // One or the other must be set.
  Deny?: OrganizationPolicyListPolicyDeny;

  /*
If set to true, the values from the effective Policy of the parent resource
are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.

The `allow` or `deny` blocks support:
*/
  InheritFromParent?: boolean;

  // The Google Cloud Console will try to default to a configuration that matches the value specified in this field.
  SuggestedValue?: string;
}
