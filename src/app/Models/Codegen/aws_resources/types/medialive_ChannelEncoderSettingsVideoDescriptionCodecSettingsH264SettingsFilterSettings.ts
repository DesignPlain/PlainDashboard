import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264SettingsFilterSettingsTemporalFilterSettings,
  medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264SettingsFilterSettingsTemporalFilterSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264SettingsFilterSettingsTemporalFilterSettings";

export interface medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264SettingsFilterSettings {
  // Temporal filter settings. See Temporal Filter Settings
  temporalFilterSettings?: medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264SettingsFilterSettingsTemporalFilterSettings;
}

export function medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264SettingsFilterSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "temporalFilterSettings",
      "Temporal filter settings. See Temporal Filter Settings",
      medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264SettingsFilterSettingsTemporalFilterSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
