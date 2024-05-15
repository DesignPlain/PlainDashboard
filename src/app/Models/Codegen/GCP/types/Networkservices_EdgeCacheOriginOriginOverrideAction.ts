import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networkservices_EdgeCacheOriginOriginOverrideActionHeaderAction,
  Networkservices_EdgeCacheOriginOriginOverrideActionHeaderAction_GetTypes,
} from "./Networkservices_EdgeCacheOriginOriginOverrideActionHeaderAction";
import {
  Networkservices_EdgeCacheOriginOriginOverrideActionUrlRewrite,
  Networkservices_EdgeCacheOriginOriginOverrideActionUrlRewrite_GetTypes,
} from "./Networkservices_EdgeCacheOriginOriginOverrideActionUrlRewrite";

export interface Networkservices_EdgeCacheOriginOriginOverrideAction {
  /*
The header actions, including adding and removing
headers, for request handled by this origin.
Structure is documented below.
*/
  HeaderAction?: Networkservices_EdgeCacheOriginOriginOverrideActionHeaderAction;

  /*
The URL rewrite configuration for request that are
handled by this origin.
Structure is documented below.
*/
  UrlRewrite?: Networkservices_EdgeCacheOriginOriginOverrideActionUrlRewrite;
}

export function Networkservices_EdgeCacheOriginOriginOverrideAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "HeaderAction",
      "The header actions, including adding and removing\nheaders, for request handled by this origin.\nStructure is documented below.",
      Networkservices_EdgeCacheOriginOriginOverrideActionHeaderAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "UrlRewrite",
      "The URL rewrite configuration for request that are\nhandled by this origin.\nStructure is documented below.",
      Networkservices_EdgeCacheOriginOriginOverrideActionUrlRewrite_GetTypes(),
      false,
      false,
    ),
  ];
}
