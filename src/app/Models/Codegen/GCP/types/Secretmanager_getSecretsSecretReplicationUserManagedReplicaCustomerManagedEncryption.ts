import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Secretmanager_getSecretsSecretReplicationUserManagedReplicaCustomerManagedEncryption {
  // Describes the Cloud KMS encryption key that will be used to protect destination secret.
  KmsKeyName?: string;
}

export function Secretmanager_getSecretsSecretReplicationUserManagedReplicaCustomerManagedEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "KmsKeyName",
      "Describes the Cloud KMS encryption key that will be used to protect destination secret.",
      [],
      true,
      false,
    ),
  ];
}
