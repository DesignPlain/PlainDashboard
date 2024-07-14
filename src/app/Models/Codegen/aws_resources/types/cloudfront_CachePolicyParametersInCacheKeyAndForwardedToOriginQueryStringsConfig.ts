import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings,
  cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings_GetTypes,
} from "./cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings";

export interface cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig {
  // Whether URL query strings in viewer requests are included in the cache key and automatically included in requests that CloudFront sends to the origin. Valid values for `query_string_behavior` are `none`, `whitelist`, `allExcept`, and `all`.
  queryStringBehavior?: string;

  // Configuration parameter that contains a list of query string names. See Items for more information.
  queryStrings?: cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings;
}

export function cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "queryStringBehavior",
      "Whether URL query strings in viewer requests are included in the cache key and automatically included in requests that CloudFront sends to the origin. Valid values for `query_string_behavior` are `none`, `whitelist`, `allExcept`, and `all`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "queryStrings",
      "Configuration parameter that contains a list of query string names. See Items for more information.",
      cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings_GetTypes(),
      false,
      false,
    ),
  ];
}
