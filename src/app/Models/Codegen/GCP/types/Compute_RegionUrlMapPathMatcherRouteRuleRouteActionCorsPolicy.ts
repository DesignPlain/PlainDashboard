import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_RegionUrlMapPathMatcherRouteRuleRouteActionCorsPolicy {
  /*
Specifies how long results of a preflight request can be cached in seconds.
This translates to the Access-Control-Max-Age header.
*/
  MaxAge?: number;

  /*
In response to a preflight request, setting this to true indicates that the actual request can include user credentials. This field translates to the Access-Control-Allow-Credentials header.
Default is false.
*/
  AllowCredentials?: boolean;

  // Specifies the content for the Access-Control-Allow-Headers header.
  AllowHeaders?: Array<string>;

  // Specifies the content for the Access-Control-Allow-Methods header.
  AllowMethods?: Array<string>;

  /*
Specifies the regualar expression patterns that match allowed origins. For regular expression grammar
please see en.cppreference.com/w/cpp/regex/ecmascript
An origin is allowed if it matches either an item in allowOrigins or an item in allowOriginRegexes.
*/
  AllowOriginRegexes?: Array<string>;

  /*
Specifies the list of origins that will be allowed to do CORS requests.
An origin is allowed if it matches either an item in allowOrigins or an item in allowOriginRegexes.
*/
  AllowOrigins?: Array<string>;

  // If true, the setting specifies the CORS policy is disabled. The default value of false, which indicates that the CORS policy is in effect.
  Disabled?: boolean;

  // Specifies the content for the Access-Control-Expose-Headers header.
  ExposeHeaders?: Array<string>;
}

export function Compute_RegionUrlMapPathMatcherRouteRuleRouteActionCorsPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AllowOriginRegexes",
      "Specifies the regualar expression patterns that match allowed origins. For regular expression grammar\nplease see en.cppreference.com/w/cpp/regex/ecmascript\nAn origin is allowed if it matches either an item in allowOrigins or an item in allowOriginRegexes.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AllowOrigins",
      "Specifies the list of origins that will be allowed to do CORS requests.\nAn origin is allowed if it matches either an item in allowOrigins or an item in allowOriginRegexes.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Disabled",
      "If true, the setting specifies the CORS policy is disabled. The default value of false, which indicates that the CORS policy is in effect.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ExposeHeaders",
      "Specifies the content for the Access-Control-Expose-Headers header.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxAge",
      "Specifies how long results of a preflight request can be cached in seconds.\nThis translates to the Access-Control-Max-Age header.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "AllowCredentials",
      "In response to a preflight request, setting this to true indicates that the actual request can include user credentials. This field translates to the Access-Control-Allow-Credentials header.\nDefault is false.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AllowHeaders",
      "Specifies the content for the Access-Control-Allow-Headers header.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AllowMethods",
      "Specifies the content for the Access-Control-Allow-Methods header.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
