import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface secretmanager_getSecretsSecretReplicationUserManagedReplicaCustomerManagedEncryption {
  // Describes the Cloud KMS encryption key that will be used to protect destination secret.
  kmsKeyName?: string;
}

export function secretmanager_getSecretsSecretReplicationUserManagedReplicaCustomerManagedEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'kmsKeyName',
      'Describes the Cloud KMS encryption key that will be used to protect destination secret.',
      () => [],
      true,
      false,
    ),
  ];
}
