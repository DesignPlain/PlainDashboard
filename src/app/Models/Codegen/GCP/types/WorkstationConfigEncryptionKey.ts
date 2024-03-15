export interface WorkstationConfigEncryptionKey {
  // The name of the Google Cloud KMS encryption key.
  KmsKey?: string;

  // The service account to use with the specified KMS key.
  KmsKeyServiceAccount?: string;
}
