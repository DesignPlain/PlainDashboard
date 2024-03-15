export interface BackupPlanBackupConfigEncryptionKey {
  // Google Cloud KMS encryption key. Format: projects/-/locations/-/keyRings/-/cryptoKeys/-
  GcpKmsEncryptionKey?: string;
}
