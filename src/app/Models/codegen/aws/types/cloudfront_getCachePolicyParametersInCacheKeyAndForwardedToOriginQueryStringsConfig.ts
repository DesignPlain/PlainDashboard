import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryString,
  cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryString_GetTypes,
} from './cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryString';

export interface cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig {
  // Determines whether any URL query strings in viewer requests are included in the cache key and automatically included in requests that CloudFront sends to the origin. Valid values are `none`, `whitelist`, `allExcept`, `all`.
  queryStringBehavior?: string;

  // Object that contains a list of query string names. See Items for more information.
  queryStrings?: Array<cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryString>;
}

export function cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'queryStringBehavior',
      'Determines whether any URL query strings in viewer requests are included in the cache key and automatically included in requests that CloudFront sends to the origin. Valid values are `none`, `whitelist`, `allExcept`, `all`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'queryStrings',
      'Object that contains a list of query string names. See Items for more information.',
      () =>
        cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryString_GetTypes(),
      true,
      false,
    ),
  ];
}
