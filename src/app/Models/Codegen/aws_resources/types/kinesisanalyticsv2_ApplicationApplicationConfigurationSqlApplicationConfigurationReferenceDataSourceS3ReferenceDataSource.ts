import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource {
  // The ARN for the S3 bucket containing the application code.
  bucketArn?: string;

  // The file key for the object containing the application code.
  fileKey?: string;
}

export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucketArn",
      "The ARN for the S3 bucket containing the application code.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "fileKey",
      "The file key for the object containing the application code.",
      [],
      true,
      false,
    ),
  ];
}
