import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig,
  cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig_GetTypes,
} from "./cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig";
import {
  cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig,
  cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig_GetTypes,
} from "./cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig";
import {
  cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig,
  cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig_GetTypes,
} from "./cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig";

export interface cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOrigin {
  // Object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the cache key and automatically included in requests that CloudFront sends to the origin. See Cookies Config for more information.
  cookiesConfigs?: Array<cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig>;

  // A flag that can affect whether the Accept-Encoding HTTP header is included in the cache key and included in requests that CloudFront sends to the origin.
  enableAcceptEncodingBrotli?: boolean;

  // A flag that can affect whether the Accept-Encoding HTTP header is included in the cache key and included in requests that CloudFront sends to the origin.
  enableAcceptEncodingGzip?: boolean;

  // Object that determines whether any HTTP headers (and if so, which headers) are included in the cache key and automatically included in requests that CloudFront sends to the origin. See Headers Config for more information.
  headersConfigs?: Array<cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig>;

  // Object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in the cache key and automatically included in requests that CloudFront sends to the origin. See Query String Config for more information.
  queryStringsConfigs?: Array<cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig>;
}

export function cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOrigin_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "headersConfigs",
      "Object that determines whether any HTTP headers (and if so, which headers) are included in the cache key and automatically included in requests that CloudFront sends to the origin. See Headers Config for more information.",
      () =>
        cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "queryStringsConfigs",
      "Object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in the cache key and automatically included in requests that CloudFront sends to the origin. See Query String Config for more information.",
      () =>
        cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "cookiesConfigs",
      "Object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the cache key and automatically included in requests that CloudFront sends to the origin. See Cookies Config for more information.",
      () =>
        cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableAcceptEncodingBrotli",
      "A flag that can affect whether the Accept-Encoding HTTP header is included in the cache key and included in requests that CloudFront sends to the origin.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableAcceptEncodingGzip",
      "A flag that can affect whether the Accept-Encoding HTTP header is included in the cache key and included in requests that CloudFront sends to the origin.",
      () => [],
      true,
      false,
    ),
  ];
}
