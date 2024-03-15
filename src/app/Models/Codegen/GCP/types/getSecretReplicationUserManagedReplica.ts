import { getSecretReplicationUserManagedReplicaCustomerManagedEncryption } from "./getSecretReplicationUserManagedReplicaCustomerManagedEncryption";

export interface getSecretReplicationUserManagedReplica {
  // Customer Managed Encryption for the secret.
  CustomerManagedEncryptions?: Array<getSecretReplicationUserManagedReplicaCustomerManagedEncryption>;

  // The canonical IDs of the location to replicate data. For example: "us-east1".
  Location?: string;
}
