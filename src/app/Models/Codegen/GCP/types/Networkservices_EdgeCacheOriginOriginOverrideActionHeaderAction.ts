import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  networkservices_EdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd,
  networkservices_EdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd_GetTypes,
} from "./networkservices_EdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd";

export interface networkservices_EdgeCacheOriginOriginOverrideActionHeaderAction {
  /*
Describes a header to add.
You may add a maximum of 25 request headers.
Structure is documented below.
*/
  requestHeadersToAdds?: Array<networkservices_EdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd>;
}

export function networkservices_EdgeCacheOriginOriginOverrideActionHeaderAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "requestHeadersToAdds",
      "Describes a header to add.\nYou may add a maximum of 25 request headers.\nStructure is documented below.",
      networkservices_EdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd_GetTypes(),
      false,
      false,
    ),
  ];
}
