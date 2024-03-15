import { getSecretReplicationAuto } from "./getSecretReplicationAuto";
import { getSecretReplicationUserManaged } from "./getSecretReplicationUserManaged";

export interface getSecretReplication {
  // The Secret will automatically be replicated without any restrictions.
  Autos?: Array<getSecretReplicationAuto>;

  // The Secret will be replicated to the regions specified by the user.
  UserManageds?: Array<getSecretReplicationUserManaged>;
}
