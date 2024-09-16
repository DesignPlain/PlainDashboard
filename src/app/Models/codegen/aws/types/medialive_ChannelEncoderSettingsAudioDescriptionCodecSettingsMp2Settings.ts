import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsMp2Settings {
  //
  bitrate?: number;

  //
  codingMode?: string;

  // Sample rate in Hz.
  sampleRate?: number;
}

export function medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsMp2Settings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'codingMode',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'sampleRate',
      'Sample rate in Hz.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.Number, 'bitrate', '', () => [], false, false),
  ];
}
