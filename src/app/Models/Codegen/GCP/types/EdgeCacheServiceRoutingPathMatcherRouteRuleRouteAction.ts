import { EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy } from "./EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy";
import { EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite } from "./EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite";
import { EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy } from "./EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy";

export interface EdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction {
  /*
The policy to use for defining caching and signed request behaviour for requests that match this route.
Structure is documented below.
*/
  CdnPolicy?: EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy;

  /*
CORSPolicy defines Cross-Origin-Resource-Sharing configuration, including which CORS response headers will be set.
Structure is documented below.
*/
  CorsPolicy?: EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy;

  /*
The URL rewrite configuration for requests that match this route.
Structure is documented below.
*/
  UrlRewrite?: EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite;
}
