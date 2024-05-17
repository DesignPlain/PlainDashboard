import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Storage_BucketObjectCustomerEncryption {
  // Encryption algorithm. Default: AES256
  EncryptionAlgorithm?: string;

  // Base64 encoded Customer-Supplied Encryption Key.
  EncryptionKey?: string;
}

export function Storage_BucketObjectCustomerEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "EncryptionAlgorithm",
      "Encryption algorithm. Default: AES256",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "EncryptionKey",
      "Base64 encoded Customer-Supplied Encryption Key.",
      [],
      true,
      true,
    ),
  ];
}
