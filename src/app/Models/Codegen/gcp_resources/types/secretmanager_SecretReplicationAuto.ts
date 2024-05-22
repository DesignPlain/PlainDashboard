import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  secretmanager_SecretReplicationAutoCustomerManagedEncryption,
  secretmanager_SecretReplicationAutoCustomerManagedEncryption_GetTypes,
} from "./secretmanager_SecretReplicationAutoCustomerManagedEncryption";

export interface secretmanager_SecretReplicationAuto {
  /*
The customer-managed encryption configuration of the Secret.
If no configuration is provided, Google-managed default
encryption is used.
Structure is documented below.
*/
  customerManagedEncryption?: secretmanager_SecretReplicationAutoCustomerManagedEncryption;
}

export function secretmanager_SecretReplicationAuto_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "customerManagedEncryption",
      "The customer-managed encryption configuration of the Secret.\nIf no configuration is provided, Google-managed default\nencryption is used.\nStructure is documented below.",
      secretmanager_SecretReplicationAutoCustomerManagedEncryption_GetTypes(),
      false,
      false,
    ),
  ];
}
