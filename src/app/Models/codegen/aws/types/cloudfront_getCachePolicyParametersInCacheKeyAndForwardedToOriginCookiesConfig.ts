import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookie,
  cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookie_GetTypes,
} from "./cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookie";

export interface cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig {
  // Determines whether any cookies in viewer requests are included in the cache key and automatically included in requests that CloudFront sends to the origin. Valid values are `none`, `whitelist`, `allExcept`, `all`.
  cookieBehavior?: string;

  // Object that contains a list of cookie names. See Items for more information.
  cookies?: Array<cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookie>;
}

export function cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "cookies",
      "Object that contains a list of cookie names. See Items for more information.",
      () =>
        cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookie_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cookieBehavior",
      "Determines whether any cookies in viewer requests are included in the cache key and automatically included in requests that CloudFront sends to the origin. Valid values are `none`, `whitelist`, `allExcept`, `all`.",
      () => [],
      true,
      false,
    ),
  ];
}
