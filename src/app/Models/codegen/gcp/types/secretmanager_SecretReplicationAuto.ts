import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  secretmanager_SecretReplicationAutoCustomerManagedEncryption,
  secretmanager_SecretReplicationAutoCustomerManagedEncryption_GetTypes,
} from './secretmanager_SecretReplicationAutoCustomerManagedEncryption';

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
      'customerManagedEncryption',
      'The customer-managed encryption configuration of the Secret.\nIf no configuration is provided, Google-managed default\nencryption is used.\nStructure is documented below.',
      () =>
        secretmanager_SecretReplicationAutoCustomerManagedEncryption_GetTypes(),
      false,
      false,
    ),
  ];
}
