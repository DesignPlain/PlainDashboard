import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Secretmanager_getSecretsSecretReplicationAuto,
  Secretmanager_getSecretsSecretReplicationAuto_GetTypes,
} from "./Secretmanager_getSecretsSecretReplicationAuto";
import {
  Secretmanager_getSecretsSecretReplicationUserManaged,
  Secretmanager_getSecretsSecretReplicationUserManaged_GetTypes,
} from "./Secretmanager_getSecretsSecretReplicationUserManaged";

export interface Secretmanager_getSecretsSecretReplication {
  /*
The Secret will automatically be replicated without any restrictions.
Structure is documented below.
*/
  Autos?: Array<Secretmanager_getSecretsSecretReplicationAuto>;

  /*
The Secret will be replicated to the regions specified by the user.
Structure is documented below.
*/
  UserManageds?: Array<Secretmanager_getSecretsSecretReplicationUserManaged>;
}

export function Secretmanager_getSecretsSecretReplication_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Autos",
      "The Secret will automatically be replicated without any restrictions.\nStructure is documented below.",
      Secretmanager_getSecretsSecretReplicationAuto_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "UserManageds",
      "The Secret will be replicated to the regions specified by the user.\nStructure is documented below.",
      Secretmanager_getSecretsSecretReplicationUserManaged_GetTypes(),
      true,
      false,
    ),
  ];
}
