import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Secretmanager_getSecretsSecretReplicationAutoCustomerManagedEncryption,
  Secretmanager_getSecretsSecretReplicationAutoCustomerManagedEncryption_GetTypes,
} from "./Secretmanager_getSecretsSecretReplicationAutoCustomerManagedEncryption";

export interface Secretmanager_getSecretsSecretReplicationAuto {
  /*
Customer Managed Encryption for the secret.
Structure is documented below.
*/
  CustomerManagedEncryptions?: Array<Secretmanager_getSecretsSecretReplicationAutoCustomerManagedEncryption>;
}

export function Secretmanager_getSecretsSecretReplicationAuto_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "CustomerManagedEncryptions",
      "Customer Managed Encryption for the secret.\nStructure is documented below.",
      Secretmanager_getSecretsSecretReplicationAutoCustomerManagedEncryption_GetTypes(),
      true,
      false,
    ),
  ];
}
