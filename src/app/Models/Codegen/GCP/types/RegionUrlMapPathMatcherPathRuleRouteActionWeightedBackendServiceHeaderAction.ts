import { RegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd } from "./RegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd";
import { RegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd } from "./RegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd";

export interface RegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServiceHeaderAction {
  /*
Headers to add to a matching request before forwarding the request to the backendService.
Structure is documented below.
*/
  RequestHeadersToAdds?: Array<RegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd>;

  // A list of header names for headers that need to be removed from the request before forwarding the request to the backendService.
  RequestHeadersToRemoves?: Array<string>;

  /*
Headers to add the response before sending the response back to the client.
Structure is documented below.
*/
  ResponseHeadersToAdds?: Array<RegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd>;

  // A list of header names for headers that need to be removed from the response before sending the response back to the client.
  ResponseHeadersToRemoves?: Array<string>;
}
