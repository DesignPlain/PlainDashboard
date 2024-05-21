import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface storage_getBucketObjectCustomerEncryption {
  // The encryption algorithm. Default: AES256
  encryptionAlgorithm?: string;

  // Base64 encoded customer supplied encryption key.
  encryptionKey?: string;
}

export function storage_getBucketObjectCustomerEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "encryptionAlgorithm",
      "The encryption algorithm. Default: AES256",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "encryptionKey",
      "Base64 encoded customer supplied encryption key.",
      [],
      true,
      false,
    ),
  ];
}
