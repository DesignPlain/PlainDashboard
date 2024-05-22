import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_URLMapDefaultRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd,
  compute_URLMapDefaultRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd_GetTypes,
} from "./compute_URLMapDefaultRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd";
import {
  compute_URLMapDefaultRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd,
  compute_URLMapDefaultRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd_GetTypes,
} from "./compute_URLMapDefaultRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd";

export interface compute_URLMapDefaultRouteActionWeightedBackendServiceHeaderAction {
  /*
Headers to add to a matching request prior to forwarding the request to the backendService.
Structure is documented below.
*/
  requestHeadersToAdds?: Array<compute_URLMapDefaultRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd>;

  /*
A list of header names for headers that need to be removed from the request prior to
forwarding the request to the backendService.
*/
  requestHeadersToRemoves?: Array<string>;

  /*
Headers to add the response prior to sending the response back to the client.
Structure is documented below.
*/
  responseHeadersToAdds?: Array<compute_URLMapDefaultRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd>;

  /*
A list of header names for headers that need to be removed from the response prior to sending the
response back to the client.
*/
  responseHeadersToRemoves?: Array<string>;
}

export function compute_URLMapDefaultRouteActionWeightedBackendServiceHeaderAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "requestHeadersToAdds",
      "Headers to add to a matching request prior to forwarding the request to the backendService.\nStructure is documented below.",
      compute_URLMapDefaultRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd_GetTypes(),
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
      compute_URLMapDefaultRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd_GetTypes(),
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
