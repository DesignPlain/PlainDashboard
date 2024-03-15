export interface getAuthorityKeySpec {
  /*
The resource name for an existing Cloud KMS CryptoKeyVersion in the format
'projects/-/locations/-/keyRings/-/cryptoKeys/-/cryptoKeyVersions/-'.
*/
  CloudKmsKeyVersion?: string;

  /*
The algorithm to use for creating a managed Cloud KMS key for a for a simplified
experience. All managed keys will be have their ProtectionLevel as HSM. Possible values: ["SIGN_HASH_ALGORITHM_UNSPECIFIED", "RSA_PSS_2048_SHA256", "RSA_PSS_3072_SHA256", "RSA_PSS_4096_SHA256", "RSA_PKCS1_2048_SHA256", "RSA_PKCS1_3072_SHA256", "RSA_PKCS1_4096_SHA256", "EC_P256_SHA256", "EC_P384_SHA384"]
*/
  Algorithm?: string;
}
