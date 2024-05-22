import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent,
  kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent_GetTypes,
} from "./kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent";

export interface kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfiguration {
  // Specifies whether the code content is in text or zip format. Valid values: `PLAINTEXT`, `ZIPFILE`.
  codeContentType?: string;

  // The location and type of the application code.
  codeContent?: kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent;
}

export function kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "codeContentType",
      "Specifies whether the code content is in text or zip format. Valid values: `PLAINTEXT`, `ZIPFILE`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "codeContent",
      "The location and type of the application code.",
      kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent_GetTypes(),
      false,
      false,
    ),
  ];
}
