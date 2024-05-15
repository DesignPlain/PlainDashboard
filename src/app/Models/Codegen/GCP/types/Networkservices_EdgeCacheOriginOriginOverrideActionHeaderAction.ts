import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networkservices_EdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd,
  Networkservices_EdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd_GetTypes,
} from "./Networkservices_EdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd";

export interface Networkservices_EdgeCacheOriginOriginOverrideActionHeaderAction {
  /*
Describes a header to add.
You may add a maximum of 25 request headers.
Structure is documented below.
*/
  RequestHeadersToAdds?: Array<Networkservices_EdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd>;
}

export function Networkservices_EdgeCacheOriginOriginOverrideActionHeaderAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "RequestHeadersToAdds",
      "Describes a header to add.\nYou may add a maximum of 25 request headers.\nStructure is documented below.",
      Networkservices_EdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd_GetTypes(),
      false,
      false,
    ),
  ];
}
