import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource {
  // The ARN of the S3 bucket.
  bucketArn?: string;

  // The object key name containing the reference data.
  fileKey?: string;
}

export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucketArn",
      "The ARN of the S3 bucket.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "fileKey",
      "The object key name containing the reference data.",
      () => [],
      true,
      false,
    ),
  ];
}
