import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_getBackendBucketCdnPolicyBypassCacheOnRequestHeader,
  Compute_getBackendBucketCdnPolicyBypassCacheOnRequestHeader_GetTypes,
} from "./Compute_getBackendBucketCdnPolicyBypassCacheOnRequestHeader";
import {
  Compute_getBackendBucketCdnPolicyNegativeCachingPolicy,
  Compute_getBackendBucketCdnPolicyNegativeCachingPolicy_GetTypes,
} from "./Compute_getBackendBucketCdnPolicyNegativeCachingPolicy";
import {
  Compute_getBackendBucketCdnPolicyCacheKeyPolicy,
  Compute_getBackendBucketCdnPolicyCacheKeyPolicy_GetTypes,
} from "./Compute_getBackendBucketCdnPolicyCacheKeyPolicy";

export interface Compute_getBackendBucketCdnPolicy {
  // Specifies the maximum allowed TTL for cached content served by this origin.
  ClientTtl?: number;

  // Specifies the maximum allowed TTL for cached content served by this origin.
  MaxTtl?: number;

  // If true then Cloud CDN will combine multiple concurrent cache fill requests into a small number of requests to the origin.
  RequestCoalescing?: boolean;

  // Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.
  ServeWhileStale?: number;

  // Bypass the cache when the specified request headers are matched - e.g. Pragma or Authorization headers. Up to 5 headers can be specified. The cache is bypassed for all cdnPolicy.cacheMode settings.
  BypassCacheOnRequestHeaders?: Array<Compute_getBackendBucketCdnPolicyBypassCacheOnRequestHeader>;

  /*
Specifies the cache setting for all responses from this backend.
The possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]
*/
  CacheMode?: string;

  /*
Specifies the default TTL for cached content served by this origin for responses
that do not have an existing valid TTL (max-age or s-max-age).
*/
  DefaultTtl?: number;

  // Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.
  NegativeCaching?: boolean;

  /*
Sets a cache TTL for the specified HTTP status code. negativeCaching must be enabled to configure negativeCachingPolicy.
Omitting the policy and leaving negativeCaching enabled will use Cloud CDN's default cache TTLs.
*/
  NegativeCachingPolicies?: Array<Compute_getBackendBucketCdnPolicyNegativeCachingPolicy>;

  /*
Maximum number of seconds the response to a signed URL request will
be considered fresh. After this time period,
the response will be revalidated before being served.
When serving responses to signed URL requests,
Cloud CDN will internally behave as though
all responses from this backend had a "Cache-Control: public,
max-age=[TTL]" header, regardless of any existing Cache-Control
header. The actual headers served in responses will not be altered.
*/
  SignedUrlCacheMaxAgeSec?: number;

  // The CacheKeyPolicy for this CdnPolicy.
  CacheKeyPolicies?: Array<Compute_getBackendBucketCdnPolicyCacheKeyPolicy>;
}

export function Compute_getBackendBucketCdnPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "DefaultTtl",
      "Specifies the default TTL for cached content served by this origin for responses\nthat do not have an existing valid TTL (max-age or s-max-age).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "NegativeCachingPolicies",
      "Sets a cache TTL for the specified HTTP status code. negativeCaching must be enabled to configure negativeCachingPolicy.\nOmitting the policy and leaving negativeCaching enabled will use Cloud CDN's default cache TTLs.",
      Compute_getBackendBucketCdnPolicyNegativeCachingPolicy_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "BypassCacheOnRequestHeaders",
      "Bypass the cache when the specified request headers are matched - e.g. Pragma or Authorization headers. Up to 5 headers can be specified. The cache is bypassed for all cdnPolicy.cacheMode settings.",
      Compute_getBackendBucketCdnPolicyBypassCacheOnRequestHeader_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CacheMode",
      'Specifies the cache setting for all responses from this backend.\nThe possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "RequestCoalescing",
      "If true then Cloud CDN will combine multiple concurrent cache fill requests into a small number of requests to the origin.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ServeWhileStale",
      "Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "NegativeCaching",
      "Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "SignedUrlCacheMaxAgeSec",
      'Maximum number of seconds the response to a signed URL request will\nbe considered fresh. After this time period,\nthe response will be revalidated before being served.\nWhen serving responses to signed URL requests,\nCloud CDN will internally behave as though\nall responses from this backend had a "Cache-Control: public,\nmax-age=[TTL]" header, regardless of any existing Cache-Control\nheader. The actual headers served in responses will not be altered.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "CacheKeyPolicies",
      "The CacheKeyPolicy for this CdnPolicy.",
      Compute_getBackendBucketCdnPolicyCacheKeyPolicy_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ClientTtl",
      "Specifies the maximum allowed TTL for cached content served by this origin.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxTtl",
      "Specifies the maximum allowed TTL for cached content served by this origin.",
      [],
      true,
      false,
    ),
  ];
}
