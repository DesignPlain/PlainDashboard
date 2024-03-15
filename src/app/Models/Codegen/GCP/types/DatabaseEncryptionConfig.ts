export interface DatabaseEncryptionConfig {
  /*
Fully qualified name of the KMS key to use to encrypt this database. This key must exist
in the same location as the Spanner Database.
*/
  KmsKeyName?: string;
}
