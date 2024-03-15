import { TransferJobTransferSpecAwsS3DataSourceAwsAccessKey } from "./TransferJobTransferSpecAwsS3DataSourceAwsAccessKey";

export interface TransferJobTransferSpecAwsS3DataSource {
  // Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.
  Path?: string;

  // The Amazon Resource Name (ARN) of the role to support temporary credentials via 'AssumeRoleWithWebIdentity'. For more information about ARNs, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns). When a role ARN is provided, Transfer Service fetches temporary credentials for the session using a 'AssumeRoleWithWebIdentity' call for the provided role using the [GoogleServiceAccount][] for this project.
  RoleArn?: string;

  // AWS credentials block.
  AwsAccessKey?: TransferJobTransferSpecAwsS3DataSourceAwsAccessKey;

  // Google Cloud Storage bucket name.
  BucketName?: string;
}
