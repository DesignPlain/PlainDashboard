import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  secretmanager_getSecretsSecretReplicationAutoCustomerManagedEncryption,
  secretmanager_getSecretsSecretReplicationAutoCustomerManagedEncryption_GetTypes,
} from "./secretmanager_getSecretsSecretReplicationAutoCustomerManagedEncryption";

export interface secretmanager_getSecretsSecretReplicationAuto {
  /*
Customer Managed Encryption for the secret.
Structure is documented below.
*/
  customerManagedEncryptions?: Array<secretmanager_getSecretsSecretReplicationAutoCustomerManagedEncryption>;
}

export function secretmanager_getSecretsSecretReplicationAuto_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "customerManagedEncryptions",
      "Customer Managed Encryption for the secret.\nStructure is documented below.",
      () =>
        secretmanager_getSecretsSecretReplicationAutoCustomerManagedEncryption_GetTypes(),
      true,
      false,
    ),
  ];
}
