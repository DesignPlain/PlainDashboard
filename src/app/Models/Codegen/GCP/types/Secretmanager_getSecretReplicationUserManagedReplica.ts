import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Secretmanager_getSecretReplicationUserManagedReplicaCustomerManagedEncryption,
  Secretmanager_getSecretReplicationUserManagedReplicaCustomerManagedEncryption_GetTypes,
} from "./Secretmanager_getSecretReplicationUserManagedReplicaCustomerManagedEncryption";

export interface Secretmanager_getSecretReplicationUserManagedReplica {
  // Customer Managed Encryption for the secret.
  CustomerManagedEncryptions?: Array<Secretmanager_getSecretReplicationUserManagedReplicaCustomerManagedEncryption>;

  // The canonical IDs of the location to replicate data. For example: "us-east1".
  Location?: string;
}

export function Secretmanager_getSecretReplicationUserManagedReplica_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "CustomerManagedEncryptions",
      "Customer Managed Encryption for the secret.",
      Secretmanager_getSecretReplicationUserManagedReplicaCustomerManagedEncryption_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Location",
      'The canonical IDs of the location to replicate data. For example: "us-east1".',
      [],
      true,
      false,
    ),
  ];
}
