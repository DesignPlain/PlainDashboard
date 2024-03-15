export interface MetastoreServiceEncryptionConfig {
  /*
The fully qualified customer provided Cloud KMS key name to use for customer data encryption.
Use the following format: `projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)`
*/
  KmsKey?: string;
}
