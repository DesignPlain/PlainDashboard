import { getSecretReplicationAutoCustomerManagedEncryption } from "./getSecretReplicationAutoCustomerManagedEncryption";

export interface getSecretReplicationAuto {
  /*
The customer-managed encryption configuration of the Secret.
If no configuration is provided, Google-managed default
encryption is used.
*/
  CustomerManagedEncryptions?: Array<getSecretReplicationAutoCustomerManagedEncryption>;
}
