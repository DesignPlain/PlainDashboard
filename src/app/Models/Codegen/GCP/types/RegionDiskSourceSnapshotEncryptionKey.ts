export interface RegionDiskSourceSnapshotEncryptionKey {
  // The name of the encryption key that is stored in Google Cloud KMS.
  KmsKeyName?: string;

  /*
Specifies a 256-bit customer-supplied encryption key, encoded in
RFC 4648 base64 to either encrypt or decrypt this resource.
*/
  RawKey?: string;

  /*
(Output)
The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied
encryption key that protects this resource.
*/
  Sha256?: string;
}
