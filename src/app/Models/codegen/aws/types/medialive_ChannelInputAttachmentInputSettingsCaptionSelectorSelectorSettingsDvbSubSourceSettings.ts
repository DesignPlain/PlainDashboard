import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettings {
  // When using DVB-Sub with Burn-In or SMPTE-TT, use this PID for the source content. Unused for DVB-Sub passthrough. All DVB-Sub content is passed through, regardless of selectors.
  pid?: number;

  // If you will configure a WebVTT caption description that references this caption selector, use this field to provide the language to consider when translating the image-based source to text.
  ocrLanguage?: string;
}

export function medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ocrLanguage",
      "If you will configure a WebVTT caption description that references this caption selector, use this field to provide the language to consider when translating the image-based source to text.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "pid",
      "When using DVB-Sub with Burn-In or SMPTE-TT, use this PID for the source content. Unused for DVB-Sub passthrough. All DVB-Sub content is passed through, regardless of selectors.",
      () => [],
      false,
      false,
    ),
  ];
}
