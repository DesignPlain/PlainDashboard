import { EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch } from "./EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch";
import { EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch } from "./EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch";

export interface EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule {
  /*
For satisfying the matchRule condition, the path of the request
must match the wildcard pattern specified in pathTemplateMatch
after removing any query parameters and anchor that may be part
of the original URL.
pathTemplateMatch must be between 1 and 255 characters
(inclusive).  The pattern specified by pathTemplateMatch may
have at most 5 wildcard operators and at most 5 variable
captures in total.
*/
  PathTemplateMatch?: string;

  // For satisfying the matchRule condition, the request's path must begin with the specified prefixMatch. prefixMatch must begin with a /.
  PrefixMatch?: string;

  /*
Specifies a list of query parameter match criteria, all of which must match corresponding query parameters in the request.
Structure is documented below.
*/
  QueryParameterMatches?: Array<EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch>;

  // For satisfying the matchRule condition, the path of the request must exactly match the value specified in fullPathMatch after removing any query parameters and anchor that may be part of the original URL.
  FullPathMatch?: string;

  /*
Specifies a list of header match criteria, all of which must match corresponding headers in the request.
Structure is documented below.
*/
  HeaderMatches?: Array<EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch>;

  // Specifies that prefixMatch and fullPathMatch matches are case sensitive.
  IgnoreCase?: boolean;
}
