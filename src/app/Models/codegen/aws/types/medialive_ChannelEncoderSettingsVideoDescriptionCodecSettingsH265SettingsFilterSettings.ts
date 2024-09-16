import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsFilterSettingsTemporalFilterSettings,
  medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsFilterSettingsTemporalFilterSettings_GetTypes,
} from './medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsFilterSettingsTemporalFilterSettings';

export interface medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsFilterSettings {
  //
  temporalFilterSettings?: medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsFilterSettingsTemporalFilterSettings;
}

export function medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsFilterSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'temporalFilterSettings',
      '',
      () =>
        medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsFilterSettingsTemporalFilterSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
