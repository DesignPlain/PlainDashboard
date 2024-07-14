import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation,
  kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation_GetTypes,
} from "./kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation";

export interface kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent {
  /*
The text-format code for the application.

The `s3_content_location` object supports the following:
*/
  textContent?: string;

  // Information about the Amazon S3 bucket containing the application code.
  s3ContentLocation?: kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation;
}

export function kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "textContent",
      "The text-format code for the application.\n\nThe `s3_content_location` object supports the following:",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3ContentLocation",
      "Information about the Amazon S3 bucket containing the application code.",
      kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation_GetTypes(),
      false,
      false,
    ),
  ];
}
