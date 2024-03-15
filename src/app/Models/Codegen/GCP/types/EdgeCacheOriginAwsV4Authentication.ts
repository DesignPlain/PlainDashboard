export interface EdgeCacheOriginAwsV4Authentication {
  // The name of the AWS region that your origin is in.
  OriginRegion?: string;

  /*
The Secret Manager secret version of the secret access key used by your origin.
This is the resource name of the secret version in the format `projects/-/secrets/-/versions/-` where the `-` values are replaced by the project, secret, and version you require.
*/
  SecretAccessKeyVersion?: string;

  // The access key ID your origin uses to identify the key.
  AccessKeyId?: string;
}
