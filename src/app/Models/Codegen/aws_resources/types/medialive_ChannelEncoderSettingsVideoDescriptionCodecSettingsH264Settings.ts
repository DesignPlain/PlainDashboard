import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264SettingsFilterSettings,
  medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264SettingsFilterSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264SettingsFilterSettings";

export interface medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264Settings {
  // Size of buffer in bits.
  bufSize?: number;

  // GOP-B reference.
  gopBReference?: string;

  // Set the maximum bitrate in order to accommodate expected spikes in the complexity of the video.
  maxBitrate?: number;

  //
  minIInterval?: number;

  // Indicates how the output pixel aspect ratio is specified.
  parControl?: string;

  // Number of slices per picture.
  slices?: number;

  // Indicates how the output video frame rate is specified.
  framerateControl?: string;

  // Amount of lookahead.
  lookAheadRateControl?: string;

  // Number of reference frames to use.
  numRefFrames?: number;

  // Four bit AFD value to write on all frames of video in the output stream.
  fixedAfd?: string;

  // The rate control mode.
  rateControlMode?: string;

  // Sets the scan type of the output.
  scanType?: string;

  // Makes adjustments within each frame based on spatial variation of content complexity.
  spatialAq?: string;

  // Subgop length.
  subgopLength?: string;

  // Determines how timecodes should be inserted into the video elementary stream.
  timecodeInsertion?: string;

  // Entropy encoding mode.
  entropyEncoding?: string;

  // Controls whether coding is performed on a field basis or on a frame basis.
  forceFieldPictures?: string;

  // Framerate numerator.
  framerateNumerator?: number;

  // GOP size in units of either frames of seconds per `gop_size_units`.
  gopSize?: number;

  // H265 level.
  level?: string;

  // Quality level.
  qualityLevel?: string;

  // Indicates that AFD values will be written into the output stream.
  afdSignaling?: string;

  // Average bitrate in bits/second.
  bitrate?: number;

  // Filters to apply to an encode. See H265 Filter Settings for more details.
  filterSettings?: medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264SettingsFilterSettings;

  //
  flickerAq?: string;

  // Frequency of closed GOPs.
  gopClosedCadence?: number;

  // Softness.
  softness?: number;

  //
  bufFillPct?: number;

  // Indicates if the `gop_size` is specified in frames or seconds.
  gopSizeUnits?: string;

  // Pixel Aspect Ratio numerator.
  parNumerator?: number;

  // AAC profile.
  profile?: string;

  // Produces a bitstream compliant with SMPTE RP-2027.
  syntax?: string;

  // Scene change detection.
  sceneChangeDetect?: string;

  // Makes adjustments within each frame based on temporal variation of content complexity.
  temporalAq?: string;

  // Enables or disables adaptive quantization.
  adaptiveQuantization?: string;

  // Includes color space metadata in the output.
  colorMetadata?: string;

  // Framerate denominator.
  framerateDenominator?: number;

  // Number of B-frames between reference frames.
  gopNumBFrames?: number;

  // Pixel Aspect Ratio denominator.
  parDenominator?: number;

  // Controls the target quality for the video encode.
  qvbrQualityLevel?: number;
}

export function medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264Settings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "rateControlMode",
      "The rate control mode.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "scanType",
      "Sets the scan type of the output.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "forceFieldPictures",
      "Controls whether coding is performed on a field basis or on a frame basis.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "numRefFrames",
      "Number of reference frames to use.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "fixedAfd",
      "Four bit AFD value to write on all frames of video in the output stream.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.Number, "bufFillPct", "", [], false, false),
    new DynamicUIProps(
      InputType.Number,
      "gopNumBFrames",
      "Number of B-frames between reference frames.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "qvbrQualityLevel",
      "Controls the target quality for the video encode.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lookAheadRateControl",
      "Amount of lookahead.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subgopLength",
      "Subgop length.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "entropyEncoding",
      "Entropy encoding mode.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "afdSignaling",
      "Indicates that AFD values will be written into the output stream.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sceneChangeDetect",
      "Scene change detection.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "parDenominator",
      "Pixel Aspect Ratio denominator.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "spatialAq",
      "Makes adjustments within each frame based on spatial variation of content complexity.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "framerateControl",
      "Indicates how the output video frame rate is specified.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "gopSize",
      "GOP size in units of either frames of seconds per `gop_size_units`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "qualityLevel",
      "Quality level.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "flickerAq", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "profile",
      "AAC profile.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "temporalAq",
      "Makes adjustments within each frame based on temporal variation of content complexity.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "framerateDenominator",
      "Framerate denominator.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "bufSize",
      "Size of buffer in bits.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "parControl",
      "Indicates how the output pixel aspect ratio is specified.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "framerateNumerator",
      "Framerate numerator.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "filterSettings",
      "Filters to apply to an encode. See H265 Filter Settings for more details.",
      medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264SettingsFilterSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "parNumerator",
      "Pixel Aspect Ratio numerator.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "syntax",
      "Produces a bitstream compliant with SMPTE RP-2027.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "colorMetadata",
      "Includes color space metadata in the output.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "gopBReference",
      "GOP-B reference.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "adaptiveQuantization",
      "Enables or disables adaptive quantization.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "gopClosedCadence",
      "Frequency of closed GOPs.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "slices",
      "Number of slices per picture.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timecodeInsertion",
      "Determines how timecodes should be inserted into the video elementary stream.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "level",
      "H265 level.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "softness",
      "Softness.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.Number, "minIInterval", "", [], false, false),
    new DynamicUIProps(
      InputType.Number,
      "bitrate",
      "Average bitrate in bits/second.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "gopSizeUnits",
      "Indicates if the `gop_size` is specified in frames or seconds.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxBitrate",
      "Set the maximum bitrate in order to accommodate expected spikes in the complexity of the video.",
      [],
      false,
      false,
    ),
  ];
}
