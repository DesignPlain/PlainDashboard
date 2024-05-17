import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Secretmanager_getSecretReplicationAuto,
  Secretmanager_getSecretReplicationAuto_GetTypes,
} from "./Secretmanager_getSecretReplicationAuto";
import {
  Secretmanager_getSecretReplicationUserManaged,
  Secretmanager_getSecretReplicationUserManaged_GetTypes,
} from "./Secretmanager_getSecretReplicationUserManaged";

export interface Secretmanager_getSecretReplication {
  // The Secret will automatically be replicated without any restrictions.
  Autos?: Array<Secretmanager_getSecretReplicationAuto>;

  // The Secret will be replicated to the regions specified by the user.
  UserManageds?: Array<Secretmanager_getSecretReplicationUserManaged>;
}

export function Secretmanager_getSecretReplication_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Autos",
      "The Secret will automatically be replicated without any restrictions.",
      Secretmanager_getSecretReplicationAuto_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "UserManageds",
      "The Secret will be replicated to the regions specified by the user.",
      Secretmanager_getSecretReplicationUserManaged_GetTypes(),
      true,
      false,
    ),
  ];
}
