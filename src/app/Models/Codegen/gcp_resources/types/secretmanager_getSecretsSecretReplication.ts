import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  secretmanager_getSecretsSecretReplicationUserManaged,
  secretmanager_getSecretsSecretReplicationUserManaged_GetTypes,
} from "./secretmanager_getSecretsSecretReplicationUserManaged";
import {
  secretmanager_getSecretsSecretReplicationAuto,
  secretmanager_getSecretsSecretReplicationAuto_GetTypes,
} from "./secretmanager_getSecretsSecretReplicationAuto";

export interface secretmanager_getSecretsSecretReplication {
  /*
The Secret will automatically be replicated without any restrictions.
Structure is documented below.
*/
  autos?: Array<secretmanager_getSecretsSecretReplicationAuto>;

  /*
The Secret will be replicated to the regions specified by the user.
Structure is documented below.
*/
  userManageds?: Array<secretmanager_getSecretsSecretReplicationUserManaged>;
}

export function secretmanager_getSecretsSecretReplication_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "autos",
      "The Secret will automatically be replicated without any restrictions.\nStructure is documented below.",
      secretmanager_getSecretsSecretReplicationAuto_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "userManageds",
      "The Secret will be replicated to the regions specified by the user.\nStructure is documented below.",
      secretmanager_getSecretsSecretReplicationUserManaged_GetTypes(),
      true,
      false,
    ),
  ];
}
