import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface storage_BucketObjectCustomerEncryption {
  // Encryption algorithm. Default: AES256
  encryptionAlgorithm?: string;

  // Base64 encoded Customer-Supplied Encryption Key.
  encryptionKey?: string;
}

export function storage_BucketObjectCustomerEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "encryptionAlgorithm",
      "Encryption algorithm. Default: AES256",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "encryptionKey",
      "Base64 encoded Customer-Supplied Encryption Key.",
      [],
      true,
      true,
    ),
  ];
}
