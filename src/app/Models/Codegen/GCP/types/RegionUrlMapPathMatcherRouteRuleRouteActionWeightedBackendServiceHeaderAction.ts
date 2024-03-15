import { RegionUrlMapPathMatcherRouteRuleRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd } from "./RegionUrlMapPathMatcherRouteRuleRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd";
import { RegionUrlMapPathMatcherRouteRuleRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd } from "./RegionUrlMapPathMatcherRouteRuleRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd";

export interface RegionUrlMapPathMatcherRouteRuleRouteActionWeightedBackendServiceHeaderAction {
  /*
Headers to add to a matching request before forwarding the request to the backendService.
Structure is documented below.
*/
  RequestHeadersToAdds?: Array<RegionUrlMapPathMatcherRouteRuleRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd>;

  // A list of header names for headers that need to be removed from the request before forwarding the request to the backendService.
  RequestHeadersToRemoves?: Array<string>;

  /*
Headers to add the response before sending the response back to the client.
Structure is documented below.
*/
  ResponseHeadersToAdds?: Array<RegionUrlMapPathMatcherRouteRuleRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd>;

  // A list of header names for headers that need to be removed from the response before sending the response back to the client.
  ResponseHeadersToRemoves?: Array<string>;
}
