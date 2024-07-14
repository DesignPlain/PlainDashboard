import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies {
  // List of item names, such as cookies, headers, or query strings.
  items?: Array<string>;
}

export function cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "items",
      "List of item names, such as cookies, headers, or query strings.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
