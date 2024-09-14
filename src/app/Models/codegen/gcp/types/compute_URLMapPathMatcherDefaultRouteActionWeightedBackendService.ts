import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_URLMapPathMatcherDefaultRouteActionWeightedBackendServiceHeaderAction,
  compute_URLMapPathMatcherDefaultRouteActionWeightedBackendServiceHeaderAction_GetTypes,
} from "./compute_URLMapPathMatcherDefaultRouteActionWeightedBackendServiceHeaderAction";

export interface compute_URLMapPathMatcherDefaultRouteActionWeightedBackendService {
  /*
The full or partial URL to the default BackendService resource. Before forwarding the
request to backendService, the loadbalancer applies any relevant headerActions
specified as part of this backendServiceWeight.
*/
  backendService?: string;

  /*
Specifies changes to request and response headers that need to take effect for
the selected backendService.
headerAction specified here take effect before headerAction in the enclosing
HttpRouteRule, PathMatcher and UrlMap.
Structure is documented below.
*/
  headerAction?: compute_URLMapPathMatcherDefaultRouteActionWeightedBackendServiceHeaderAction;

  /*
Specifies the fraction of traffic sent to backendService, computed as
weight / (sum of all weightedBackendService weights in routeAction) .
The selection of a backend service is determined only for new traffic. Once a user's request
has been directed to a backendService, subsequent requests will be sent to the same backendService
as determined by the BackendService's session affinity policy.
The value must be between 0 and 1000
*/
  weight?: number;
}

export function compute_URLMapPathMatcherDefaultRouteActionWeightedBackendService_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "backendService",
      "The full or partial URL to the default BackendService resource. Before forwarding the\nrequest to backendService, the loadbalancer applies any relevant headerActions\nspecified as part of this backendServiceWeight.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "headerAction",
      "Specifies changes to request and response headers that need to take effect for\nthe selected backendService.\nheaderAction specified here take effect before headerAction in the enclosing\nHttpRouteRule, PathMatcher and UrlMap.\nStructure is documented below.",
      () =>
        compute_URLMapPathMatcherDefaultRouteActionWeightedBackendServiceHeaderAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "weight",
      "Specifies the fraction of traffic sent to backendService, computed as\nweight / (sum of all weightedBackendService weights in routeAction) .\nThe selection of a backend service is determined only for new traffic. Once a user's request\nhas been directed to a backendService, subsequent requests will be sent to the same backendService\nas determined by the BackendService's session affinity policy.\nThe value must be between 0 and 1000",
      () => [],
      false,
      false,
    ),
  ];
}
