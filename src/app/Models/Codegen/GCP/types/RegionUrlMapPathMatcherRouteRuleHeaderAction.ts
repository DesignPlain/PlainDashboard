import { RegionUrlMapPathMatcherRouteRuleHeaderActionRequestHeadersToAdd } from "./RegionUrlMapPathMatcherRouteRuleHeaderActionRequestHeadersToAdd";
import { RegionUrlMapPathMatcherRouteRuleHeaderActionResponseHeadersToAdd } from "./RegionUrlMapPathMatcherRouteRuleHeaderActionResponseHeadersToAdd";

export interface RegionUrlMapPathMatcherRouteRuleHeaderAction {
  /*
Headers to add to a matching request before forwarding the request to the backendService.
Structure is documented below.
*/
  RequestHeadersToAdds?: Array<RegionUrlMapPathMatcherRouteRuleHeaderActionRequestHeadersToAdd>;

  // A list of header names for headers that need to be removed from the request before forwarding the request to the backendService.
  RequestHeadersToRemoves?: Array<string>;

  /*
Headers to add the response before sending the response back to the client.
Structure is documented below.
*/
  ResponseHeadersToAdds?: Array<RegionUrlMapPathMatcherRouteRuleHeaderActionResponseHeadersToAdd>;

  // A list of header names for headers that need to be removed from the response before sending the response back to the client.
  ResponseHeadersToRemoves?: Array<string>;
}
