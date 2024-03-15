export interface BackupEncryptionInfo {
  /*
(Output)
Output only. Type of encryption.
*/
  EncryptionType?: string;

  /*
(Output)
Output only. Cloud KMS key versions that are being used to protect the database or the backup.
*/
  KmsKeyVersions?: Array<string>;
}
