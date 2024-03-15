import { RegionUrlMapDefaultRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd } from "./RegionUrlMapDefaultRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd";
import { RegionUrlMapDefaultRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd } from "./RegionUrlMapDefaultRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd";

export interface RegionUrlMapDefaultRouteActionWeightedBackendServiceHeaderAction {
  /*
Headers to add the response before sending the response back to the client.
Structure is documented below.
*/
  ResponseHeadersToAdds?: Array<RegionUrlMapDefaultRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd>;

  // A list of header names for headers that need to be removed from the response before sending the response back to the client.
  ResponseHeadersToRemoves?: Array<string>;

  /*
Headers to add to a matching request before forwarding the request to the backendService.
Structure is documented below.
*/
  RequestHeadersToAdds?: Array<RegionUrlMapDefaultRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd>;

  // A list of header names for headers that need to be removed from the request before forwarding the request to the backendService.
  RequestHeadersToRemoves?: Array<string>;
}
