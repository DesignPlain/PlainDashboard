import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Storage_getBucketCor {
  // The value, in seconds, to return in the Access-Control-Max-Age header used in preflight responses.
  MaxAgeSeconds?: number;

  // The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "-" is permitted in the list of methods, and means "any method".
  Methods?: Array<string>;

  // The list of Origins eligible to receive CORS response headers. Note: "-" is permitted in the list of origins, and means "any Origin".
  Origins?: Array<string>;

  // The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains.
  ResponseHeaders?: Array<string>;
}

export function Storage_getBucketCor_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "MaxAgeSeconds",
      "The value, in seconds, to return in the Access-Control-Max-Age header used in preflight responses.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Methods",
      'The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "*" is permitted in the list of methods, and means "any method".',
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Origins",
      'The list of Origins eligible to receive CORS response headers. Note: "*" is permitted in the list of origins, and means "any Origin".',
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ResponseHeaders",
      "The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
