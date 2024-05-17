import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Secretmanager_SecretReplicationUserManagedReplicaCustomerManagedEncryption,
  Secretmanager_SecretReplicationUserManagedReplicaCustomerManagedEncryption_GetTypes,
} from "./Secretmanager_SecretReplicationUserManagedReplicaCustomerManagedEncryption";

export interface Secretmanager_SecretReplicationUserManagedReplica {
  // The canonical IDs of the location to replicate data. For example: "us-east1".
  Location?: string;

  /*
Customer Managed Encryption for the secret.
Structure is documented below.
*/
  CustomerManagedEncryption?: Secretmanager_SecretReplicationUserManagedReplicaCustomerManagedEncryption;
}

export function Secretmanager_SecretReplicationUserManagedReplica_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "CustomerManagedEncryption",
      "Customer Managed Encryption for the secret.\nStructure is documented below.",
      Secretmanager_SecretReplicationUserManagedReplicaCustomerManagedEncryption_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Location",
      'The canonical IDs of the location to replicate data. For example: "us-east1".',
      [],
      true,
      true,
    ),
  ];
}
