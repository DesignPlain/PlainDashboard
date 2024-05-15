import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Secretmanager_SecretReplicationUserManagedReplica,
  Secretmanager_SecretReplicationUserManagedReplica_GetTypes,
} from "./Secretmanager_SecretReplicationUserManagedReplica";

export interface Secretmanager_SecretReplicationUserManaged {
  /*
The list of Replicas for this Secret. Cannot be empty.
Structure is documented below.
*/
  Replicas?: Array<Secretmanager_SecretReplicationUserManagedReplica>;
}

export function Secretmanager_SecretReplicationUserManaged_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Replicas",
      "The list of Replicas for this Secret. Cannot be empty.\nStructure is documented below.",
      Secretmanager_SecretReplicationUserManagedReplica_GetTypes(),
      true,
      true,
    ),
  ];
}
