import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_RegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServiceHeaderAction,
  compute_RegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServiceHeaderAction_GetTypes,
} from './compute_RegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServiceHeaderAction';

export interface compute_RegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendService {
  /*
Specifies changes to request and response headers that need to take effect for the selected backendService.
headerAction specified here take effect before headerAction in the enclosing HttpRouteRule, PathMatcher and UrlMap.
headerAction is not supported for load balancers that have their loadBalancingScheme set to EXTERNAL.
Not supported when the URL map is bound to a target gRPC proxy that has validateForProxyless field set to true.
Structure is documented below.
*/
  headerAction?: compute_RegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServiceHeaderAction;

  /*
Specifies the fraction of traffic sent to a backend service, computed as weight / (sum of all weightedBackendService weights in routeAction) .
The selection of a backend service is determined only for new traffic. Once a user's request has been directed to a backend service, subsequent requests are sent to the same backend service as determined by the backend service's session affinity policy.
The value must be from 0 to 1000.
*/
  weight?: number;

  // The full or partial URL to the default BackendService resource. Before forwarding the request to backendService, the load balancer applies any relevant headerActions specified as part of this backendServiceWeight.
  backendService?: string;
}

export function compute_RegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendService_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'headerAction',
      'Specifies changes to request and response headers that need to take effect for the selected backendService.\nheaderAction specified here take effect before headerAction in the enclosing HttpRouteRule, PathMatcher and UrlMap.\nheaderAction is not supported for load balancers that have their loadBalancingScheme set to EXTERNAL.\nNot supported when the URL map is bound to a target gRPC proxy that has validateForProxyless field set to true.\nStructure is documented below.',
      () =>
        compute_RegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServiceHeaderAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'weight',
      "Specifies the fraction of traffic sent to a backend service, computed as weight / (sum of all weightedBackendService weights in routeAction) .\nThe selection of a backend service is determined only for new traffic. Once a user's request has been directed to a backend service, subsequent requests are sent to the same backend service as determined by the backend service's session affinity policy.\nThe value must be from 0 to 1000.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'backendService',
      'The full or partial URL to the default BackendService resource. Before forwarding the request to backendService, the load balancer applies any relevant headerActions specified as part of this backendServiceWeight.',
      () => [],
      true,
      false,
    ),
  ];
}
