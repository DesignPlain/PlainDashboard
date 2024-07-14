import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSetting {
  //
  checkDigitString?: string;

  // The Nielsen Source ID to include in the watermark.
  sid?: number;
}

export function medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "checkDigitString",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "sid",
      "The Nielsen Source ID to include in the watermark.",
      [],
      true,
      false,
    ),
  ];
}
