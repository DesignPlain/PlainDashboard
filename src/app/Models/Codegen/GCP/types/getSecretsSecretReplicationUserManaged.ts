import { getSecretsSecretReplicationUserManagedReplica } from "./getSecretsSecretReplicationUserManagedReplica";

export interface getSecretsSecretReplicationUserManaged {
  /*
The list of Replicas for this Secret.
Structure is documented below.
*/
  Replicas?: Array<getSecretsSecretReplicationUserManagedReplica>;
}
