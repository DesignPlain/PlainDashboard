import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation,
  kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation_GetTypes,
} from "./kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation";

export interface kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent {
  // Information about the Amazon S3 bucket containing the application code.
  s3ContentLocation?: kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation;

  // The text-format code for the application.
  textContent?: string;
}

export function kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "s3ContentLocation",
      "Information about the Amazon S3 bucket containing the application code.",
      () =>
        kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "textContent",
      "The text-format code for the application.",
      () => [],
      false,
      false,
    ),
  ];
}
