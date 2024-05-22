import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface kinesis_AnalyticsApplicationReferenceDataSourcesS3 {
  // The S3 Bucket ARN.
  bucketArn?: string;

  // The File Key name containing reference data.
  fileKey?: string;

  // The ARN of the IAM Role used to send application messages.
  roleArn?: string;
}

export function kinesis_AnalyticsApplicationReferenceDataSourcesS3_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucketArn",
      "The S3 Bucket ARN.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "fileKey",
      "The File Key name containing reference data.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The ARN of the IAM Role used to send application messages.",
      [],
      true,
      false,
    ),
  ];
}
