import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  secretmanager_getSecretReplicationUserManagedReplica,
  secretmanager_getSecretReplicationUserManagedReplica_GetTypes,
} from "./secretmanager_getSecretReplicationUserManagedReplica";

export interface secretmanager_getSecretReplicationUserManaged {
  // The list of Replicas for this Secret. Cannot be empty.
  replicas?: Array<secretmanager_getSecretReplicationUserManagedReplica>;
}

export function secretmanager_getSecretReplicationUserManaged_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "replicas",
      "The list of Replicas for this Secret. Cannot be empty.",
      secretmanager_getSecretReplicationUserManagedReplica_GetTypes(),
      true,
      false,
    ),
  ];
}
