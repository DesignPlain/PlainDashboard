import { SecretReplicationUserManagedReplica } from "./SecretReplicationUserManagedReplica";

export interface SecretReplicationUserManaged {
  /*
The list of Replicas for this Secret. Cannot be empty.
Structure is documented below.
*/
  Replicas?: Array<SecretReplicationUserManagedReplica>;
}
