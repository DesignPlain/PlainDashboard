import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookie {
  // List of item names (`cookies`, `headers`, or `query_strings`).
  items?: Array<string>;
}

export function cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookie_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "items",
      "List of item names (`cookies`, `headers`, or `query_strings`).",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
