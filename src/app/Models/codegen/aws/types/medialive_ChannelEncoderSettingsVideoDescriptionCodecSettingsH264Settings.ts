import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264SettingsFilterSettings,
  medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264SettingsFilterSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264SettingsFilterSettings";

export interface medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264Settings {
  // Softness.
  softness?: number;

  // Determines how timecodes should be inserted into the video elementary stream.
  timecodeInsertion?: string;

  // Enables or disables adaptive quantization.
  adaptiveQuantization?: string;

  // Indicates how the output video frame rate is specified.
  framerateControl?: string;

  // Set the maximum bitrate in order to accommodate expected spikes in the complexity of the video.
  maxBitrate?: number;

  // Number of reference frames to use.
  numRefFrames?: number;

  // Controls the target quality for the video encode.
  qvbrQualityLevel?: number;

  // Sets the scan type of the output.
  scanType?: string;

  // Subgop length.
  subgopLength?: string;

  // Average bitrate in bits/second.
  bitrate?: number;

  // Includes color space metadata in the output.
  colorMetadata?: string;

  // Filters to apply to an encode. See H264 Filter Settings for more details.
  filterSettings?: medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264SettingsFilterSettings;

  // Four bit AFD value to write on all frames of video in the output stream.
  fixedAfd?: string;

  // H264 level.
  level?: string;

  // Frequency of closed GOPs.
  gopClosedCadence?: number;

  // Indicates if the `gop_size` is specified in frames or seconds.
  gopSizeUnits?: string;

  // Pixel Aspect Ratio denominator.
  parDenominator?: number;

  // Controls whether coding is performed on a field basis or on a frame basis.
  forceFieldPictures?: string;

  // Produces a bitstream compliant with SMPTE RP-2027.
  syntax?: string;

  // Rate control mode.
  rateControlMode?: string;

  // Makes adjustments within each frame based on temporal variation of content complexity.
  temporalAq?: string;

  // Indicates that AFD values will be written into the output stream.
  afdSignaling?: string;

  // Framerate denominator.
  framerateDenominator?: number;

  // Amount of lookahead.
  lookAheadRateControl?: string;

  // Pixel Aspect Ratio numerator.
  parNumerator?: number;

  // Quality level.
  qualityLevel?: string;

  // GOP-B reference.
  gopBReference?: string;

  // Number of B-frames between reference frames.
  gopNumBFrames?: number;

  // GOP size in units of either frames of seconds per `gop_size_units`.
  gopSize?: number;

  // H264 profile.
  profile?: string;

  // Scene change detection.
  sceneChangeDetect?: string;

  // Makes adjustments within each frame based on spatial variation of content complexity.
  spatialAq?: string;

  // Size of buffer in bits.
  bufSize?: number;

  // Entropy encoding mode.
  entropyEncoding?: string;

  // Framerate numerator.
  framerateNumerator?: number;

  // Indicates how the output pixel aspect ratio is specified.
  parControl?: string;

  // Number of slices per picture.
  slices?: number;

  //
  bufFillPct?: number;

  //
  flickerAq?: string;

  //
  minIInterval?: number;
}

export function medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264Settings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "scanType",
      "Sets the scan type of the output.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "fixedAfd",
      "Four bit AFD value to write on all frames of video in the output stream.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "framerateDenominator",
      "Framerate denominator.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lookAheadRateControl",
      "Amount of lookahead.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "framerateControl",
      "Indicates how the output video frame rate is specified.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subgopLength",
      "Subgop length.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "bitrate",
      "Average bitrate in bits/second.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "colorMetadata",
      "Includes color space metadata in the output.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "rateControlMode",
      "Rate control mode.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "gopNumBFrames",
      "Number of B-frames between reference frames.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "slices",
      "Number of slices per picture.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "bufFillPct",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "softness",
      "Softness.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxBitrate",
      "Set the maximum bitrate in order to accommodate expected spikes in the complexity of the video.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "numRefFrames",
      "Number of reference frames to use.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timecodeInsertion",
      "Determines how timecodes should be inserted into the video elementary stream.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "gopSizeUnits",
      "Indicates if the `gop_size` is specified in frames or seconds.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "parDenominator",
      "Pixel Aspect Ratio denominator.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "bufSize",
      "Size of buffer in bits.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "syntax",
      "Produces a bitstream compliant with SMPTE RP-2027.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "parNumerator",
      "Pixel Aspect Ratio numerator.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "framerateNumerator",
      "Framerate numerator.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "qvbrQualityLevel",
      "Controls the target quality for the video encode.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "qualityLevel",
      "Quality level.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "spatialAq",
      "Makes adjustments within each frame based on spatial variation of content complexity.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "temporalAq",
      "Makes adjustments within each frame based on temporal variation of content complexity.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "afdSignaling",
      "Indicates that AFD values will be written into the output stream.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "gopBReference",
      "GOP-B reference.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "parControl",
      "Indicates how the output pixel aspect ratio is specified.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minIInterval",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "adaptiveQuantization",
      "Enables or disables adaptive quantization.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "filterSettings",
      "Filters to apply to an encode. See H264 Filter Settings for more details.",
      () =>
        medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264SettingsFilterSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "level",
      "H264 level.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "gopClosedCadence",
      "Frequency of closed GOPs.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "forceFieldPictures",
      "Controls whether coding is performed on a field basis or on a frame basis.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "gopSize",
      "GOP size in units of either frames of seconds per `gop_size_units`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "profile",
      "H264 profile.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sceneChangeDetect",
      "Scene change detection.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "entropyEncoding",
      "Entropy encoding mode.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "flickerAq",
      "",
      () => [],
      false,
      false,
    ),
  ];
}
