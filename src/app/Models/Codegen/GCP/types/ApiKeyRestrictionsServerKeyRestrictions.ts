export interface ApiKeyRestrictionsServerKeyRestrictions {
  // A list of the caller IP addresses that are allowed to make API calls with this key.
  AllowedIps?: Array<string>;
}
