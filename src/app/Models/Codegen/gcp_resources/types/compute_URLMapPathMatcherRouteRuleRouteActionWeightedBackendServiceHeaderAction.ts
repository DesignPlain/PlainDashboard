import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  compute_URLMapPathMatcherRouteRuleRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd,
  compute_URLMapPathMatcherRouteRuleRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd_GetTypes,
} from "./compute_URLMapPathMatcherRouteRuleRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd";
import {
  compute_URLMapPathMatcherRouteRuleRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd,
  compute_URLMapPathMatcherRouteRuleRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd_GetTypes,
} from "./compute_URLMapPathMatcherRouteRuleRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd";

export interface compute_URLMapPathMatcherRouteRuleRouteActionWeightedBackendServiceHeaderAction {
  /*
A list of header names for headers that need to be removed from the request prior to
forwarding the request to the backendService.
*/
  requestHeadersToRemoves?: Array<string>;

  /*
Headers to add the response prior to sending the response back to the client.
Structure is documented below.
*/
  responseHeadersToAdds?: Array<compute_URLMapPathMatcherRouteRuleRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd>;

  /*
A list of header names for headers that need to be removed from the response prior to sending the
response back to the client.
*/
  responseHeadersToRemoves?: Array<string>;

  /*
Headers to add to a matching request prior to forwarding the request to the backendService.
Structure is documented below.
*/
  requestHeadersToAdds?: Array<compute_URLMapPathMatcherRouteRuleRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd>;
}

export function compute_URLMapPathMatcherRouteRuleRouteActionWeightedBackendServiceHeaderAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "requestHeadersToAdds",
      "Headers to add to a matching request prior to forwarding the request to the backendService.\nStructure is documented below.",
      compute_URLMapPathMatcherRouteRuleRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "requestHeadersToRemoves",
      "A list of header names for headers that need to be removed from the request prior to\nforwarding the request to the backendService.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "responseHeadersToAdds",
      "Headers to add the response prior to sending the response back to the client.\nStructure is documented below.",
      compute_URLMapPathMatcherRouteRuleRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "responseHeadersToRemoves",
      "A list of header names for headers that need to be removed from the response prior to sending the\nresponse back to the client.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
