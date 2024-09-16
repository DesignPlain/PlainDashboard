import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  secretmanager_getSecretReplicationUserManagedReplicaCustomerManagedEncryption,
  secretmanager_getSecretReplicationUserManagedReplicaCustomerManagedEncryption_GetTypes,
} from './secretmanager_getSecretReplicationUserManagedReplicaCustomerManagedEncryption';

export interface secretmanager_getSecretReplicationUserManagedReplica {
  // Customer Managed Encryption for the secret.
  customerManagedEncryptions?: Array<secretmanager_getSecretReplicationUserManagedReplicaCustomerManagedEncryption>;

  // The canonical IDs of the location to replicate data. For example: "us-east1".
  location?: string;
}

export function secretmanager_getSecretReplicationUserManagedReplica_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'customerManagedEncryptions',
      'Customer Managed Encryption for the secret.',
      () =>
        secretmanager_getSecretReplicationUserManagedReplicaCustomerManagedEncryption_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'location',
      'The canonical IDs of the location to replicate data. For example: "us-east1".',
      () => [],
      true,
      false,
    ),
  ];
}
