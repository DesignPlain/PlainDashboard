import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  secretmanager_SecretReplicationAuto,
  secretmanager_SecretReplicationAuto_GetTypes,
} from "./secretmanager_SecretReplicationAuto";
import {
  secretmanager_SecretReplicationUserManaged,
  secretmanager_SecretReplicationUserManaged_GetTypes,
} from "./secretmanager_SecretReplicationUserManaged";

export interface secretmanager_SecretReplication {
  /*
The Secret will automatically be replicated without any restrictions.
Structure is documented below.
*/
  auto?: secretmanager_SecretReplicationAuto;

  /*
The Secret will be replicated to the regions specified by the user.
Structure is documented below.
*/
  userManaged?: secretmanager_SecretReplicationUserManaged;
}

export function secretmanager_SecretReplication_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "auto",
      "The Secret will automatically be replicated without any restrictions.\nStructure is documented below.",
      secretmanager_SecretReplicationAuto_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "userManaged",
      "The Secret will be replicated to the regions specified by the user.\nStructure is documented below.",
      secretmanager_SecretReplicationUserManaged_GetTypes(),
      false,
      true,
    ),
  ];
}
