export interface BucketObjectCustomerEncryption {
  // Base64 encoded Customer-Supplied Encryption Key.
  EncryptionKey?: string;

  // Encryption algorithm. Default: AES256
  EncryptionAlgorithm?: string;
}
