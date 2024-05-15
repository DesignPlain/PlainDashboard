import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Secretmanager_getSecretReplicationAutoCustomerManagedEncryption {
  // The resource name of the Cloud KMS CryptoKey used to encrypt secret payloads.
  KmsKeyName?: string;
}

export function Secretmanager_getSecretReplicationAutoCustomerManagedEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "KmsKeyName",
      "The resource name of the Cloud KMS CryptoKey used to encrypt secret payloads.",
      [],
      true,
      false,
    ),
  ];
}
