import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsEac3Settings {
  //
  dcFilter?: string;

  // When set to enabled, applies a 120Hz lowpass filter to the LFE channel prior to encoding.
  lfeFilter?: string;

  //
  loRoCenterMixLevel?: number;

  //
  loRoSurroundMixLevel?: number;

  //
  ltRtCenterMixLevel?: number;

  // Sets the attenuation control.
  attenuationControl?: string;

  // Average bitrate in bits/second.
  bitrate?: number;

  //
  lfeControl?: string;

  // Metadata control.
  metadataControl?: string;

  //
  stereoDownmix?: string;

  // Specifies the bitstream mode (bsmod) for the emitted AC-3 stream.
  bitstreamMode?: string;

  // Dolby Digital Plus coding mode.
  codingMode?: string;

  //
  passthroughControl?: string;

  //
  surroundExMode?: string;

  //
  dialnorm?: number;

  // Sets the Dolby dynamic range compression profile.
  drcLine?: string;

  // Sets the profile for heavy Dolby dynamic range compression.
  drcRf?: string;

  //
  ltRtSurroundMixLevel?: number;

  //
  phaseControl?: string;

  //
  surroundMode?: string;
}

export function medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsEac3Settings_GetTypes(): DynamicUIProps[] {
  return [
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
      InputType.String,
      'codingMode',
      'Dolby Digital Plus coding mode.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'surroundExMode',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'drcRf',
      'Sets the profile for heavy Dolby dynamic range compression.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'loRoCenterMixLevel',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'loRoSurroundMixLevel',
      '',
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
      'lfeControl',
      '',
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
    new DynamicUIProps(
      InputType.String,
      'passthroughControl',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'stereoDownmix',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'ltRtSurroundMixLevel',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'surroundMode',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'dcFilter',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'ltRtCenterMixLevel',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'attenuationControl',
      'Sets the attenuation control.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'dialnorm',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'drcLine',
      'Sets the Dolby dynamic range compression profile.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'phaseControl',
      '',
      () => [],
      false,
      false,
    ),
  ];
}
