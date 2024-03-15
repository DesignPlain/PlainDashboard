export interface AiMetadataStoreEncryptionSpec {
  /*
Required. The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource.
Has the form: projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key. The key needs to be in the same region as where the resource is created.
*/
  KmsKeyName?: string;
}
