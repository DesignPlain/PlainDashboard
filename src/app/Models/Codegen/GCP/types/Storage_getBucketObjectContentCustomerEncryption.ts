import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Storage_getBucketObjectContentCustomerEncryption {
  // The encryption algorithm. Default: AES256
  EncryptionAlgorithm?: string;

  // Base64 encoded customer supplied encryption key.
  EncryptionKey?: string;
}

export function Storage_getBucketObjectContentCustomerEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "EncryptionAlgorithm",
      "The encryption algorithm. Default: AES256",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "EncryptionKey",
      "Base64 encoded customer supplied encryption key.",
      [],
      true,
      false,
    ),
  ];
}
