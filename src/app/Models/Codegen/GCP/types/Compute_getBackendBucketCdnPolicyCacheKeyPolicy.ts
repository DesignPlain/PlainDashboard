import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getBackendBucketCdnPolicyCacheKeyPolicy {
  /*
Allows HTTP request headers (by name) to be used in the
cache key.
*/
  IncludeHttpHeaders?: Array<string>;

  /*
Names of query string parameters to include in cache keys.
Default parameters are always included. '&' and '=' will
be percent encoded and not treated as delimiters.
*/
  QueryStringWhitelists?: Array<string>;
}

export function Compute_getBackendBucketCdnPolicyCacheKeyPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "IncludeHttpHeaders",
      "Allows HTTP request headers (by name) to be used in the\ncache key.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "QueryStringWhitelists",
      "Names of query string parameters to include in cache keys.\nDefault parameters are always included. '&' and '=' will\nbe percent encoded and not treated as delimiters.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
