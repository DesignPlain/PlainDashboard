export interface getOrganizationPolicyListPolicyDeny {
  // The policy allows or denies all values.
  All?: boolean;

  // The policy can define specific values that are allowed or denied.
  Values?: Array<string>;
}
