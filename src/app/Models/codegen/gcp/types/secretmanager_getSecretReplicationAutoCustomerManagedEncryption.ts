import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface secretmanager_getSecretReplicationAutoCustomerManagedEncryption {
  // The resource name of the Cloud KMS CryptoKey used to encrypt secret payloads.
  kmsKeyName?: string;
}

export function secretmanager_getSecretReplicationAutoCustomerManagedEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "kmsKeyName",
      "The resource name of the Cloud KMS CryptoKey used to encrypt secret payloads.",
      () => [],
      true,
      false,
    ),
  ];
}
