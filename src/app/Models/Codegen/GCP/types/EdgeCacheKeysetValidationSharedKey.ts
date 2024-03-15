export interface EdgeCacheKeysetValidationSharedKey {
  /*
The name of the secret version in Secret Manager.
The resource name of the secret version must be in the format `projects/-/secrets/-/versions/-` where the `-` values are replaced by the secrets themselves.
The secrets must be at least 16 bytes large.  The recommended secret size depends on the signature algorithm you are using.
- If you are using HMAC-SHA1, we suggest 20-byte secrets.
- If you are using HMAC-SHA256, we suggest 32-byte secrets.
See RFC 2104, Section 3 for more details on these recommendations.
*/
  SecretVersion?: string;
}
