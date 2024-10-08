import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsFilterSettings,
  medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsFilterSettings_GetTypes,
} from './medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsFilterSettings';
import {
  medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsTimecodeBurninSettings,
  medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsTimecodeBurninSettings_GetTypes,
} from './medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsTimecodeBurninSettings';
import {
  medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsColorSpaceSettings,
  medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsColorSpaceSettings_GetTypes,
} from './medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsColorSpaceSettings';

export interface medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265Settings {
  // Includes color space metadata in the output.
  colorMetadata?: string;

  // Indicates if the `gop_size` is specified in frames or seconds.
  gopSizeUnits?: string;

  // Filters to apply to an encode. See H265 Filter Settings for more details.
  filterSettings?: medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsFilterSettings;

  // Controls the target quality for the video encode.
  qvbrQualityLevel?: number;

  // Rate control mode.
  rateControlMode?: string;

  // Whether or not EML should insert an Alternative Transfer Function SEI message.
  alternativeTransferFunction?: string;

  // Average bitrate in bits/second.
  bitrate?: number;

  // Number of slices per picture.
  slices?: number;

  // Amount of lookahead.
  lookAheadRateControl?: string;

  // H265 profile.
  profile?: string;

  // Sets the scan type of the output.
  scanType?: string;

  // Size of buffer in bits.
  bufSize?: number;

  //
  flickerAq?: string;

  // Pixel Aspect Ratio denominator.
  parDenominator?: number;

  // Pixel Aspect Ratio numerator.
  parNumerator?: number;

  // Apply a burned in timecode. See H265 Timecode Burnin Settings for more details.
  timecodeBurninSettings?: medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsTimecodeBurninSettings;

  // Enables or disables adaptive quantization.
  adaptiveQuantization?: string;

  // H265 level.
  level?: string;

  // Scene change detection.
  sceneChangeDetect?: string;

  // Four bit AFD value to write on all frames of video in the output stream.
  fixedAfd?: string;

  // Framerate numerator.
  framerateNumerator?: number;

  // Framerate denominator.
  framerateDenominator?: number;

  // GOP size in units of either frames of seconds per `gop_size_units`.
  gopSize?: number;

  //
  minIInterval?: number;

  // Set the H265 tier in the output.
  tier?: string;

  // Indicates that AFD values will be written into the output stream.
  afdSignaling?: string;

  // Define the color metadata for the output. H265 Color Space Settings for more details.
  colorSpaceSettings?: medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsColorSpaceSettings;

  // Determines how timecodes should be inserted into the video elementary stream.
  timecodeInsertion?: string;

  // Frequency of closed GOPs.
  gopClosedCadence?: number;

  // Set the maximum bitrate in order to accommodate expected spikes in the complexity of the video.
  maxBitrate?: number;
}

export function medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265Settings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'adaptiveQuantization',
      'Enables or disables adaptive quantization.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'minIInterval',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'afdSignaling',
      'Indicates that AFD values will be written into the output stream.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maxBitrate',
      'Set the maximum bitrate in order to accommodate expected spikes in the complexity of the video.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'colorSpaceSettings',
      'Define the color metadata for the output. H265 Color Space Settings for more details.',
      () =>
        medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsColorSpaceSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'gopSizeUnits',
      'Indicates if the `gop_size` is specified in frames or seconds.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'rateControlMode',
      'Rate control mode.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'flickerAq',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'timecodeBurninSettings',
      'Apply a burned in timecode. See H265 Timecode Burnin Settings for more details.',
      () =>
        medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsTimecodeBurninSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'colorMetadata',
      'Includes color space metadata in the output.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'qvbrQualityLevel',
      'Controls the target quality for the video encode.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'bitrate',
      'Average bitrate in bits/second.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'bufSize',
      'Size of buffer in bits.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'alternativeTransferFunction',
      'Whether or not EML should insert an Alternative Transfer Function SEI message.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'slices',
      'Number of slices per picture.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'scanType',
      'Sets the scan type of the output.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'parDenominator',
      'Pixel Aspect Ratio denominator.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'timecodeInsertion',
      'Determines how timecodes should be inserted into the video elementary stream.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'filterSettings',
      'Filters to apply to an encode. See H265 Filter Settings for more details.',
      () =>
        medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsFilterSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'lookAheadRateControl',
      'Amount of lookahead.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'profile',
      'H265 profile.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'parNumerator',
      'Pixel Aspect Ratio numerator.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'sceneChangeDetect',
      'Scene change detection.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'fixedAfd',
      'Four bit AFD value to write on all frames of video in the output stream.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'gopSize',
      'GOP size in units of either frames of seconds per `gop_size_units`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'tier',
      'Set the H265 tier in the output.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'level',
      'H265 level.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'framerateNumerator',
      'Framerate numerator.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'gopClosedCadence',
      'Frequency of closed GOPs.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'framerateDenominator',
      'Framerate denominator.',
      () => [],
      true,
      false,
    ),
  ];
}
