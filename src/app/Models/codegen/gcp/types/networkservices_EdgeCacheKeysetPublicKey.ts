import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface networkservices_EdgeCacheKeysetPublicKey {
  /*
The ID of the public key. The ID must be 1-63 characters long, and comply with RFC1035.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]-
which means the first character must be a letter, and all following characters must be a dash, underscore, letter or digit.
*/
  id?: string;

  // Set to true to have the CDN automatically manage this public key value.
  managed?: boolean;

  /*
The base64-encoded value of the Ed25519 public key. The base64 encoding can be padded (44 bytes) or unpadded (43 bytes).
Representations or encodings of the public key other than this will be rejected with an error.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  value?: string;
}

export function networkservices_EdgeCacheKeysetPublicKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "id",
      "The ID of the public key. The ID must be 1-63 characters long, and comply with RFC1035.\nThe name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]*\nwhich means the first character must be a letter, and all following characters must be a dash, underscore, letter or digit.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "managed",
      "Set to true to have the CDN automatically manage this public key value.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The base64-encoded value of the Ed25519 public key. The base64 encoding can be padded (44 bytes) or unpadded (43 bytes).\nRepresentations or encodings of the public key other than this will be rejected with an error.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      () => [],
      false,
      false,
    ),
  ];
}
