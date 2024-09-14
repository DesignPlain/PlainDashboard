import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  secretmanager_SecretReplicationUserManagedReplica,
  secretmanager_SecretReplicationUserManagedReplica_GetTypes,
} from "./secretmanager_SecretReplicationUserManagedReplica";

export interface secretmanager_SecretReplicationUserManaged {
  /*
The list of Replicas for this Secret. Cannot be empty.
Structure is documented below.
*/
  replicas?: Array<secretmanager_SecretReplicationUserManagedReplica>;
}

export function secretmanager_SecretReplicationUserManaged_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "replicas",
      "The list of Replicas for this Secret. Cannot be empty.\nStructure is documented below.",
      () => secretmanager_SecretReplicationUserManagedReplica_GetTypes(),
      true,
      true,
    ),
  ];
}
