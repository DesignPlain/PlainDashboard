import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsFilterSettingsTemporalFilterSettings,
  medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsFilterSettingsTemporalFilterSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsFilterSettingsTemporalFilterSettings";

export interface medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsFilterSettings {
  // Temporal filter settings. See Temporal Filter Settings
  temporalFilterSettings?: medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsFilterSettingsTemporalFilterSettings;
}

export function medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsFilterSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "temporalFilterSettings",
      "Temporal filter settings. See Temporal Filter Settings",
      medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsFilterSettingsTemporalFilterSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
