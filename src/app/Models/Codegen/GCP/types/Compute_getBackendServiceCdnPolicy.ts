import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_getBackendServiceCdnPolicyBypassCacheOnRequestHeader,
  Compute_getBackendServiceCdnPolicyBypassCacheOnRequestHeader_GetTypes,
} from "./Compute_getBackendServiceCdnPolicyBypassCacheOnRequestHeader";
import {
  Compute_getBackendServiceCdnPolicyCacheKeyPolicy,
  Compute_getBackendServiceCdnPolicyCacheKeyPolicy_GetTypes,
} from "./Compute_getBackendServiceCdnPolicyCacheKeyPolicy";
import {
  Compute_getBackendServiceCdnPolicyNegativeCachingPolicy,
  Compute_getBackendServiceCdnPolicyNegativeCachingPolicy_GetTypes,
} from "./Compute_getBackendServiceCdnPolicyNegativeCachingPolicy";

export interface Compute_getBackendServiceCdnPolicy {
  /*
Bypass the cache when the specified request headers are matched - e.g. Pragma or Authorization headers. Up to 5 headers can be specified.
The cache is bypassed for all cdnPolicy.cacheMode settings.
*/
  BypassCacheOnRequestHeaders?: Array<Compute_getBackendServiceCdnPolicyBypassCacheOnRequestHeader>;

  // The CacheKeyPolicy for this CdnPolicy.
  CacheKeyPolicies?: Array<Compute_getBackendServiceCdnPolicyCacheKeyPolicy>;

  /*
Specifies the cache setting for all responses from this backend.
The possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]
*/
  CacheMode?: string;

  // Specifies the maximum allowed TTL for cached content served by this origin.
  MaxTtl?: number;

  /*
Sets a cache TTL for the specified HTTP status code. negativeCaching must be enabled to configure negativeCachingPolicy.
Omitting the policy and leaving negativeCaching enabled will use Cloud CDN's default cache TTLs.
*/
  NegativeCachingPolicies?: Array<Compute_getBackendServiceCdnPolicyNegativeCachingPolicy>;

  // Specifies the maximum allowed TTL for cached content served by this origin.
  ClientTtl?: number;

  /*
Specifies the default TTL for cached content served by this origin for responses
that do not have an existing valid TTL (max-age or s-max-age).
*/
  DefaultTtl?: number;

  // Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.
  NegativeCaching?: boolean;

  // Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.
  ServeWhileStale?: number;

  /*
Maximum number of seconds the response to a signed URL request
will be considered fresh, defaults to 1hr (3600s). After this
time period, the response will be revalidated before
being served.

When serving responses to signed URL requests, Cloud CDN will
internally behave as though all responses from this backend had a
"Cache-Control: public, max-age=[TTL]" header, regardless of any
existing Cache-Control header. The actual headers served in
responses will not be altered.
*/
  SignedUrlCacheMaxAgeSec?: number;
}

export function Compute_getBackendServiceCdnPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "CacheKeyPolicies",
      "The CacheKeyPolicy for this CdnPolicy.",
      Compute_getBackendServiceCdnPolicyCacheKeyPolicy_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "NegativeCachingPolicies",
      "Sets a cache TTL for the specified HTTP status code. negativeCaching must be enabled to configure negativeCachingPolicy.\nOmitting the policy and leaving negativeCaching enabled will use Cloud CDN's default cache TTLs.",
      Compute_getBackendServiceCdnPolicyNegativeCachingPolicy_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "DefaultTtl",
      "Specifies the default TTL for cached content served by this origin for responses\nthat do not have an existing valid TTL (max-age or s-max-age).",
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
      "ServeWhileStale",
      "Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "SignedUrlCacheMaxAgeSec",
      'Maximum number of seconds the response to a signed URL request\nwill be considered fresh, defaults to 1hr (3600s). After this\ntime period, the response will be revalidated before\nbeing served.\n\nWhen serving responses to signed URL requests, Cloud CDN will\ninternally behave as though all responses from this backend had a\n"Cache-Control: public, max-age=[TTL]" header, regardless of any\nexisting Cache-Control header. The actual headers served in\nresponses will not be altered.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "BypassCacheOnRequestHeaders",
      "Bypass the cache when the specified request headers are matched - e.g. Pragma or Authorization headers. Up to 5 headers can be specified.\nThe cache is bypassed for all cdnPolicy.cacheMode settings.",
      Compute_getBackendServiceCdnPolicyBypassCacheOnRequestHeader_GetTypes(),
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
      InputType.Number,
      "MaxTtl",
      "Specifies the maximum allowed TTL for cached content served by this origin.",
      [],
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
  ];
}
