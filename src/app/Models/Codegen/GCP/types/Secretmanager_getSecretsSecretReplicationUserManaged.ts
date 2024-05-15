import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Secretmanager_getSecretsSecretReplicationUserManagedReplica,
  Secretmanager_getSecretsSecretReplicationUserManagedReplica_GetTypes,
} from "./Secretmanager_getSecretsSecretReplicationUserManagedReplica";

export interface Secretmanager_getSecretsSecretReplicationUserManaged {
  /*
The list of Replicas for this Secret.
Structure is documented below.
*/
  Replicas?: Array<Secretmanager_getSecretsSecretReplicationUserManagedReplica>;
}

export function Secretmanager_getSecretsSecretReplicationUserManaged_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Replicas",
      "The list of Replicas for this Secret.\nStructure is documented below.",
      Secretmanager_getSecretsSecretReplicationUserManagedReplica_GetTypes(),
      true,
      false,
    ),
  ];
}
