import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsMp2Settings,
  medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsMp2Settings_GetTypes,
} from './medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsMp2Settings';
import {
  medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsPassThroughSettings,
  medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsPassThroughSettings_GetTypes,
} from './medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsPassThroughSettings';
import {
  medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsWavSettings,
  medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsWavSettings_GetTypes,
} from './medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsWavSettings';
import {
  medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsAacSettings,
  medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsAacSettings_GetTypes,
} from './medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsAacSettings';
import {
  medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsAc3Settings,
  medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsAc3Settings_GetTypes,
} from './medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsAc3Settings';
import {
  medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsEac3AtmosSettings,
  medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsEac3AtmosSettings_GetTypes,
} from './medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsEac3AtmosSettings';
import {
  medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsEac3Settings,
  medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsEac3Settings_GetTypes,
} from './medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsEac3Settings';

export interface medialive_ChannelEncoderSettingsAudioDescriptionCodecSettings {
  //
  wavSettings?: medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsWavSettings;

  // Aac Settings. See AAC Settings for more details.
  aacSettings?: medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsAacSettings;

  // Ac3 Settings. See AC3 Settings for more details.
  ac3Settings?: medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsAc3Settings;

  // Eac3 Atmos Settings. See EAC3 Atmos Settings
  eac3AtmosSettings?: medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsEac3AtmosSettings;

  // Eac3 Settings. See EAC3 Settings
  eac3Settings?: medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsEac3Settings;

  //
  mp2Settings?: medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsMp2Settings;

  //
  passThroughSettings?: medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsPassThroughSettings;
}

export function medialive_ChannelEncoderSettingsAudioDescriptionCodecSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'aacSettings',
      'Aac Settings. See AAC Settings for more details.',
      () =>
        medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsAacSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'ac3Settings',
      'Ac3 Settings. See AC3 Settings for more details.',
      () =>
        medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsAc3Settings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'eac3AtmosSettings',
      'Eac3 Atmos Settings. See EAC3 Atmos Settings',
      () =>
        medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsEac3AtmosSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'eac3Settings',
      'Eac3 Settings. See EAC3 Settings',
      () =>
        medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsEac3Settings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'mp2Settings',
      '',
      () =>
        medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsMp2Settings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'passThroughSettings',
      '',
      () =>
        medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsPassThroughSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'wavSettings',
      '',
      () =>
        medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsWavSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
