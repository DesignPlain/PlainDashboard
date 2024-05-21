import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface edgecontainer_NodePoolLocalDiskEncryption {
  /*
(Output)
Availability of the Cloud KMS CryptoKey. If not KEY_AVAILABLE, then nodes may go offline as they cannot access their local data.
This can be caused by a lack of permissions to use the key, or if the key is disabled or deleted.
*/
  kmsKeyState?: string;

  /*
The Cloud KMS CryptoKey e.g. projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey} to use for protecting node local disks.
If not specified, a Google-managed key will be used instead.
*/
  kmsKey?: string;

  /*
(Output)
The Cloud KMS CryptoKeyVersion currently in use for protecting node local disks. Only applicable if kmsKey is set.
*/
  kmsKeyActiveVersion?: string;
}

export function edgecontainer_NodePoolLocalDiskEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "kmsKeyState",
      "(Output)\nAvailability of the Cloud KMS CryptoKey. If not KEY_AVAILABLE, then nodes may go offline as they cannot access their local data.\nThis can be caused by a lack of permissions to use the key, or if the key is disabled or deleted.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKey",
      "The Cloud KMS CryptoKey e.g. projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey} to use for protecting node local disks.\nIf not specified, a Google-managed key will be used instead.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyActiveVersion",
      "(Output)\nThe Cloud KMS CryptoKeyVersion currently in use for protecting node local disks. Only applicable if kmsKey is set.",
      [],
      false,
      false,
    ),
  ];
}
