import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface s3_BucketCorsConfigurationV2CorsRule {
  // Set of HTTP methods that you allow the origin to execute. Valid values are `GET`, `PUT`, `HEAD`, `POST`, and `DELETE`.
  allowedMethods?: Array<string>;

  // Set of origins you want customers to be able to access the bucket from.
  allowedOrigins?: Array<string>;

  // Set of headers in the response that you want customers to be able to access from their applications (for example, from a JavaScript `XMLHttpRequest` object).
  exposeHeaders?: Array<string>;

  // Unique identifier for the rule. The value cannot be longer than 255 characters.
  id?: string;

  // Time in seconds that your browser is to cache the preflight response for the specified resource.
  maxAgeSeconds?: number;

  // Set of Headers that are specified in the `Access-Control-Request-Headers` header.
  allowedHeaders?: Array<string>;
}

export function s3_BucketCorsConfigurationV2CorsRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "allowedHeaders",
      "Set of Headers that are specified in the `Access-Control-Request-Headers` header.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "allowedMethods",
      "Set of HTTP methods that you allow the origin to execute. Valid values are `GET`, `PUT`, `HEAD`, `POST`, and `DELETE`.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "allowedOrigins",
      "Set of origins you want customers to be able to access the bucket from.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "exposeHeaders",
      "Set of headers in the response that you want customers to be able to access from their applications (for example, from a JavaScript `XMLHttpRequest` object).",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "Unique identifier for the rule. The value cannot be longer than 255 characters.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxAgeSeconds",
      "Time in seconds that your browser is to cache the preflight response for the specified resource.",
      [],
      false,
      false,
    ),
  ];
}
