import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  compute_RegionUrlMapPathMatcherRouteRuleHeaderActionRequestHeadersToAdd,
  compute_RegionUrlMapPathMatcherRouteRuleHeaderActionRequestHeadersToAdd_GetTypes,
} from "./compute_RegionUrlMapPathMatcherRouteRuleHeaderActionRequestHeadersToAdd";
import {
  compute_RegionUrlMapPathMatcherRouteRuleHeaderActionResponseHeadersToAdd,
  compute_RegionUrlMapPathMatcherRouteRuleHeaderActionResponseHeadersToAdd_GetTypes,
} from "./compute_RegionUrlMapPathMatcherRouteRuleHeaderActionResponseHeadersToAdd";

export interface compute_RegionUrlMapPathMatcherRouteRuleHeaderAction {
  /*
Headers to add the response before sending the response back to the client.
Structure is documented below.
*/
  responseHeadersToAdds?: Array<compute_RegionUrlMapPathMatcherRouteRuleHeaderActionResponseHeadersToAdd>;

  // A list of header names for headers that need to be removed from the response before sending the response back to the client.
  responseHeadersToRemoves?: Array<string>;

  /*
Headers to add to a matching request before forwarding the request to the backendService.
Structure is documented below.
*/
  requestHeadersToAdds?: Array<compute_RegionUrlMapPathMatcherRouteRuleHeaderActionRequestHeadersToAdd>;

  // A list of header names for headers that need to be removed from the request before forwarding the request to the backendService.
  requestHeadersToRemoves?: Array<string>;
}

export function compute_RegionUrlMapPathMatcherRouteRuleHeaderAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "responseHeadersToRemoves",
      "A list of header names for headers that need to be removed from the response before sending the response back to the client.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "requestHeadersToAdds",
      "Headers to add to a matching request before forwarding the request to the backendService.\nStructure is documented below.",
      compute_RegionUrlMapPathMatcherRouteRuleHeaderActionRequestHeadersToAdd_GetTypes(),
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
      compute_RegionUrlMapPathMatcherRouteRuleHeaderActionResponseHeadersToAdd_GetTypes(),
      false,
      false,
    ),
  ];
}
