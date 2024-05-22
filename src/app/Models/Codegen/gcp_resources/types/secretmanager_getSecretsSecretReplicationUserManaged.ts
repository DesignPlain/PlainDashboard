import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
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
      secretmanager_getSecretsSecretReplicationUserManagedReplica_GetTypes(),
      true,
      false,
    ),
  ];
}
