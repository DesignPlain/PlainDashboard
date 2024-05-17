import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_RegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd,
  Compute_RegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd_GetTypes,
} from "./Compute_RegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd";
import {
  Compute_RegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd,
  Compute_RegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd_GetTypes,
} from "./Compute_RegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd";

export interface Compute_RegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServiceHeaderAction {
  /*
Headers to add the response before sending the response back to the client.
Structure is documented below.
*/
  ResponseHeadersToAdds?: Array<Compute_RegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd>;

  // A list of header names for headers that need to be removed from the response before sending the response back to the client.
  ResponseHeadersToRemoves?: Array<string>;

  /*
Headers to add to a matching request before forwarding the request to the backendService.
Structure is documented below.
*/
  RequestHeadersToAdds?: Array<Compute_RegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd>;

  // A list of header names for headers that need to be removed from the request before forwarding the request to the backendService.
  RequestHeadersToRemoves?: Array<string>;
}

export function Compute_RegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServiceHeaderAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ResponseHeadersToAdds",
      "Headers to add the response before sending the response back to the client.\nStructure is documented below.",
      Compute_RegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ResponseHeadersToRemoves",
      "A list of header names for headers that need to be removed from the response before sending the response back to the client.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "RequestHeadersToAdds",
      "Headers to add to a matching request before forwarding the request to the backendService.\nStructure is documented below.",
      Compute_RegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "RequestHeadersToRemoves",
      "A list of header names for headers that need to be removed from the request before forwarding the request to the backendService.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
