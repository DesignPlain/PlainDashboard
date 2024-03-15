export interface SnapshotSourceDiskEncryptionKey {
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
}
