import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  secretmanager_getSecretsSecretReplicationUserManagedReplica,
  secretmanager_getSecretsSecretReplicationUserManagedReplica_GetTypes,
} from "./secretmanager_getSecretsSecretReplicationUserManagedReplica";

export interface secretmanager_getSecretsSecretReplicationUserManaged {
  /*
The list of Replicas for this Secret.
Structure is documented below.
*/
  replicas?: Array<secretmanager_getSecretsSecretReplicationUserManagedReplica>;
}

export function secretmanager_getSecretsSecretReplicationUserManaged_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "replicas",
      "The list of Replicas for this Secret.\nStructure is documented below.",
      () =>
        secretmanager_getSecretsSecretReplicationUserManagedReplica_GetTypes(),
      true,
      false,
    ),
  ];
}
