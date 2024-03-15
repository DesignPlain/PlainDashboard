export interface InstanceEncryptionConfig {
  // Name of the customer managed encryption key (CMEK) in KMS.
  KmsKeyName?: string;

  /*
(Output)
Full name and version of the CMEK key currently in use to encrypt Looker data.
*/
  KmsKeyNameVersion?: string;

  /*
(Output)
Status of the customer managed encryption key (CMEK) in KMS.
*/
  KmsKeyState?: string;
}
