import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface s3_BucketCorsRule {
  // Specifies expose header in the response.
  exposeHeaders?: Array<string>;

  // Specifies time in seconds that browser can cache the response for a preflight request.
  maxAgeSeconds?: number;

  // Specifies which headers are allowed.
  allowedHeaders?: Array<string>;

  // Specifies which methods are allowed. Can be `GET`, `PUT`, `POST`, `DELETE` or `HEAD`.
  allowedMethods?: Array<string>;

  // Specifies which origins are allowed.
  allowedOrigins?: Array<string>;
}

export function s3_BucketCorsRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "exposeHeaders",
      "Specifies expose header in the response.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
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
      "Specifies which headers are allowed.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "allowedMethods",
      "Specifies which methods are allowed. Can be `GET`, `PUT`, `POST`, `DELETE` or `HEAD`.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "allowedOrigins",
      "Specifies which origins are allowed.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
