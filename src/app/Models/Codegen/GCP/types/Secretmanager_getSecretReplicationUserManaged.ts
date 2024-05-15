import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Secretmanager_getSecretReplicationUserManagedReplica,
  Secretmanager_getSecretReplicationUserManagedReplica_GetTypes,
} from "./Secretmanager_getSecretReplicationUserManagedReplica";

export interface Secretmanager_getSecretReplicationUserManaged {
  // The list of Replicas for this Secret. Cannot be empty.
  Replicas?: Array<Secretmanager_getSecretReplicationUserManagedReplica>;
}

export function Secretmanager_getSecretReplicationUserManaged_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Replicas",
      "The list of Replicas for this Secret. Cannot be empty.",
      Secretmanager_getSecretReplicationUserManagedReplica_GetTypes(),
      true,
      false,
    ),
  ];
}
