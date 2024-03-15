export interface ConnectionSslConfigAdditionalVariableEncryptionKeyValue {
  /*
The [KMS key name] with which the content of the Operation is encrypted. The expected
format: projects/-/locations/-/keyRings/-/cryptoKeys/-.
Will be empty string if google managed.
*/
  KmsKeyName?: string;

  /*
Type of Encryption Key
Possible values are: `GOOGLE_MANAGED`, `CUSTOMER_MANAGED`.
*/
  Type?: string;
}
