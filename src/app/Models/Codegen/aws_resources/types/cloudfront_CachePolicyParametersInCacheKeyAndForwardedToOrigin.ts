import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig,
  cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig_GetTypes,
} from "./cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig";
import {
  cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig,
  cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig_GetTypes,
} from "./cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig";
import {
  cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig,
  cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig_GetTypes,
} from "./cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig";

export interface cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOrigin {
  // Whether the Accept-Encoding HTTP header is included in the cache key and in requests sent to the origin by CloudFront.
  enableAcceptEncodingGzip?: boolean;

  // Whether any HTTP headers are included in the cache key and automatically included in requests that CloudFront sends to the origin. See Headers Config for more information.
  headersConfig?: cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig;

  // Whether any URL query strings in viewer requests are included in the cache key. It also automatically includes these query strings in requests that CloudFront sends to the origin. Please refer to the Query String Config for more information.
  queryStringsConfig?: cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig;

  // Whether any cookies in viewer requests are included in the cache key and automatically included in requests that CloudFront sends to the origin. See Cookies Config for more information.
  cookiesConfig?: cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig;

  // Flag determines whether the Accept-Encoding HTTP header is included in the cache key and in requests that CloudFront sends to the origin.
  enableAcceptEncodingBrotli?: boolean;
}

export function cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOrigin_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "cookiesConfig",
      "Whether any cookies in viewer requests are included in the cache key and automatically included in requests that CloudFront sends to the origin. See Cookies Config for more information.",
      cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableAcceptEncodingBrotli",
      "Flag determines whether the Accept-Encoding HTTP header is included in the cache key and in requests that CloudFront sends to the origin.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableAcceptEncodingGzip",
      "Whether the Accept-Encoding HTTP header is included in the cache key and in requests sent to the origin by CloudFront.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "headersConfig",
      "Whether any HTTP headers are included in the cache key and automatically included in requests that CloudFront sends to the origin. See Headers Config for more information.",
      cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "queryStringsConfig",
      "Whether any URL query strings in viewer requests are included in the cache key. It also automatically includes these query strings in requests that CloudFront sends to the origin. Please refer to the Query String Config for more information.",
      cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
