import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  storage_TransferJobTransferSpecAwsS3DataSourceAwsAccessKey,
  storage_TransferJobTransferSpecAwsS3DataSourceAwsAccessKey_GetTypes,
} from "./storage_TransferJobTransferSpecAwsS3DataSourceAwsAccessKey";

export interface storage_TransferJobTransferSpecAwsS3DataSource {
  // AWS credentials block.
  awsAccessKey?: storage_TransferJobTransferSpecAwsS3DataSourceAwsAccessKey;

  // Google Cloud Storage bucket name.
  bucketName?: string;

  // Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.
  path?: string;

  // The Amazon Resource Name (ARN) of the role to support temporary credentials via 'AssumeRoleWithWebIdentity'. For more information about ARNs, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns). When a role ARN is provided, Transfer Service fetches temporary credentials for the session using a 'AssumeRoleWithWebIdentity' call for the provided role using the [GoogleServiceAccount][] for this project.
  roleArn?: string;
}

export function storage_TransferJobTransferSpecAwsS3DataSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "awsAccessKey",
      "AWS credentials block.",
      storage_TransferJobTransferSpecAwsS3DataSourceAwsAccessKey_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketName",
      "Google Cloud Storage bucket name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The Amazon Resource Name (ARN) of the role to support temporary credentials via 'AssumeRoleWithWebIdentity'. For more information about ARNs, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns). When a role ARN is provided, Transfer Service fetches temporary credentials for the session using a 'AssumeRoleWithWebIdentity' call for the provided role using the [GoogleServiceAccount][] for this project.",
      [],
      false,
      false,
    ),
  ];
}
