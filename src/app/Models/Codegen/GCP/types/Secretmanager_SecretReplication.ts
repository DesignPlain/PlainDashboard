import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Secretmanager_SecretReplicationAuto,
  Secretmanager_SecretReplicationAuto_GetTypes,
} from "./Secretmanager_SecretReplicationAuto";
import {
  Secretmanager_SecretReplicationUserManaged,
  Secretmanager_SecretReplicationUserManaged_GetTypes,
} from "./Secretmanager_SecretReplicationUserManaged";

export interface Secretmanager_SecretReplication {
  /*
The Secret will automatically be replicated without any restrictions.
Structure is documented below.
*/
  Auto?: Secretmanager_SecretReplicationAuto;

  /*
The Secret will be replicated to the regions specified by the user.
Structure is documented below.
*/
  UserManaged?: Secretmanager_SecretReplicationUserManaged;
}

export function Secretmanager_SecretReplication_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Auto",
      "The Secret will automatically be replicated without any restrictions.\nStructure is documented below.",
      Secretmanager_SecretReplicationAuto_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "UserManaged",
      "The Secret will be replicated to the regions specified by the user.\nStructure is documented below.",
      Secretmanager_SecretReplicationUserManaged_GetTypes(),
      false,
      true,
    ),
  ];
}
