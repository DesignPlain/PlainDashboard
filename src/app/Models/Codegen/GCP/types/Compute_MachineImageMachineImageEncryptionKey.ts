import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_MachineImageMachineImageEncryptionKey {
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
(Output)
The RFC 4648 base64 encoded SHA-256 hash of the
customer-supplied encryption key that protects this resource.
*/
  sha256?: string;

  // The name of the encryption key that is stored in Google Cloud KMS.
  kmsKeyName?: string;
}

export function compute_MachineImageMachineImageEncryptionKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "rawKey",
      "Specifies a 256-bit customer-supplied encryption key, encoded in\nRFC 4648 base64 to either encrypt or decrypt this resource.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "sha256",
      "(Output)\nThe RFC 4648 base64 encoded SHA-256 hash of the\ncustomer-supplied encryption key that protects this resource.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyName",
      "The name of the encryption key that is stored in Google Cloud KMS.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyServiceAccount",
      "The service account used for the encryption request for the given KMS key.\nIf absent, the Compute Engine Service Agent service account is used.",
      [],
      false,
      true,
    ),
  ];
}
