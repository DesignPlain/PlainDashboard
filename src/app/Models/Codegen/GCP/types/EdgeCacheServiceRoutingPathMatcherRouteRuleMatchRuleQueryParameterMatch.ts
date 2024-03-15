export interface EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch {
  // The queryParameterMatch matches if the value of the parameter exactly matches the contents of exactMatch.
  ExactMatch?: string;

  // The name of the query parameter to match. The query parameter must exist in the request, in the absence of which the request match fails.
  Name?: string;

  // Specifies that the queryParameterMatch matches if the request contains the query parameter, irrespective of whether the parameter has a value or not.
  PresentMatch?: boolean;
}
