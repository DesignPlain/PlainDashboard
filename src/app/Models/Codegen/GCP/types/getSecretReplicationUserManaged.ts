import { getSecretReplicationUserManagedReplica } from "./getSecretReplicationUserManagedReplica";

export interface getSecretReplicationUserManaged {
  // The list of Replicas for this Secret. Cannot be empty.
  Replicas?: Array<getSecretReplicationUserManagedReplica>;
}
