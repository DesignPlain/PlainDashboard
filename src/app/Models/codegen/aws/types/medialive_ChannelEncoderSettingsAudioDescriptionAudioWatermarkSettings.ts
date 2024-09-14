import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettingsNielsenWatermarksSettings,
  medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettingsNielsenWatermarksSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettingsNielsenWatermarksSettings";

export interface medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettings {
  //
  nielsenWatermarksSettings?: medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettingsNielsenWatermarksSettings;
}

export function medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "nielsenWatermarksSettings",
      "",
      () =>
        medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettingsNielsenWatermarksSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
