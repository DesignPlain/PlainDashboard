import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettings,
  medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettings_GetTypes,
} from './medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettings';
import {
  medialive_ChannelEncoderSettingsAudioDescriptionRemixSettings,
  medialive_ChannelEncoderSettingsAudioDescriptionRemixSettings_GetTypes,
} from './medialive_ChannelEncoderSettingsAudioDescriptionRemixSettings';
import {
  medialive_ChannelEncoderSettingsAudioDescriptionAudioNormalizationSettings,
  medialive_ChannelEncoderSettingsAudioDescriptionAudioNormalizationSettings_GetTypes,
} from './medialive_ChannelEncoderSettingsAudioDescriptionAudioNormalizationSettings';
import {
  medialive_ChannelEncoderSettingsAudioDescriptionCodecSettings,
  medialive_ChannelEncoderSettingsAudioDescriptionCodecSettings_GetTypes,
} from './medialive_ChannelEncoderSettingsAudioDescriptionCodecSettings';

export interface medialive_ChannelEncoderSettingsAudioDescription {
  // The name of this audio description.
  name?: string;

  // Stream name RTMP destinations (URLs of type rtmp://)
  streamName?: string;

  // The name of the audio selector used as the source for this AudioDescription.
  audioSelectorName?: string;

  // Determined how audio type is determined.
  audioTypeControl?: string;

  // Settings to configure one or more solutions that insert audio watermarks in the audio encode. See Audio Watermark Settings for more details.
  audioWatermarkSettings?: medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettings;

  //
  languageCode?: string;

  //
  remixSettings?: medialive_ChannelEncoderSettingsAudioDescriptionRemixSettings;

  // Advanced audio normalization settings. See Audio Normalization Settings for more details.
  audioNormalizationSettings?: medialive_ChannelEncoderSettingsAudioDescriptionAudioNormalizationSettings;

  // Applies only if audioTypeControl is useConfigured. The values for audioType are defined in ISO-IEC 13818-1.
  audioType?: string;

  // Audio codec settings. See Audio Codec Settings for more details.
  codecSettings?: medialive_ChannelEncoderSettingsAudioDescriptionCodecSettings;

  //
  languageCodeControl?: string;
}

export function medialive_ChannelEncoderSettingsAudioDescription_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'streamName',
      'Stream name RTMP destinations (URLs of type rtmp://)',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'audioSelectorName',
      'The name of the audio selector used as the source for this AudioDescription.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'audioTypeControl',
      'Determined how audio type is determined.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'audioWatermarkSettings',
      'Settings to configure one or more solutions that insert audio watermarks in the audio encode. See Audio Watermark Settings for more details.',
      () =>
        medialive_ChannelEncoderSettingsAudioDescriptionAudioWatermarkSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'remixSettings',
      '',
      () =>
        medialive_ChannelEncoderSettingsAudioDescriptionRemixSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'audioType',
      'Applies only if audioTypeControl is useConfigured. The values for audioType are defined in ISO-IEC 13818-1.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'languageCodeControl',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of this audio description.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'languageCode',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'audioNormalizationSettings',
      'Advanced audio normalization settings. See Audio Normalization Settings for more details.',
      () =>
        medialive_ChannelEncoderSettingsAudioDescriptionAudioNormalizationSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'codecSettings',
      'Audio codec settings. See Audio Codec Settings for more details.',
      () =>
        medialive_ChannelEncoderSettingsAudioDescriptionCodecSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
