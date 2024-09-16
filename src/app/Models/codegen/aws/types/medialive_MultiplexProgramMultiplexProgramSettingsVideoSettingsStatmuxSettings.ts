import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface medialive_MultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings {
  // Priority value.
  priority?: number;

  // Maximum bitrate.
  maximumBitrate?: number;

  // Minimum bitrate.
  minimumBitrate?: number;
}

export function medialive_MultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'priority',
      'Priority value.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maximumBitrate',
      'Maximum bitrate.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'minimumBitrate',
      'Minimum bitrate.',
      () => [],
      false,
      false,
    ),
  ];
}
