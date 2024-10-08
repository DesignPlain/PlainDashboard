import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove {
  /*
Headers to remove from the response prior to sending it back to the client.
Response headers are only sent to the client, and do not have an effect on the cache serving the response.
*/
  headerName?: string;
}

export function networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'headerName',
      'Headers to remove from the response prior to sending it back to the client.\nResponse headers are only sent to the client, and do not have an effect on the cache serving the response.',
      () => [],
      true,
      false,
    ),
  ];
}
