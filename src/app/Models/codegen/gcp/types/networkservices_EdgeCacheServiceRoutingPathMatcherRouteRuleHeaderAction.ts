import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd,
  networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd_GetTypes,
} from './networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd';
import {
  networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove,
  networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove_GetTypes,
} from './networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove';
import {
  networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd,
  networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd_GetTypes,
} from './networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd';
import {
  networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove,
  networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove_GetTypes,
} from './networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove';

export interface networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction {
  /*
Describes a header to add.
Structure is documented below.
*/
  requestHeaderToAdds?: Array<networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd>;

  /*
A list of header names for headers that need to be removed from the request prior to forwarding the request to the origin.
Structure is documented below.
*/
  requestHeaderToRemoves?: Array<networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove>;

  /*
Headers to add to the response prior to sending it back to the client.
Response headers are only sent to the client, and do not have an effect on the cache serving the response.
Structure is documented below.
*/
  responseHeaderToAdds?: Array<networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd>;

  /*
A list of header names for headers that need to be removed from the request prior to forwarding the request to the origin.
Structure is documented below.
*/
  responseHeaderToRemoves?: Array<networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove>;
}

export function networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'responseHeaderToRemoves',
      'A list of header names for headers that need to be removed from the request prior to forwarding the request to the origin.\nStructure is documented below.',
      () =>
        networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'requestHeaderToAdds',
      'Describes a header to add.\nStructure is documented below.',
      () =>
        networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'requestHeaderToRemoves',
      'A list of header names for headers that need to be removed from the request prior to forwarding the request to the origin.\nStructure is documented below.',
      () =>
        networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'responseHeaderToAdds',
      'Headers to add to the response prior to sending it back to the client.\nResponse headers are only sent to the client, and do not have an effect on the cache serving the response.\nStructure is documented below.',
      () =>
        networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd_GetTypes(),
      false,
      false,
    ),
  ];
}
