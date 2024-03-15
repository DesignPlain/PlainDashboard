export interface InstanceFromTemplateAttachedDisk {
  // Name with which the attached disk is accessible under /dev/disk/by-id/
  DeviceName?: string;

  // A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk. Only one of kms_key_self_link and disk_encryption_key_raw may be set.
  DiskEncryptionKeyRaw?: string;

  // The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied encryption key that protects this resource.
  DiskEncryptionKeySha256?: string;

  // The self_link of the encryption key that is stored in Google Cloud KMS to encrypt this disk. Only one of kms_key_self_link and disk_encryption_key_raw may be set.
  KmsKeySelfLink?: string;

  // Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE".
  Mode?: string;

  // The name or self_link of the disk attached to this instance.
  Source?: string;
}
