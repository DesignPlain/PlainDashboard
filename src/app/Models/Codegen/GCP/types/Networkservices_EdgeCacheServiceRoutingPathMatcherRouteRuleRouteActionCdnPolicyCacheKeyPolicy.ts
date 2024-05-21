import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy {
  // If true, http and https requests will be cached separately.
  includeProtocol?: boolean;

  /*
Names of Cookies to include in cache keys.  The cookie name and cookie value of each cookie named will be used as part of the cache key.
Cookie names:
- must be valid RFC 6265 "cookie-name" tokens
- are case sensitive
- cannot start with "Edge-Cache-" (case insensitive)
Note that specifying several cookies, and/or cookies that have a large range of values (e.g., per-user) will dramatically impact the cache hit rate, and may result in a higher eviction rate and reduced performance.
You may specify up to three cookie names.
*/
  includedCookieNames?: Array<string>;

  /*
Names of HTTP request headers to include in cache keys. The value of the header field will be used as part of the cache key.
- Header names must be valid HTTP RFC 7230 header field values.
- Header field names are case insensitive
- To include the HTTP method, use ":method"
Note that specifying several headers, and/or headers that have a large range of values (e.g. per-user) will dramatically impact the cache hit rate, and may result in a higher eviction rate and reduced performance.
*/
  includedHeaderNames?: Array<string>;

  /*
Names of query string parameters to include in cache keys. All other parameters will be excluded.
Either specify includedQueryParameters or excludedQueryParameters, not both. '&' and '=' will be percent encoded and not treated as delimiters.
*/
  includedQueryParameters?: Array<string>;

  /*
If true, requests to different hosts will be cached separately.
Note: this should only be enabled if hosts share the same origin and content. Removing the host from the cache key may inadvertently result in different objects being cached than intended, depending on which route the first user matched.
*/
  excludeHost?: boolean;

  /*
If true, exclude query string parameters from the cache key
If false (the default), include the query string parameters in
the cache key according to includeQueryParameters and
excludeQueryParameters. If neither includeQueryParameters nor
excludeQueryParameters is set, the entire query string will be
included.
*/
  excludeQueryString?: boolean;

  /*
Names of query string parameters to exclude from cache keys. All other parameters will be included.
Either specify includedQueryParameters or excludedQueryParameters, not both. '&' and '=' will be percent encoded and not treated as delimiters.
*/
  excludedQueryParameters?: Array<string>;
}

export function networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "excludeHost",
      "If true, requests to different hosts will be cached separately.\nNote: this should only be enabled if hosts share the same origin and content. Removing the host from the cache key may inadvertently result in different objects being cached than intended, depending on which route the first user matched.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "excludeQueryString",
      "If true, exclude query string parameters from the cache key\nIf false (the default), include the query string parameters in\nthe cache key according to includeQueryParameters and\nexcludeQueryParameters. If neither includeQueryParameters nor\nexcludeQueryParameters is set, the entire query string will be\nincluded.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "excludedQueryParameters",
      "Names of query string parameters to exclude from cache keys. All other parameters will be included.\nEither specify includedQueryParameters or excludedQueryParameters, not both. '&' and '=' will be percent encoded and not treated as delimiters.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "includeProtocol",
      "If true, http and https requests will be cached separately.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "includedCookieNames",
      'Names of Cookies to include in cache keys.  The cookie name and cookie value of each cookie named will be used as part of the cache key.\nCookie names:\n- must be valid RFC 6265 "cookie-name" tokens\n- are case sensitive\n- cannot start with "Edge-Cache-" (case insensitive)\nNote that specifying several cookies, and/or cookies that have a large range of values (e.g., per-user) will dramatically impact the cache hit rate, and may result in a higher eviction rate and reduced performance.\nYou may specify up to three cookie names.',
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "includedHeaderNames",
      'Names of HTTP request headers to include in cache keys. The value of the header field will be used as part of the cache key.\n- Header names must be valid HTTP RFC 7230 header field values.\n- Header field names are case insensitive\n- To include the HTTP method, use ":method"\nNote that specifying several headers, and/or headers that have a large range of values (e.g. per-user) will dramatically impact the cache hit rate, and may result in a higher eviction rate and reduced performance.',
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "includedQueryParameters",
      "Names of query string parameters to include in cache keys. All other parameters will be excluded.\nEither specify includedQueryParameters or excludedQueryParameters, not both. '&' and '=' will be percent encoded and not treated as delimiters.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
