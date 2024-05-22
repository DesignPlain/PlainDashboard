import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeader,
  cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeader_GetTypes,
} from "./cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeader";

export interface cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig {
  // Determines whether any HTTP headers are included in the cache key and automatically included in requests that CloudFront sends to the origin. Valid values are `none`, `whitelist`.
  headerBehavior?: string;

  // Object that contains a list of header names. See Items for more information.
  headers?: Array<cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeader>;
}

export function cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "headerBehavior",
      "Determines whether any HTTP headers are included in the cache key and automatically included in requests that CloudFront sends to the origin. Valid values are `none`, `whitelist`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headers",
      "Object that contains a list of header names. See Items for more information.",
      cloudfront_getCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeader_GetTypes(),
      true,
      false,
    ),
  ];
}
