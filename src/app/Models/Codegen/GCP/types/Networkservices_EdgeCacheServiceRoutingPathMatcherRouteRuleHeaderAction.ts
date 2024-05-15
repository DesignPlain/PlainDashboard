import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd,
  Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd_GetTypes,
} from "./Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd";
import {
  Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove,
  Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove_GetTypes,
} from "./Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove";
import {
  Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd,
  Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd_GetTypes,
} from "./Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd";
import {
  Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove,
  Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove_GetTypes,
} from "./Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove";

export interface Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction {
  /*
Headers to add to the response prior to sending it back to the client.
Response headers are only sent to the client, and do not have an effect on the cache serving the response.
Structure is documented below.
*/
  ResponseHeaderToAdds?: Array<Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd>;

  /*
A list of header names for headers that need to be removed from the request prior to forwarding the request to the origin.
Structure is documented below.
*/
  ResponseHeaderToRemoves?: Array<Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove>;

  /*
Describes a header to add.
Structure is documented below.
*/
  RequestHeaderToAdds?: Array<Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd>;

  /*
A list of header names for headers that need to be removed from the request prior to forwarding the request to the origin.
Structure is documented below.
*/
  RequestHeaderToRemoves?: Array<Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove>;
}

export function Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "RequestHeaderToRemoves",
      "A list of header names for headers that need to be removed from the request prior to forwarding the request to the origin.\nStructure is documented below.",
      Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ResponseHeaderToAdds",
      "Headers to add to the response prior to sending it back to the client.\nResponse headers are only sent to the client, and do not have an effect on the cache serving the response.\nStructure is documented below.",
      Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ResponseHeaderToRemoves",
      "A list of header names for headers that need to be removed from the request prior to forwarding the request to the origin.\nStructure is documented below.",
      Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "RequestHeaderToAdds",
      "Describes a header to add.\nStructure is documented below.",
      Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd_GetTypes(),
      false,
      false,
    ),
  ];
}
