import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Secretmanager_getSecretReplicationAutoCustomerManagedEncryption,
  Secretmanager_getSecretReplicationAutoCustomerManagedEncryption_GetTypes,
} from "./Secretmanager_getSecretReplicationAutoCustomerManagedEncryption";

export interface Secretmanager_getSecretReplicationAuto {
  /*
The customer-managed encryption configuration of the Secret.
If no configuration is provided, Google-managed default
encryption is used.
*/
  CustomerManagedEncryptions?: Array<Secretmanager_getSecretReplicationAutoCustomerManagedEncryption>;
}

export function Secretmanager_getSecretReplicationAuto_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "CustomerManagedEncryptions",
      "The customer-managed encryption configuration of the Secret.\nIf no configuration is provided, Google-managed default\nencryption is used.",
      Secretmanager_getSecretReplicationAutoCustomerManagedEncryption_GetTypes(),
      true,
      false,
    ),
  ];
}
