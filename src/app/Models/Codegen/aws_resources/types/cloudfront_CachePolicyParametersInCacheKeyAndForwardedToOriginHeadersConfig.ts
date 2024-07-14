import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders,
  cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders_GetTypes,
} from "./cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders";

export interface cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig {
  // Object contains a list of header names. See Items for more information.
  headers?: cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders;

  // Whether any HTTP headers are included in the cache key and automatically included in requests that CloudFront sends to the origin. Valid values for `header_behavior` are `none` and `whitelist`.
  headerBehavior?: string;
}

export function cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "headers",
      "Object contains a list of header names. See Items for more information.",
      cloudfront_CachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "headerBehavior",
      "Whether any HTTP headers are included in the cache key and automatically included in requests that CloudFront sends to the origin. Valid values for `header_behavior` are `none` and `whitelist`.",
      [],
      false,
      false,
    ),
  ];
}
