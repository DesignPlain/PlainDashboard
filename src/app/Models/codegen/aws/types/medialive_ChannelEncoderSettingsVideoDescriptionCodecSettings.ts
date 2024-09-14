import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264Settings,
  medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264Settings_GetTypes,
} from "./medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264Settings";
import {
  medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265Settings,
  medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265Settings_GetTypes,
} from "./medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265Settings";
import {
  medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsFrameCaptureSettings,
  medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsFrameCaptureSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsFrameCaptureSettings";

export interface medialive_ChannelEncoderSettingsVideoDescriptionCodecSettings {
  // Frame capture settings. See Frame Capture Settings for more details.
  frameCaptureSettings?: medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsFrameCaptureSettings;

  // H264 settings. See H264 Settings for more details.
  h264Settings?: medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264Settings;

  //
  h265Settings?: medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265Settings;
}

export function medialive_ChannelEncoderSettingsVideoDescriptionCodecSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "frameCaptureSettings",
      "Frame capture settings. See Frame Capture Settings for more details.",
      () =>
        medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsFrameCaptureSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "h264Settings",
      "H264 settings. See H264 Settings for more details.",
      () =>
        medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264Settings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "h265Settings",
      "",
      () =>
        medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265Settings_GetTypes(),
      false,
      false,
    ),
  ];
}
