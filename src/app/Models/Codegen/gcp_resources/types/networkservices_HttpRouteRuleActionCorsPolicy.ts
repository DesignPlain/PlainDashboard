import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface networkservices_HttpRouteRuleActionCorsPolicy {
  // Specifies the content for Access-Control-Allow-Methods header.
  allowMethods?: Array<string>;

  // Specifies the regular expression patterns that match allowed origins.
  allowOriginRegexes?: Array<string>;

  // Specifies the list of origins that will be allowed to do CORS requests.
  allowOrigins?: Array<string>;

  /*
If true, the CORS policy is disabled. The default value is false, which indicates that the CORS policy is in effect.

- - -
*/
  disabled?: boolean;

  // Specifies the content for Access-Control-Expose-Headers header.
  exposeHeaders?: Array<string>;

  // Specifies how long result of a preflight request can be cached in seconds.
  maxAge?: string;

  // In response to a preflight request, setting this to true indicates that the actual request can include user credentials.
  allowCredentials?: boolean;

  // Specifies the content for Access-Control-Allow-Headers header.
  allowHeaders?: Array<string>;
}

export function networkservices_HttpRouteRuleActionCorsPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "allowCredentials",
      "In response to a preflight request, setting this to true indicates that the actual request can include user credentials.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "allowHeaders",
      "Specifies the content for Access-Control-Allow-Headers header.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "allowMethods",
      "Specifies the content for Access-Control-Allow-Methods header.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "allowOriginRegexes",
      "Specifies the regular expression patterns that match allowed origins.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "allowOrigins",
      "Specifies the list of origins that will be allowed to do CORS requests.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "disabled",
      "If true, the CORS policy is disabled. The default value is false, which indicates that the CORS policy is in effect.\n\n- - -",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "exposeHeaders",
      "Specifies the content for Access-Control-Expose-Headers header.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "maxAge",
      "Specifies how long result of a preflight request can be cached in seconds.",
      [],
      false,
      false,
    ),
  ];
}
