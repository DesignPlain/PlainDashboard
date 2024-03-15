import { SecretReplicationAutoCustomerManagedEncryption } from "./SecretReplicationAutoCustomerManagedEncryption";

export interface SecretReplicationAuto {
  /*
The customer-managed encryption configuration of the Secret.
If no configuration is provided, Google-managed default
encryption is used.
Structure is documented below.
*/
  CustomerManagedEncryption?: SecretReplicationAutoCustomerManagedEncryption;
}
