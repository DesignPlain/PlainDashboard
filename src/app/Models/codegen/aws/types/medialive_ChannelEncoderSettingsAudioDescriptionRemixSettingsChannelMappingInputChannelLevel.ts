import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface medialive_ChannelEncoderSettingsAudioDescriptionRemixSettingsChannelMappingInputChannelLevel {
  //
  gain?: number;

  //
  inputChannel?: number;
}

export function medialive_ChannelEncoderSettingsAudioDescriptionRemixSettingsChannelMappingInputChannelLevel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, 'gain', '', () => [], true, false),
    new DynamicUIProps(
      InputType.Number,
      'inputChannel',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
