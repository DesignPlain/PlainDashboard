export interface AwsNodePoolConfigProxyConfig {
  // The ARN of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.
  SecretArn?: string;

  // The version string of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.
  SecretVersion?: string;
}
