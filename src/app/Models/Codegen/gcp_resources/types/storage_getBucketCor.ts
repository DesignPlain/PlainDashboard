import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface storage_getBucketCor {
  // The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains.
  responseHeaders?: Array<string>;

  // The value, in seconds, to return in the Access-Control-Max-Age header used in preflight responses.
  maxAgeSeconds?: number;

  // The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "-" is permitted in the list of methods, and means "any method".
  methods?: Array<string>;

  // The list of Origins eligible to receive CORS response headers. Note: "-" is permitted in the list of origins, and means "any Origin".
  origins?: Array<string>;
}

export function storage_getBucketCor_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "responseHeaders",
      "The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxAgeSeconds",
      "The value, in seconds, to return in the Access-Control-Max-Age header used in preflight responses.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "methods",
      'The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "*" is permitted in the list of methods, and means "any method".',
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "origins",
      'The list of Origins eligible to receive CORS response headers. Note: "*" is permitted in the list of origins, and means "any Origin".',
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
