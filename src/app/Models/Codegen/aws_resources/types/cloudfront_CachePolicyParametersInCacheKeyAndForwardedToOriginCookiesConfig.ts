import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies,
  cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies_GetTypes,
} from "./cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies";

export interface cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig {
  // Whether any cookies in viewer requests are included in the cache key and automatically included in requests that CloudFront sends to the origin. Valid values for `cookie_behavior` are `none`, `whitelist`, `allExcept`, and `all`.
  cookieBehavior?: string;

  // Object that contains a list of cookie names. See Items for more information.
  cookies?: cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies;
}

export function cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "cookieBehavior",
      "Whether any cookies in viewer requests are included in the cache key and automatically included in requests that CloudFront sends to the origin. Valid values for `cookie_behavior` are `none`, `whitelist`, `allExcept`, and `all`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cookies",
      "Object that contains a list of cookie names. See Items for more information.",
      cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies_GetTypes(),
      false,
      false,
    ),
  ];
}
