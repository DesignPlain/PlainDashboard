import { getOrganizationPolicyListPolicyAllow } from "./getOrganizationPolicyListPolicyAllow";
import { getOrganizationPolicyListPolicyDeny } from "./getOrganizationPolicyListPolicyDeny";

export interface getOrganizationPolicyListPolicy {
  // One or the other must be set.
  Allows?: Array<getOrganizationPolicyListPolicyAllow>;

  // One or the other must be set.
  Denies?: Array<getOrganizationPolicyListPolicyDeny>;

  // If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.
  InheritFromParent?: boolean;

  // The Google Cloud Console will try to default to a configuration that matches the value specified in this field.
  SuggestedValue?: string;
}
