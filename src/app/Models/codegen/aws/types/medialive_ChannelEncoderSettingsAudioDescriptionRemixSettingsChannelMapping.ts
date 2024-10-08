import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  medialive_ChannelEncoderSettingsAudioDescriptionRemixSettingsChannelMappingInputChannelLevel,
  medialive_ChannelEncoderSettingsAudioDescriptionRemixSettingsChannelMappingInputChannelLevel_GetTypes,
} from './medialive_ChannelEncoderSettingsAudioDescriptionRemixSettingsChannelMappingInputChannelLevel';

export interface medialive_ChannelEncoderSettingsAudioDescriptionRemixSettingsChannelMapping {
  //
  inputChannelLevels?: Array<medialive_ChannelEncoderSettingsAudioDescriptionRemixSettingsChannelMappingInputChannelLevel>;

  //
  outputChannel?: number;
}

export function medialive_ChannelEncoderSettingsAudioDescriptionRemixSettingsChannelMapping_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'inputChannelLevels',
      '',
      () =>
        medialive_ChannelEncoderSettingsAudioDescriptionRemixSettingsChannelMappingInputChannelLevel_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'outputChannel',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
