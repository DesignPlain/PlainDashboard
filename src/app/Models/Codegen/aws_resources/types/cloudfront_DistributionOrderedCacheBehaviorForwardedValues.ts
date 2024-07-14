import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudfront_DistributionOrderedCacheBehaviorForwardedValuesCookies,
  cloudfront_DistributionOrderedCacheBehaviorForwardedValuesCookies_GetTypes,
} from "./cloudfront_DistributionOrderedCacheBehaviorForwardedValuesCookies";

export interface cloudfront_DistributionOrderedCacheBehaviorForwardedValues {
  // Indicates whether you want CloudFront to forward query strings to the origin that is associated with this cache behavior.
  queryString?: boolean;

  // When specified, along with a value of `true` for `query_string`, all query strings are forwarded, however only the query string keys listed in this argument are cached. When omitted with a value of `true` for `query_string`, all query string keys are cached.
  queryStringCacheKeys?: Array<string>;

  // The forwarded values cookies that specifies how CloudFront handles cookies (maximum one).
  cookies?: cloudfront_DistributionOrderedCacheBehaviorForwardedValuesCookies;

  // Headers, if any, that you want CloudFront to vary upon for this cache behavior. Specify `-` to include all headers.
  headers?: Array<string>;
}

export function cloudfront_DistributionOrderedCacheBehaviorForwardedValues_GetTypes(): DynamicUIProps[] {
  return [
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
    new DynamicUIProps(
      InputType.Object,
      "cookies",
      "The forwarded values cookies that specifies how CloudFront handles cookies (maximum one).",
      cloudfront_DistributionOrderedCacheBehaviorForwardedValuesCookies_GetTypes(),
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
  ];
}
