export interface getBucketEncryption {
  // A Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified. You must pay attention to whether the crypto key is available in the location that this bucket is created in. See the docs for more details.
  DefaultKmsKeyName?: string;
}
