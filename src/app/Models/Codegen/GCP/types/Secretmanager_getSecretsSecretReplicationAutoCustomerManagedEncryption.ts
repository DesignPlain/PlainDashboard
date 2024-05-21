import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface secretmanager_getSecretsSecretReplicationAutoCustomerManagedEncryption {
  // Describes the Cloud KMS encryption key that will be used to protect destination secret.
  kmsKeyName?: string;
}

export function secretmanager_getSecretsSecretReplicationAutoCustomerManagedEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "kmsKeyName",
      "Describes the Cloud KMS encryption key that will be used to protect destination secret.",
      [],
      true,
      false,
    ),
  ];
}
