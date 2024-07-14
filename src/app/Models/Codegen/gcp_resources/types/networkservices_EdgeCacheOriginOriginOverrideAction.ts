import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  networkservices_EdgeCacheOriginOriginOverrideActionUrlRewrite,
  networkservices_EdgeCacheOriginOriginOverrideActionUrlRewrite_GetTypes,
} from "./networkservices_EdgeCacheOriginOriginOverrideActionUrlRewrite";
import {
  networkservices_EdgeCacheOriginOriginOverrideActionHeaderAction,
  networkservices_EdgeCacheOriginOriginOverrideActionHeaderAction_GetTypes,
} from "./networkservices_EdgeCacheOriginOriginOverrideActionHeaderAction";

export interface networkservices_EdgeCacheOriginOriginOverrideAction {
  /*
The URL rewrite configuration for request that are
handled by this origin.
Structure is documented below.
*/
  urlRewrite?: networkservices_EdgeCacheOriginOriginOverrideActionUrlRewrite;

  /*
The header actions, including adding and removing
headers, for request handled by this origin.
Structure is documented below.
*/
  headerAction?: networkservices_EdgeCacheOriginOriginOverrideActionHeaderAction;
}

export function networkservices_EdgeCacheOriginOriginOverrideAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "urlRewrite",
      "The URL rewrite configuration for request that are\nhandled by this origin.\nStructure is documented below.",
      networkservices_EdgeCacheOriginOriginOverrideActionUrlRewrite_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "headerAction",
      "The header actions, including adding and removing\nheaders, for request handled by this origin.\nStructure is documented below.",
      networkservices_EdgeCacheOriginOriginOverrideActionHeaderAction_GetTypes(),
      false,
      false,
    ),
  ];
}
