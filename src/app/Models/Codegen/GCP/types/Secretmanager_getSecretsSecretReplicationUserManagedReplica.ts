import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Secretmanager_getSecretsSecretReplicationUserManagedReplicaCustomerManagedEncryption,
  Secretmanager_getSecretsSecretReplicationUserManagedReplicaCustomerManagedEncryption_GetTypes,
} from "./Secretmanager_getSecretsSecretReplicationUserManagedReplicaCustomerManagedEncryption";

export interface Secretmanager_getSecretsSecretReplicationUserManagedReplica {
  /*
Customer Managed Encryption for the secret.
Structure is documented below.
*/
  CustomerManagedEncryptions?: Array<Secretmanager_getSecretsSecretReplicationUserManagedReplicaCustomerManagedEncryption>;

  // The canonical IDs of the location to replicate data.
  Location?: string;
}

export function Secretmanager_getSecretsSecretReplicationUserManagedReplica_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "CustomerManagedEncryptions",
      "Customer Managed Encryption for the secret.\nStructure is documented below.",
      Secretmanager_getSecretsSecretReplicationUserManagedReplicaCustomerManagedEncryption_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Location",
      "The canonical IDs of the location to replicate data.",
      [],
      true,
      false,
    ),
  ];
}
