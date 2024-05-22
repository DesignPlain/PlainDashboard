import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface s3_BucketV2CorsRule {
  // List of headers allowed.
  allowedHeaders?: Array<string>;

  // One or more HTTP methods that you allow the origin to execute. Can be `GET`, `PUT`, `POST`, `DELETE` or `HEAD`.
  allowedMethods?: Array<string>;

  // One or more origins you want customers to be able to access the bucket from.
  allowedOrigins?: Array<string>;

  // One or more headers in the response that you want customers to be able to access from their applications (for example, from a JavaScript `XMLHttpRequest` object).
  exposeHeaders?: Array<string>;

  // Specifies time in seconds that browser can cache the response for a preflight request.
  maxAgeSeconds?: number;
}

export function s3_BucketV2CorsRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxAgeSeconds",
      "Specifies time in seconds that browser can cache the response for a preflight request.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "allowedHeaders",
      "List of headers allowed.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "allowedMethods",
      "One or more HTTP methods that you allow the origin to execute. Can be `GET`, `PUT`, `POST`, `DELETE` or `HEAD`.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "allowedOrigins",
      "One or more origins you want customers to be able to access the bucket from.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "exposeHeaders",
      "One or more headers in the response that you want customers to be able to access from their applications (for example, from a JavaScript `XMLHttpRequest` object).",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
