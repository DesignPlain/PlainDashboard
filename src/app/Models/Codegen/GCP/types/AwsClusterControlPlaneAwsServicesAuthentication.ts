export interface AwsClusterControlPlaneAwsServicesAuthentication {
  // The Amazon Resource Name (ARN) of the role that the Anthos Multi-Cloud API will assume when managing AWS resources on your account.
  RoleArn?: string;

  // Optional. An identifier for the assumed role session. When unspecified, it defaults to `multicloud-service-agent`.
  RoleSessionName?: string;
}
