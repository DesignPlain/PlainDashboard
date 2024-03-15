import { getSecretsSecretReplicationUserManagedReplicaCustomerManagedEncryption } from "./getSecretsSecretReplicationUserManagedReplicaCustomerManagedEncryption";

export interface getSecretsSecretReplicationUserManagedReplica {
  /*
Customer Managed Encryption for the secret.
Structure is documented below.
*/
  CustomerManagedEncryptions?: Array<getSecretsSecretReplicationUserManagedReplicaCustomerManagedEncryption>;

  // The canonical IDs of the location to replicate data.
  Location?: string;
}
