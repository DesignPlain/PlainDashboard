import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface imagebuilder_InfrastructureConfigurationLoggingS3Logs {
  /*
Name of the S3 Bucket.

The following arguments are optional:
*/
  s3BucketName?: string;

  // Prefix to use for S3 logs. Defaults to `/`.
  s3KeyPrefix?: string;
}

export function imagebuilder_InfrastructureConfigurationLoggingS3Logs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "s3BucketName",
      "Name of the S3 Bucket.\n\nThe following arguments are optional:",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3KeyPrefix",
      "Prefix to use for S3 logs. Defaults to `/`.",
      () => [],
      false,
      false,
    ),
  ];
}
