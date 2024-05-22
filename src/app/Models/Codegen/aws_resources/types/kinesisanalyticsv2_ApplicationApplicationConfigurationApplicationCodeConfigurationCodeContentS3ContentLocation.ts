import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation {
  // The version of the object containing the application code.
  objectVersion?: string;

  // The ARN for the S3 bucket containing the application code.
  bucketArn?: string;

  // The file key for the object containing the application code.
  fileKey?: string;
}

export function kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "objectVersion",
      "The version of the object containing the application code.",
      [],
      false,
      false,
    ),
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
