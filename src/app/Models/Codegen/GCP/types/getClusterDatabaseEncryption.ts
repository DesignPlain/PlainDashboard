export interface getClusterDatabaseEncryption {
  // The key to use to encrypt/decrypt secrets.
  KeyName?: string;

  // ENCRYPTED or DECRYPTED.
  State?: string;
}
