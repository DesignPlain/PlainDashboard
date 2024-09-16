import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  secretmanager_getSecretReplicationAutoCustomerManagedEncryption,
  secretmanager_getSecretReplicationAutoCustomerManagedEncryption_GetTypes,
} from './secretmanager_getSecretReplicationAutoCustomerManagedEncryption';

export interface secretmanager_getSecretReplicationAuto {
  /*
The customer-managed encryption configuration of the Secret.
If no configuration is provided, Google-managed default
encryption is used.
*/
  customerManagedEncryptions?: Array<secretmanager_getSecretReplicationAutoCustomerManagedEncryption>;
}

export function secretmanager_getSecretReplicationAuto_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'customerManagedEncryptions',
      'The customer-managed encryption configuration of the Secret.\nIf no configuration is provided, Google-managed default\nencryption is used.',
      () =>
        secretmanager_getSecretReplicationAutoCustomerManagedEncryption_GetTypes(),
      true,
      false,
    ),
  ];
}
