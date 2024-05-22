import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_BackendBucketCdnPolicyCacheKeyPolicy {
  /*
Allows HTTP request headers (by name) to be used in the
cache key.
*/
  includeHttpHeaders?: Array<string>;

  /*
Names of query string parameters to include in cache keys.
Default parameters are always included. '&' and '=' will
be percent encoded and not treated as delimiters.
*/
  queryStringWhitelists?: Array<string>;
}

export function compute_BackendBucketCdnPolicyCacheKeyPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "includeHttpHeaders",
      "Allows HTTP request headers (by name) to be used in the\ncache key.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "queryStringWhitelists",
      "Names of query string parameters to include in cache keys.\nDefault parameters are always included. '&' and '=' will\nbe percent encoded and not treated as delimiters.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
