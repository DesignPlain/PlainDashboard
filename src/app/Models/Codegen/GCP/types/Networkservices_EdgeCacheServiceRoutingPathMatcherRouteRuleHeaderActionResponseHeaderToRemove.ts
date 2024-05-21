import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

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
      "headerName",
      "Headers to remove from the response prior to sending it back to the client.\nResponse headers are only sent to the client, and do not have an effect on the cache serving the response.",
      [],
      true,
      false,
    ),
  ];
}
