import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface medialive_ChannelEncoderSettingsTimecodeConfig {
  // The source for the timecode that will be associated with the events outputs.
  source?: string;

  // Threshold in frames beyond which output timecode is resynchronized to the input timecode.
  syncThreshold?: number;
}

export function medialive_ChannelEncoderSettingsTimecodeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'source',
      'The source for the timecode that will be associated with the events outputs.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'syncThreshold',
      'Threshold in frames beyond which output timecode is resynchronized to the input timecode.',
      () => [],
      false,
      false,
    ),
  ];
}
