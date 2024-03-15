export interface DiskDiskEncryptionKey {
  /*
The self link of the encryption key used to encrypt the disk. Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
(`service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com`) must have
`roles/cloudkms.cryptoKeyEncrypterDecrypter` to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys
*/
  KmsKeySelfLink?: string;

  /*
The service account used for the encryption request for the given KMS key.
If absent, the Compute Engine Service Agent service account is used.
*/
  KmsKeyServiceAccount?: string;

  /*
Specifies a 256-bit customer-supplied encryption key, encoded in
RFC 4648 base64 to either encrypt or decrypt this resource.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  RawKey?: string;

  /*
Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit
customer-supplied encryption key to either encrypt or decrypt
this resource. You can provide either the rawKey or the rsaEncryptedKey.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  RsaEncryptedKey?: string;

  /*
(Output)
The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied
encryption key that protects this resource.
*/
  Sha256?: string;
}
