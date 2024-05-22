import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudfront_DistributionDefaultCacheBehaviorForwardedValuesCookies,
  cloudfront_DistributionDefaultCacheBehaviorForwardedValuesCookies_GetTypes,
} from "./cloudfront_DistributionDefaultCacheBehaviorForwardedValuesCookies";

export interface cloudfront_DistributionDefaultCacheBehaviorForwardedValues {
  // The forwarded values cookies that specifies how CloudFront handles cookies (maximum one).
  cookies?: cloudfront_DistributionDefaultCacheBehaviorForwardedValuesCookies;

  // Headers, if any, that you want CloudFront to vary upon for this cache behavior. Specify `-` to include all headers.
  headers?: Array<string>;

  // Indicates whether you want CloudFront to forward query strings to the origin that is associated with this cache behavior.
  queryString?: boolean;

  // When specified, along with a value of `true` for `query_string`, all query strings are forwarded, however only the query string keys listed in this argument are cached. When omitted with a value of `true` for `query_string`, all query string keys are cached.
  queryStringCacheKeys?: Array<string>;
}

export function cloudfront_DistributionDefaultCacheBehaviorForwardedValues_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "cookies",
      "The forwarded values cookies that specifies how CloudFront handles cookies (maximum one).",
      cloudfront_DistributionDefaultCacheBehaviorForwardedValuesCookies_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headers",
      "Headers, if any, that you want CloudFront to vary upon for this cache behavior. Specify `*` to include all headers.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "queryString",
      "Indicates whether you want CloudFront to forward query strings to the origin that is associated with this cache behavior.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "queryStringCacheKeys",
      "When specified, along with a value of `true` for `query_string`, all query strings are forwarded, however only the query string keys listed in this argument are cached. When omitted with a value of `true` for `query_string`, all query string keys are cached.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
