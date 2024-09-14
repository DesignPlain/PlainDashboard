import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  secretmanager_getSecretReplicationAuto,
  secretmanager_getSecretReplicationAuto_GetTypes,
} from "./secretmanager_getSecretReplicationAuto";
import {
  secretmanager_getSecretReplicationUserManaged,
  secretmanager_getSecretReplicationUserManaged_GetTypes,
} from "./secretmanager_getSecretReplicationUserManaged";

export interface secretmanager_getSecretReplication {
  // The Secret will automatically be replicated without any restrictions.
  autos?: Array<secretmanager_getSecretReplicationAuto>;

  // The Secret will be replicated to the regions specified by the user.
  userManageds?: Array<secretmanager_getSecretReplicationUserManaged>;
}

export function secretmanager_getSecretReplication_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "userManageds",
      "The Secret will be replicated to the regions specified by the user.",
      () => secretmanager_getSecretReplicationUserManaged_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "autos",
      "The Secret will automatically be replicated without any restrictions.",
      () => secretmanager_getSecretReplicationAuto_GetTypes(),
      true,
      false,
    ),
  ];
}
