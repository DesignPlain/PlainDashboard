import { EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd } from "./EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd";
import { EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove } from "./EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove";
import { EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd } from "./EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd";
import { EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove } from "./EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove";

export interface EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction {
  /*
Describes a header to add.
Structure is documented below.
*/
  RequestHeaderToAdds?: Array<EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd>;

  /*
A list of header names for headers that need to be removed from the request prior to forwarding the request to the origin.
Structure is documented below.
*/
  RequestHeaderToRemoves?: Array<EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove>;

  /*
Headers to add to the response prior to sending it back to the client.
Response headers are only sent to the client, and do not have an effect on the cache serving the response.
Structure is documented below.
*/
  ResponseHeaderToAdds?: Array<EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd>;

  /*
A list of header names for headers that need to be removed from the request prior to forwarding the request to the origin.
Structure is documented below.
*/
  ResponseHeaderToRemoves?: Array<EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove>;
}
