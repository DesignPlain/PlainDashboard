import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  secretmanager_SecretReplicationUserManagedReplicaCustomerManagedEncryption,
  secretmanager_SecretReplicationUserManagedReplicaCustomerManagedEncryption_GetTypes,
} from "./secretmanager_SecretReplicationUserManagedReplicaCustomerManagedEncryption";

export interface secretmanager_SecretReplicationUserManagedReplica {
  /*
Customer Managed Encryption for the secret.
Structure is documented below.
*/
  customerManagedEncryption?: secretmanager_SecretReplicationUserManagedReplicaCustomerManagedEncryption;

  // The canonical IDs of the location to replicate data. For example: "us-east1".
  location?: string;
}

export function secretmanager_SecretReplicationUserManagedReplica_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "location",
      'The canonical IDs of the location to replicate data. For example: "us-east1".',
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "customerManagedEncryption",
      "Customer Managed Encryption for the secret.\nStructure is documented below.",
      secretmanager_SecretReplicationUserManagedReplicaCustomerManagedEncryption_GetTypes(),
      false,
      false,
    ),
  ];
}
