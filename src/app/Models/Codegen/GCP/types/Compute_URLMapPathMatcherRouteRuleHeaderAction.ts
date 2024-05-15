import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_URLMapPathMatcherRouteRuleHeaderActionRequestHeadersToAdd,
  Compute_URLMapPathMatcherRouteRuleHeaderActionRequestHeadersToAdd_GetTypes,
} from "./Compute_URLMapPathMatcherRouteRuleHeaderActionRequestHeadersToAdd";
import {
  Compute_URLMapPathMatcherRouteRuleHeaderActionResponseHeadersToAdd,
  Compute_URLMapPathMatcherRouteRuleHeaderActionResponseHeadersToAdd_GetTypes,
} from "./Compute_URLMapPathMatcherRouteRuleHeaderActionResponseHeadersToAdd";

export interface Compute_URLMapPathMatcherRouteRuleHeaderAction {
  /*
Headers to add to a matching request prior to forwarding the request to the backendService.
Structure is documented below.
*/
  RequestHeadersToAdds?: Array<Compute_URLMapPathMatcherRouteRuleHeaderActionRequestHeadersToAdd>;

  /*
A list of header names for headers that need to be removed from the request prior to
forwarding the request to the backendService.
*/
  RequestHeadersToRemoves?: Array<string>;

  /*
Headers to add the response prior to sending the response back to the client.
Structure is documented below.
*/
  ResponseHeadersToAdds?: Array<Compute_URLMapPathMatcherRouteRuleHeaderActionResponseHeadersToAdd>;

  /*
A list of header names for headers that need to be removed from the response prior to sending the
response back to the client.
*/
  ResponseHeadersToRemoves?: Array<string>;
}

export function Compute_URLMapPathMatcherRouteRuleHeaderAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "RequestHeadersToAdds",
      "Headers to add to a matching request prior to forwarding the request to the backendService.\nStructure is documented below.",
      Compute_URLMapPathMatcherRouteRuleHeaderActionRequestHeadersToAdd_GetTypes(),
      false,
      false,
    ),
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
      Compute_URLMapPathMatcherRouteRuleHeaderActionResponseHeadersToAdd_GetTypes(),
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
  ];
}
