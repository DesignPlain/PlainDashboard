import { SecretReplicationUserManagedReplicaCustomerManagedEncryption } from "./SecretReplicationUserManagedReplicaCustomerManagedEncryption";

export interface SecretReplicationUserManagedReplica {
  // The canonical IDs of the location to replicate data. For example: "us-east1".
  Location?: string;

  /*
Customer Managed Encryption for the secret.
Structure is documented below.
*/
  CustomerManagedEncryption?: SecretReplicationUserManagedReplicaCustomerManagedEncryption;
}
