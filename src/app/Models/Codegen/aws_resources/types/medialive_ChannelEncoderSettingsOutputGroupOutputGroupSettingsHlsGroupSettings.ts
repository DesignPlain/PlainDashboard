import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsDestination,
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsDestination_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsDestination";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsCaptionLanguageMapping,
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsCaptionLanguageMapping_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsCaptionLanguageMapping";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsKeyProviderSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsKeyProviderSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsKeyProviderSettings";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSetting,
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSetting_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSetting";

export interface medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettings {
  // The ad marker type for this output group.
  adMarkers?: Array<string>;

  //
  baseUrlManifest1?: string;

  //
  clientCache?: string;

  //
  keyFormat?: string;

  //
  timedMetadataId3Period?: number;

  //
  indexNSegments?: number;

  //
  redundantManifest?: string;

  // Indicates ID3 frame that has the timecode.
  timedMetadataId3Frame?: string;

  //
  baseUrlManifest?: string;

  //
  constantIv?: string;

  //
  ivSource?: string;

  //
  keyProviderSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsKeyProviderSettings;

  //
  programDateTimePeriod?: number;

  //
  hlsCdnSettings?: Array<medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSetting>;

  //
  iframeOnlyPlaylists?: string;

  //
  outputSelection?: string;

  //
  segmentLength?: number;

  //
  timestampDeltaMilliseconds?: number;

  //
  captionLanguageSetting?: string;

  // Controls the behavior of the RTMP group if input becomes unavailable.
  inputLossAction?: string;

  //
  minSegmentLength?: number;

  //
  tsFileMode?: string;

  //
  discontinuityTags?: string;

  //
  keepSegments?: number;

  //
  manifestCompression?: string;

  //
  programDateTimeClock?: string;

  //
  segmentsPerSubdirectory?: number;

  //
  ivInManifest?: string;

  //
  manifestDurationFormat?: string;

  //
  mode?: string;

  //
  baseUrlContent?: string;

  //
  baseUrlContent1?: string;

  // A director and base filename where archive files should be written. See Destination for more details.
  destination?: medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsDestination;

  //
  hlsId3SegmentTagging?: string;

  //
  incompleteSegmentBehavior?: string;

  //
  programDateTime?: string;

  //
  streamInfResolution?: string;

  //
  captionLanguageMappings?: Array<medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsCaptionLanguageMapping>;

  //
  codecSpecification?: string;

  //
  directoryStructure?: string;

  //
  encryptionType?: string;

  //
  keyFormatVersions?: string;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "timestampDeltaMilliseconds",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "programDateTimeClock",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "manifestDurationFormat",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "baseUrlManifest1",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "programDateTimePeriod",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "captionLanguageMappings",
      "",
      medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsCaptionLanguageMapping_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minSegmentLength",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "baseUrlContent1",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "timedMetadataId3Period",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "indexNSegments",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "constantIv", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "iframeOnlyPlaylists",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "captionLanguageSetting",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "programDateTime",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "adMarkers",
      "The ad marker type for this output group.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "keyFormat", "", [], false, false),
    new DynamicUIProps(InputType.String, "tsFileMode", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "baseUrlContent",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "codecSpecification",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "directoryStructure",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "ivSource", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "inputLossAction",
      "Controls the behavior of the RTMP group if input becomes unavailable.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "manifestCompression",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "segmentsPerSubdirectory",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "destination",
      "A director and base filename where archive files should be written. See Destination for more details.",
      medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsDestination_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "incompleteSegmentBehavior",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "hlsCdnSettings",
      "",
      medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSetting_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "outputSelection",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "discontinuityTags",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "clientCache", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "timedMetadataId3Frame",
      "Indicates ID3 frame that has the timecode.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.Number, "keepSegments", "", [], false, false),
    new DynamicUIProps(InputType.String, "ivInManifest", "", [], false, false),
    new DynamicUIProps(InputType.String, "mode", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "encryptionType",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "keyFormatVersions",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "redundantManifest",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.Number, "segmentLength", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "hlsId3SegmentTagging",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "streamInfResolution",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "baseUrlManifest",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "keyProviderSettings",
      "",
      medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsKeyProviderSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
