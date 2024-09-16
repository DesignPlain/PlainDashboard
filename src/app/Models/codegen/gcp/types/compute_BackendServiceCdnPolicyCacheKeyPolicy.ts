import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_BackendServiceCdnPolicyCacheKeyPolicy {
  // If true requests to different hosts will be cached separately.
  includeHost?: boolean;

  /*
Allows HTTP request headers (by name) to be used in the
cache key.
*/
  includeHttpHeaders?: Array<string>;

  // Names of cookies to include in cache keys.
  includeNamedCookies?: Array<string>;

  // If true, http and https requests will be cached separately.
  includeProtocol?: boolean;

  /*
If true, include query string parameters in the cache key
according to query_string_whitelist and
query_string_blacklist. If neither is set, the entire query
string will be included.
If false, the query string will be excluded from the cache
key entirely.
*/
  includeQueryString?: boolean;

  /*
Names of query string parameters to exclude in cache keys.
All other parameters will be included. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.
*/
  queryStringBlacklists?: Array<string>;

  /*
Names of query string parameters to include in cache keys.
All other parameters will be excluded. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.
*/
  queryStringWhitelists?: Array<string>;
}

export function compute_BackendServiceCdnPolicyCacheKeyPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'includeNamedCookies',
      'Names of cookies to include in cache keys.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'includeProtocol',
      'If true, http and https requests will be cached separately.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'includeQueryString',
      'If true, include query string parameters in the cache key\naccording to query_string_whitelist and\nquery_string_blacklist. If neither is set, the entire query\nstring will be included.\nIf false, the query string will be excluded from the cache\nkey entirely.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'queryStringBlacklists',
      "Names of query string parameters to exclude in cache keys.\nAll other parameters will be included. Either specify\nquery_string_whitelist or query_string_blacklist, not both.\n'&' and '=' will be percent encoded and not treated as\ndelimiters.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'queryStringWhitelists',
      "Names of query string parameters to include in cache keys.\nAll other parameters will be excluded. Either specify\nquery_string_whitelist or query_string_blacklist, not both.\n'&' and '=' will be percent encoded and not treated as\ndelimiters.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'includeHost',
      'If true requests to different hosts will be cached separately.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'includeHttpHeaders',
      'Allows HTTP request headers (by name) to be used in the\ncache key.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
