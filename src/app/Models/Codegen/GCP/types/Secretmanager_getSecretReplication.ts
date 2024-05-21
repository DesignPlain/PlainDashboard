import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  secretmanager_getSecretReplicationUserManaged,
  secretmanager_getSecretReplicationUserManaged_GetTypes,
} from "./secretmanager_getSecretReplicationUserManaged";
import {
  secretmanager_getSecretReplicationAuto,
  secretmanager_getSecretReplicationAuto_GetTypes,
} from "./secretmanager_getSecretReplicationAuto";

export interface secretmanager_getSecretReplication {
  // The Secret will be replicated to the regions specified by the user.
  userManageds?: Array<secretmanager_getSecretReplicationUserManaged>;

  // The Secret will automatically be replicated without any restrictions.
  autos?: Array<secretmanager_getSecretReplicationAuto>;
}

export function secretmanager_getSecretReplication_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "userManageds",
      "The Secret will be replicated to the regions specified by the user.",
      secretmanager_getSecretReplicationUserManaged_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "autos",
      "The Secret will automatically be replicated without any restrictions.",
      secretmanager_getSecretReplicationAuto_GetTypes(),
      true,
      false,
    ),
  ];
}
