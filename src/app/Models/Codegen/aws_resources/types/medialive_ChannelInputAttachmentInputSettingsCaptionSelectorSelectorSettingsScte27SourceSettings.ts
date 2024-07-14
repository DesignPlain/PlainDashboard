import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettings {
  // If you will configure a WebVTT caption description that references this caption selector, use this field to provide the language to consider when translating the image-based source to text.
  ocrLanguage?: string;

  // Selects a specific PID from within a source.
  pid?: number;
}

export function medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ocrLanguage",
      "If you will configure a WebVTT caption description that references this caption selector, use this field to provide the language to consider when translating the image-based source to text.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "pid",
      "Selects a specific PID from within a source.",
      [],
      false,
      false,
    ),
  ];
}
