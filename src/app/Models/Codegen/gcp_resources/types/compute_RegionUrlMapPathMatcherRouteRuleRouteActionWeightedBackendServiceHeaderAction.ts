import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_RegionUrlMapPathMatcherRouteRuleRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd,
  compute_RegionUrlMapPathMatcherRouteRuleRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd_GetTypes,
} from "./compute_RegionUrlMapPathMatcherRouteRuleRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd";
import {
  compute_RegionUrlMapPathMatcherRouteRuleRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd,
  compute_RegionUrlMapPathMatcherRouteRuleRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd_GetTypes,
} from "./compute_RegionUrlMapPathMatcherRouteRuleRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd";

export interface compute_RegionUrlMapPathMatcherRouteRuleRouteActionWeightedBackendServiceHeaderAction {
  /*
Headers to add to a matching request before forwarding the request to the backendService.
Structure is documented below.
*/
  requestHeadersToAdds?: Array<compute_RegionUrlMapPathMatcherRouteRuleRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd>;

  // A list of header names for headers that need to be removed from the request before forwarding the request to the backendService.
  requestHeadersToRemoves?: Array<string>;

  /*
Headers to add the response before sending the response back to the client.
Structure is documented below.
*/
  responseHeadersToAdds?: Array<compute_RegionUrlMapPathMatcherRouteRuleRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd>;

  // A list of header names for headers that need to be removed from the response before sending the response back to the client.
  responseHeadersToRemoves?: Array<string>;
}

export function compute_RegionUrlMapPathMatcherRouteRuleRouteActionWeightedBackendServiceHeaderAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "requestHeadersToAdds",
      "Headers to add to a matching request before forwarding the request to the backendService.\nStructure is documented below.",
      compute_RegionUrlMapPathMatcherRouteRuleRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "requestHeadersToRemoves",
      "A list of header names for headers that need to be removed from the request before forwarding the request to the backendService.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "responseHeadersToAdds",
      "Headers to add the response before sending the response back to the client.\nStructure is documented below.",
      compute_RegionUrlMapPathMatcherRouteRuleRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "responseHeadersToRemoves",
      "A list of header names for headers that need to be removed from the response before sending the response back to the client.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
