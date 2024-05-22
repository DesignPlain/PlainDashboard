import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSetting,
  medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSetting_GetTypes,
} from "./medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSetting";
import {
  medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettings,
  medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettings";

export interface medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettingsNielsenWatermarksSettings {
  // Used to insert watermarks of type Nielsen NAES, II (N2) and Nielsen NAES VI (NW). See Nielsen NAES II NW Settings for more details.
  nielsenNaesIiNwSettings?: Array<medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSetting>;

  // Used to insert watermarks of type Nielsen CBET. See Nielsen CBET Settings for more details.
  nielsenCbetSettings?: medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettings;

  // Distribution types to assign to the watermarks. Options are `PROGRAM_CONTENT` and `FINAL_DISTRIBUTOR`.
  nielsenDistributionType?: string;
}

export function medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettingsNielsenWatermarksSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "nielsenNaesIiNwSettings",
      "Used to insert watermarks of type Nielsen NAES, II (N2) and Nielsen NAES VI (NW). See Nielsen NAES II NW Settings for more details.",
      medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSetting_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "nielsenCbetSettings",
      "Used to insert watermarks of type Nielsen CBET. See Nielsen CBET Settings for more details.",
      medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "nielsenDistributionType",
      "Distribution types to assign to the watermarks. Options are `PROGRAM_CONTENT` and `FINAL_DISTRIBUTOR`.",
      [],
      false,
      false,
    ),
  ];
}
