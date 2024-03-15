export interface ApiKeyRestrictionsBrowserKeyRestrictions {
  // A list of regular expressions for the referrer URLs that are allowed to make API calls with this key.
  AllowedReferrers?: Array<string>;
}
