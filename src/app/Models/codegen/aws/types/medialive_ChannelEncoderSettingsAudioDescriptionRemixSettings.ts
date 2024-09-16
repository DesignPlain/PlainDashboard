import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  medialive_ChannelEncoderSettingsAudioDescriptionRemixSettingsChannelMapping,
  medialive_ChannelEncoderSettingsAudioDescriptionRemixSettingsChannelMapping_GetTypes,
} from './medialive_ChannelEncoderSettingsAudioDescriptionRemixSettingsChannelMapping';

export interface medialive_ChannelEncoderSettingsAudioDescriptionRemixSettings {
  //
  channelMappings?: Array<medialive_ChannelEncoderSettingsAudioDescriptionRemixSettingsChannelMapping>;

  //
  channelsIn?: number;

  //
  channelsOut?: number;
}

export function medialive_ChannelEncoderSettingsAudioDescriptionRemixSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'channelMappings',
      '',
      () =>
        medialive_ChannelEncoderSettingsAudioDescriptionRemixSettingsChannelMapping_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'channelsIn',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'channelsOut',
      '',
      () => [],
      false,
      false,
    ),
  ];
}
