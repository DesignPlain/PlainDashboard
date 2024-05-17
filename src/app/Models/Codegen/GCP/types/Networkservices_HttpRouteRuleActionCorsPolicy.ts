import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkservices_HttpRouteRuleActionCorsPolicy {
  // Specifies the content for Access-Control-Expose-Headers header.
  ExposeHeaders?: Array<string>;

  // Specifies how long result of a preflight request can be cached in seconds.
  MaxAge?: string;

  // In response to a preflight request, setting this to true indicates that the actual request can include user credentials.
  AllowCredentials?: boolean;

  // Specifies the content for Access-Control-Allow-Headers header.
  AllowHeaders?: Array<string>;

  // Specifies the content for Access-Control-Allow-Methods header.
  AllowMethods?: Array<string>;

  // Specifies the regular expression patterns that match allowed origins.
  AllowOriginRegexes?: Array<string>;

  // Specifies the list of origins that will be allowed to do CORS requests.
  AllowOrigins?: Array<string>;

  /*
If true, the CORS policy is disabled. The default value is false, which indicates that the CORS policy is in effect.

- - -
*/
  Disabled?: boolean;
}

export function Networkservices_HttpRouteRuleActionCorsPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "AllowCredentials",
      "In response to a preflight request, setting this to true indicates that the actual request can include user credentials.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AllowHeaders",
      "Specifies the content for Access-Control-Allow-Headers header.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AllowMethods",
      "Specifies the content for Access-Control-Allow-Methods header.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AllowOriginRegexes",
      "Specifies the regular expression patterns that match allowed origins.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AllowOrigins",
      "Specifies the list of origins that will be allowed to do CORS requests.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Disabled",
      "If true, the CORS policy is disabled. The default value is false, which indicates that the CORS policy is in effect.\n\n- - -",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ExposeHeaders",
      "Specifies the content for Access-Control-Expose-Headers header.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MaxAge",
      "Specifies how long result of a preflight request can be cached in seconds.",
      [],
      false,
      false,
    ),
  ];
}
