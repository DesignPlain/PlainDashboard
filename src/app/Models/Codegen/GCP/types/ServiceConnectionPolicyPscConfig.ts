export interface ServiceConnectionPolicyPscConfig {
  // Max number of PSC connections for this policy.
  Limit?: string;

  // IDs of the subnetworks or fully qualified identifiers for the subnetworks
  Subnetworks?: Array<string>;
}
