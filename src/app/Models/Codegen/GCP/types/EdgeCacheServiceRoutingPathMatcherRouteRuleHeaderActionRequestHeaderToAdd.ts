export interface EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd {
  // The name of the header to add.
  HeaderName?: string;

  // The value of the header to add.
  HeaderValue?: string;

  // Whether to replace all existing headers with the same name.
  Replace?: boolean;
}
