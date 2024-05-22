import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_URLMapPathMatcherRouteRuleRouteActionCorsPolicy {
  /*
Specifies the regular expression patterns that match allowed origins. For regular expression grammar
please see en.cppreference.com/w/cpp/regex/ecmascript
An origin is allowed if it matches either an item in allowOrigins or an item in allowOriginRegexes.
*/
  allowOriginRegexes?: Array<string>;

  /*
Specifies the list of origins that will be allowed to do CORS requests.
An origin is allowed if it matches either an item in allowOrigins or an item in allowOriginRegexes.
*/
  allowOrigins?: Array<string>;

  // If true, specifies the CORS policy is disabled. The default value is false, which indicates that the CORS policy is in effect.
  disabled?: boolean;

  // Specifies the content for the Access-Control-Expose-Headers header.
  exposeHeaders?: Array<string>;

  /*
Specifies how long results of a preflight request can be cached in seconds.
This translates to the Access-Control-Max-Age header.
*/
  maxAge?: number;

  /*
In response to a preflight request, setting this to true indicates that the actual request can include user credentials.
This translates to the Access-Control-Allow-Credentials header.
*/
  allowCredentials?: boolean;

  // Specifies the content for the Access-Control-Allow-Headers header.
  allowHeaders?: Array<string>;

  // Specifies the content for the Access-Control-Allow-Methods header.
  allowMethods?: Array<string>;
}

export function compute_URLMapPathMatcherRouteRuleRouteActionCorsPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "exposeHeaders",
      "Specifies the content for the Access-Control-Expose-Headers header.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxAge",
      "Specifies how long results of a preflight request can be cached in seconds.\nThis translates to the Access-Control-Max-Age header.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "allowCredentials",
      "In response to a preflight request, setting this to true indicates that the actual request can include user credentials.\nThis translates to the Access-Control-Allow-Credentials header.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "allowHeaders",
      "Specifies the content for the Access-Control-Allow-Headers header.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "allowMethods",
      "Specifies the content for the Access-Control-Allow-Methods header.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "allowOriginRegexes",
      "Specifies the regular expression patterns that match allowed origins. For regular expression grammar\nplease see en.cppreference.com/w/cpp/regex/ecmascript\nAn origin is allowed if it matches either an item in allowOrigins or an item in allowOriginRegexes.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "allowOrigins",
      "Specifies the list of origins that will be allowed to do CORS requests.\nAn origin is allowed if it matches either an item in allowOrigins or an item in allowOriginRegexes.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "disabled",
      "If true, specifies the CORS policy is disabled. The default value is false, which indicates that the CORS policy is in effect.",
      [],
      false,
      false,
    ),
  ];
}
