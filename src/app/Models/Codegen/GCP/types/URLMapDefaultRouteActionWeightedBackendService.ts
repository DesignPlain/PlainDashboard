import { URLMapDefaultRouteActionWeightedBackendServiceHeaderAction } from "./URLMapDefaultRouteActionWeightedBackendServiceHeaderAction";

export interface URLMapDefaultRouteActionWeightedBackendService {
  /*
Specifies the fraction of traffic sent to backendService, computed as
weight / (sum of all weightedBackendService weights in routeAction) .
The selection of a backend service is determined only for new traffic. Once a user's request
has been directed to a backendService, subsequent requests will be sent to the same backendService
as determined by the BackendService's session affinity policy.
The value must be between 0 and 1000
*/
  Weight?: number;

  /*
The full or partial URL to the default BackendService resource. Before forwarding the
request to backendService, the loadbalancer applies any relevant headerActions
specified as part of this backendServiceWeight.
*/
  BackendService?: string;

  /*
Specifies changes to request and response headers that need to take effect for
the selected backendService.
headerAction specified here take effect before headerAction in the enclosing
HttpRouteRule, PathMatcher and UrlMap.
Structure is documented below.
*/
  HeaderAction?: URLMapDefaultRouteActionWeightedBackendServiceHeaderAction;
}
