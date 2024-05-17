import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_SnapshotSnapshotEncryptionKey {
  // The name of the encryption key that is stored in Google Cloud KMS.
  KmsKeySelfLink?: string;

  /*
The service account used for the encryption request for the given KMS key.
If absent, the Compute Engine Service Agent service account is used.
*/
  KmsKeyServiceAccount?: string;

  /*
Specifies a 256-bit customer-supplied encryption key, encoded in
RFC 4648 base64 to either encrypt or decrypt this resource.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  RawKey?: string;

  /*
(Output)
The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied
encryption key that protects this resource.
*/
  Sha256?: string;
}

export function Compute_SnapshotSnapshotEncryptionKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "KmsKeySelfLink",
      "The name of the encryption key that is stored in Google Cloud KMS.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "KmsKeyServiceAccount",
      "The service account used for the encryption request for the given KMS key.\nIf absent, the Compute Engine Service Agent service account is used.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "RawKey",
      "Specifies a 256-bit customer-supplied encryption key, encoded in\nRFC 4648 base64 to either encrypt or decrypt this resource.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Sha256",
      "(Output)\nThe RFC 4648 base64 encoded SHA-256 hash of the customer-supplied\nencryption key that protects this resource.",
      [],
      false,
      false,
    ),
  ];
}
