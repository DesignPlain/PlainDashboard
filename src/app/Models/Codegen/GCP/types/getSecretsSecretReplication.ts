import { getSecretsSecretReplicationUserManaged } from "./getSecretsSecretReplicationUserManaged";
import { getSecretsSecretReplicationAuto } from "./getSecretsSecretReplicationAuto";

export interface getSecretsSecretReplication {
  /*
The Secret will be replicated to the regions specified by the user.
Structure is documented below.
*/
  UserManageds?: Array<getSecretsSecretReplicationUserManaged>;

  /*
The Secret will automatically be replicated without any restrictions.
Structure is documented below.
*/
  Autos?: Array<getSecretsSecretReplicationAuto>;
}
