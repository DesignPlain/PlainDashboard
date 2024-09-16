import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsAc3Settings {
  // Specifies the bitstream mode (bsmod) for the emitted AC-3 stream.
  bitstreamMode?: string;

  // Dolby Digital coding mode.
  codingMode?: string;

  // Sets the dialnorm of the output.
  dialnorm?: number;

  // If set to filmStandard, adds dynamic range compression signaling to the output bitstream as defined in the Dolby Digital specification.
  drcProfile?: string;

  // When set to enabled, applies a 120Hz lowpass filter to the LFE channel prior to encoding.
  lfeFilter?: string;

  // Metadata control.
  metadataControl?: string;

  // Average bitrate in bits/second.
  bitrate?: number;
}

export function medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsAc3Settings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'codingMode',
      'Dolby Digital coding mode.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'dialnorm',
      'Sets the dialnorm of the output.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'drcProfile',
      'If set to filmStandard, adds dynamic range compression signaling to the output bitstream as defined in the Dolby Digital specification.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'lfeFilter',
      'When set to enabled, applies a 120Hz lowpass filter to the LFE channel prior to encoding.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'metadataControl',
      'Metadata control.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'bitrate',
      'Average bitrate in bits/second.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'bitstreamMode',
      'Specifies the bitstream mode (bsmod) for the emitted AC-3 stream.',
      () => [],
      false,
      false,
    ),
  ];
}
