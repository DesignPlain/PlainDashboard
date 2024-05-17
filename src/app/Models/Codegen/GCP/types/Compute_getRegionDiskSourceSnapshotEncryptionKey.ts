import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getRegionDiskSourceSnapshotEncryptionKey {
  // The name of the encryption key that is stored in Google Cloud KMS.
  KmsKeyName?: string;

  /*
Specifies a 256-bit customer-supplied encryption key, encoded in
RFC 4648 base64 to either encrypt or decrypt this resource.
*/
  RawKey?: string;

  /*
The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied
encryption key that protects this resource.
*/
  Sha256?: string;
}

export function Compute_getRegionDiskSourceSnapshotEncryptionKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "KmsKeyName",
      "The name of the encryption key that is stored in Google Cloud KMS.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RawKey",
      "Specifies a 256-bit customer-supplied encryption key, encoded in\nRFC 4648 base64 to either encrypt or decrypt this resource.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Sha256",
      "The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied\nencryption key that protects this resource.",
      [],
      true,
      false,
    ),
  ];
}
