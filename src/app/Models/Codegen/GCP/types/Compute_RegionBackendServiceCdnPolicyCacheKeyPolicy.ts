import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_RegionBackendServiceCdnPolicyCacheKeyPolicy {
  /*
Names of query string parameters to include in cache keys.
All other parameters will be excluded. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.
*/
  QueryStringWhitelists?: Array<string>;

  // If true requests to different hosts will be cached separately.
  IncludeHost?: boolean;

  // Names of cookies to include in cache keys.
  IncludeNamedCookies?: Array<string>;

  // If true, http and https requests will be cached separately.
  IncludeProtocol?: boolean;

  /*
If true, include query string parameters in the cache key
according to query_string_whitelist and
query_string_blacklist. If neither is set, the entire query
string will be included.
If false, the query string will be excluded from the cache
key entirely.
*/
  IncludeQueryString?: boolean;

  /*
Names of query string parameters to exclude in cache keys.
All other parameters will be included. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.
*/
  QueryStringBlacklists?: Array<string>;
}

export function Compute_RegionBackendServiceCdnPolicyCacheKeyPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "QueryStringWhitelists",
      "Names of query string parameters to include in cache keys.\nAll other parameters will be excluded. Either specify\nquery_string_whitelist or query_string_blacklist, not both.\n'&' and '=' will be percent encoded and not treated as\ndelimiters.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "IncludeHost",
      "If true requests to different hosts will be cached separately.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "IncludeNamedCookies",
      "Names of cookies to include in cache keys.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "IncludeProtocol",
      "If true, http and https requests will be cached separately.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "IncludeQueryString",
      "If true, include query string parameters in the cache key\naccording to query_string_whitelist and\nquery_string_blacklist. If neither is set, the entire query\nstring will be included.\nIf false, the query string will be excluded from the cache\nkey entirely.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "QueryStringBlacklists",
      "Names of query string parameters to exclude in cache keys.\nAll other parameters will be included. Either specify\nquery_string_whitelist or query_string_blacklist, not both.\n'&' and '=' will be percent encoded and not treated as\ndelimiters.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
