import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Secretmanager_SecretReplicationAutoCustomerManagedEncryption,
  Secretmanager_SecretReplicationAutoCustomerManagedEncryption_GetTypes,
} from "./Secretmanager_SecretReplicationAutoCustomerManagedEncryption";

export interface Secretmanager_SecretReplicationAuto {
  /*
The customer-managed encryption configuration of the Secret.
If no configuration is provided, Google-managed default
encryption is used.
Structure is documented below.
*/
  CustomerManagedEncryption?: Secretmanager_SecretReplicationAutoCustomerManagedEncryption;
}

export function Secretmanager_SecretReplicationAuto_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "CustomerManagedEncryption",
      "The customer-managed encryption configuration of the Secret.\nIf no configuration is provided, Google-managed default\nencryption is used.\nStructure is documented below.",
      Secretmanager_SecretReplicationAutoCustomerManagedEncryption_GetTypes(),
      false,
      false,
    ),
  ];
}
