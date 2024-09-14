import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_getSnapshotSnapshotEncryptionKey {
  // The name of the encryption key that is stored in Google Cloud KMS.
  kmsKeySelfLink?: string;

  /*
The service account used for the encryption request for the given KMS key.
If absent, the Compute Engine Service Agent service account is used.
*/
  kmsKeyServiceAccount?: string;

  /*
Specifies a 256-bit customer-supplied encryption key, encoded in
RFC 4648 base64 to either encrypt or decrypt this resource.
*/
  rawKey?: string;

  /*
The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied
encryption key that protects this resource.
*/
  sha256?: string;
}

export function compute_getSnapshotSnapshotEncryptionKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "sha256",
      "The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied\nencryption key that protects this resource.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeySelfLink",
      "The name of the encryption key that is stored in Google Cloud KMS.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyServiceAccount",
      "The service account used for the encryption request for the given KMS key.\nIf absent, the Compute Engine Service Agent service account is used.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "rawKey",
      "Specifies a 256-bit customer-supplied encryption key, encoded in\nRFC 4648 base64 to either encrypt or decrypt this resource.",
      () => [],
      true,
      false,
    ),
  ];
}
