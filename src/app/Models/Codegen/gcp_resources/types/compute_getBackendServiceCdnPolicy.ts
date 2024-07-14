import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  compute_getBackendServiceCdnPolicyBypassCacheOnRequestHeader,
  compute_getBackendServiceCdnPolicyBypassCacheOnRequestHeader_GetTypes,
} from "./compute_getBackendServiceCdnPolicyBypassCacheOnRequestHeader";
import {
  compute_getBackendServiceCdnPolicyCacheKeyPolicy,
  compute_getBackendServiceCdnPolicyCacheKeyPolicy_GetTypes,
} from "./compute_getBackendServiceCdnPolicyCacheKeyPolicy";
import {
  compute_getBackendServiceCdnPolicyNegativeCachingPolicy,
  compute_getBackendServiceCdnPolicyNegativeCachingPolicy_GetTypes,
} from "./compute_getBackendServiceCdnPolicyNegativeCachingPolicy";

export interface compute_getBackendServiceCdnPolicy {
  /*
Bypass the cache when the specified request headers are matched - e.g. Pragma or Authorization headers. Up to 5 headers can be specified.
The cache is bypassed for all cdnPolicy.cacheMode settings.
*/
  bypassCacheOnRequestHeaders?: Array<compute_getBackendServiceCdnPolicyBypassCacheOnRequestHeader>;

  // Specifies the maximum allowed TTL for cached content served by this origin.
  clientTtl?: number;

  /*
Specifies the default TTL for cached content served by this origin for responses
that do not have an existing valid TTL (max-age or s-max-age).
*/
  defaultTtl?: number;

  // Specifies the maximum allowed TTL for cached content served by this origin.
  maxTtl?: number;

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
  signedUrlCacheMaxAgeSec?: number;

  // The CacheKeyPolicy for this CdnPolicy.
  cacheKeyPolicies?: Array<compute_getBackendServiceCdnPolicyCacheKeyPolicy>;

  /*
Specifies the cache setting for all responses from this backend.
The possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]
*/
  cacheMode?: string;

  // Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.
  negativeCaching?: boolean;

  /*
Sets a cache TTL for the specified HTTP status code. negativeCaching must be enabled to configure negativeCachingPolicy.
Omitting the policy and leaving negativeCaching enabled will use Cloud CDN's default cache TTLs.
*/
  negativeCachingPolicies?: Array<compute_getBackendServiceCdnPolicyNegativeCachingPolicy>;

  // Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.
  serveWhileStale?: number;
}

export function compute_getBackendServiceCdnPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxTtl",
      "Specifies the maximum allowed TTL for cached content served by this origin.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "signedUrlCacheMaxAgeSec",
      'Maximum number of seconds the response to a signed URL request\nwill be considered fresh, defaults to 1hr (3600s). After this\ntime period, the response will be revalidated before\nbeing served.\n\nWhen serving responses to signed URL requests, Cloud CDN will\ninternally behave as though all responses from this backend had a\n"Cache-Control: public, max-age=[TTL]" header, regardless of any\nexisting Cache-Control header. The actual headers served in\nresponses will not be altered.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "negativeCaching",
      "Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "negativeCachingPolicies",
      "Sets a cache TTL for the specified HTTP status code. negativeCaching must be enabled to configure negativeCachingPolicy.\nOmitting the policy and leaving negativeCaching enabled will use Cloud CDN's default cache TTLs.",
      compute_getBackendServiceCdnPolicyNegativeCachingPolicy_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "bypassCacheOnRequestHeaders",
      "Bypass the cache when the specified request headers are matched - e.g. Pragma or Authorization headers. Up to 5 headers can be specified.\nThe cache is bypassed for all cdnPolicy.cacheMode settings.",
      compute_getBackendServiceCdnPolicyBypassCacheOnRequestHeader_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "clientTtl",
      "Specifies the maximum allowed TTL for cached content served by this origin.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "defaultTtl",
      "Specifies the default TTL for cached content served by this origin for responses\nthat do not have an existing valid TTL (max-age or s-max-age).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "cacheKeyPolicies",
      "The CacheKeyPolicy for this CdnPolicy.",
      compute_getBackendServiceCdnPolicyCacheKeyPolicy_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cacheMode",
      'Specifies the cache setting for all responses from this backend.\nThe possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "serveWhileStale",
      "Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.",
      [],
      true,
      false,
    ),
  ];
}
