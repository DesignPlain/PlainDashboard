export interface EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch {
  // The value of the header must end with the contents of suffixMatch.
  SuffixMatch?: string;

  // The value of the header should exactly match contents of exactMatch.
  ExactMatch?: string;

  // The header name to match on.
  HeaderName?: string;

  /*
If set to false (default), the headerMatch is considered a match if the match criteria above are met.
If set to true, the headerMatch is considered a match if the match criteria above are NOT met.
*/
  InvertMatch?: boolean;

  // The value of the header must start with the contents of prefixMatch.
  PrefixMatch?: string;

  // A header with the contents of headerName must exist. The match takes place whether or not the request's header has a value.
  PresentMatch?: boolean;
}
