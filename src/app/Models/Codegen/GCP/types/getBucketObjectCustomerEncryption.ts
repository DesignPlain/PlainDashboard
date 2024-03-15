export interface getBucketObjectCustomerEncryption {
  // The encryption algorithm. Default: AES256
  EncryptionAlgorithm?: string;

  // Base64 encoded customer supplied encryption key.
  EncryptionKey?: string;
}
