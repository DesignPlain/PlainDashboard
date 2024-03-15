import { SecretReplicationAuto } from "./SecretReplicationAuto";
import { SecretReplicationUserManaged } from "./SecretReplicationUserManaged";

export interface SecretReplication {
  /*
The Secret will automatically be replicated without any restrictions.
Structure is documented below.
*/
  Auto?: SecretReplicationAuto;

  /*
The Secret will be replicated to the regions specified by the user.
Structure is documented below.
*/
  UserManaged?: SecretReplicationUserManaged;
}
