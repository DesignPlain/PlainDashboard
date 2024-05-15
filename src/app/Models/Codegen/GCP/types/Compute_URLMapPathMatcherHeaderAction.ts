import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_URLMapPathMatcherHeaderActionResponseHeadersToAdd,
  Compute_URLMapPathMatcherHeaderActionResponseHeadersToAdd_GetTypes,
} from "./Compute_URLMapPathMatcherHeaderActionResponseHeadersToAdd";
import {
  Compute_URLMapPathMatcherHeaderActionRequestHeadersToAdd,
  Compute_URLMapPathMatcherHeaderActionRequestHeadersToAdd_GetTypes,
} from "./Compute_URLMapPathMatcherHeaderActionRequestHeadersToAdd";

export interface Compute_URLMapPathMatcherHeaderAction {
  /*
A list of header names for headers that need to be removed from the request prior to
forwarding the request to the backendService.
*/
  RequestHeadersToRemoves?: Array<string>;

  /*
Headers to add the response prior to sending the response back to the client.
Structure is documented below.
*/
  ResponseHeadersToAdds?: Array<Compute_URLMapPathMatcherHeaderActionResponseHeadersToAdd>;

  /*
A list of header names for headers that need to be removed from the response prior to sending the
response back to the client.
*/
  ResponseHeadersToRemoves?: Array<string>;

  /*
Headers to add to a matching request prior to forwarding the request to the backendService.
Structure is documented below.
*/
  RequestHeadersToAdds?: Array<Compute_URLMapPathMatcherHeaderActionRequestHeadersToAdd>;
}

export function Compute_URLMapPathMatcherHeaderAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "RequestHeadersToRemoves",
      "A list of header names for headers that need to be removed from the request prior to\nforwarding the request to the backendService.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ResponseHeadersToAdds",
      "Headers to add the response prior to sending the response back to the client.\nStructure is documented below.",
      Compute_URLMapPathMatcherHeaderActionResponseHeadersToAdd_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ResponseHeadersToRemoves",
      "A list of header names for headers that need to be removed from the response prior to sending the\nresponse back to the client.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "RequestHeadersToAdds",
      "Headers to add to a matching request prior to forwarding the request to the backendService.\nStructure is documented below.",
      Compute_URLMapPathMatcherHeaderActionRequestHeadersToAdd_GetTypes(),
      false,
      false,
    ),
  ];
}
