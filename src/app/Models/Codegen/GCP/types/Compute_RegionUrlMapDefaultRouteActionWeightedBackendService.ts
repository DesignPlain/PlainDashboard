import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_RegionUrlMapDefaultRouteActionWeightedBackendServiceHeaderAction,
  Compute_RegionUrlMapDefaultRouteActionWeightedBackendServiceHeaderAction_GetTypes,
} from "./Compute_RegionUrlMapDefaultRouteActionWeightedBackendServiceHeaderAction";

export interface Compute_RegionUrlMapDefaultRouteActionWeightedBackendService {
  // The full or partial URL to the default BackendService resource. Before forwarding the request to backendService, the load balancer applies any relevant headerActions specified as part of this backendServiceWeight.
  BackendService?: string;

  /*
Specifies changes to request and response headers that need to take effect for the selected backendService.
headerAction specified here take effect before headerAction in the enclosing HttpRouteRule, PathMatcher and UrlMap.
headerAction is not supported for load balancers that have their loadBalancingScheme set to EXTERNAL.
Not supported when the URL map is bound to a target gRPC proxy that has validateForProxyless field set to true.
Structure is documented below.
*/
  HeaderAction?: Compute_RegionUrlMapDefaultRouteActionWeightedBackendServiceHeaderAction;

  /*
Specifies the fraction of traffic sent to a backend service, computed as weight / (sum of all weightedBackendService weights in routeAction) .
The selection of a backend service is determined only for new traffic. Once a user's request has been directed to a backend service, subsequent requests are sent to the same backend service as determined by the backend service's session affinity policy.
The value must be from 0 to 1000.
*/
  Weight?: number;
}

export function Compute_RegionUrlMapDefaultRouteActionWeightedBackendService_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "BackendService",
      "The full or partial URL to the default BackendService resource. Before forwarding the request to backendService, the load balancer applies any relevant headerActions specified as part of this backendServiceWeight.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "HeaderAction",
      "Specifies changes to request and response headers that need to take effect for the selected backendService.\nheaderAction specified here take effect before headerAction in the enclosing HttpRouteRule, PathMatcher and UrlMap.\nheaderAction is not supported for load balancers that have their loadBalancingScheme set to EXTERNAL.\nNot supported when the URL map is bound to a target gRPC proxy that has validateForProxyless field set to true.\nStructure is documented below.",
      Compute_RegionUrlMapDefaultRouteActionWeightedBackendServiceHeaderAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Weight",
      "Specifies the fraction of traffic sent to a backend service, computed as weight / (sum of all weightedBackendService weights in routeAction) .\nThe selection of a backend service is determined only for new traffic. Once a user's request has been directed to a backend service, subsequent requests are sent to the same backend service as determined by the backend service's session affinity policy.\nThe value must be from 0 to 1000.",
      [],
      false,
      false,
    ),
  ];
}
