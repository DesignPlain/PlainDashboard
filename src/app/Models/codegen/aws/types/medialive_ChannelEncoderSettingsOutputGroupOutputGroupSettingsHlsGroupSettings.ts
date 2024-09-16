import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsKeyProviderSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsKeyProviderSettings_GetTypes,
} from './medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsKeyProviderSettings';
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsDestination,
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsDestination_GetTypes,
} from './medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsDestination';
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsCaptionLanguageMapping,
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsCaptionLanguageMapping_GetTypes,
} from './medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsCaptionLanguageMapping';
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSetting,
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSetting_GetTypes,
} from './medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSetting';

export interface medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettings {
  //
  baseUrlContent1?: string;

  //
  baseUrlManifest1?: string;

  //
  destination?: medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsDestination;

  //
  programDateTime?: string;

  //
  segmentLength?: number;

  //
  timestampDeltaMilliseconds?: number;

  //
  hlsId3SegmentTagging?: string;

  //
  keyFormatVersions?: string;

  //
  programDateTimePeriod?: number;

  //
  segmentsPerSubdirectory?: number;

  // Indicates ID3 frame that has the timecode.
  timedMetadataId3Frame?: string;

  //
  timedMetadataId3Period?: number;

  //
  captionLanguageMappings?: Array<medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsCaptionLanguageMapping>;

  //
  captionLanguageSetting?: string;

  //
  directoryStructure?: string;

  //
  discontinuityTags?: string;

  //
  ivInManifest?: string;

  //
  keyFormat?: string;

  //
  minSegmentLength?: number;

  // The ad marker type for this output group.
  adMarkers?: Array<string>;

  //
  codecSpecification?: string;

  //
  iframeOnlyPlaylists?: string;

  //
  indexNSegments?: number;

  //
  keepSegments?: number;

  //
  manifestCompression?: string;

  //
  programDateTimeClock?: string;

  //
  redundantManifest?: string;

  //
  baseUrlManifest?: string;

  //
  clientCache?: string;

  //
  constantIv?: string;

  //
  encryptionType?: string;

  //
  inputLossAction?: string;

  //
  manifestDurationFormat?: string;

  //
  streamInfResolution?: string;

  //
  tsFileMode?: string;

  //
  baseUrlContent?: string;

  //
  hlsCdnSettings?: Array<medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSetting>;

  //
  outputSelection?: string;

  //
  incompleteSegmentBehavior?: string;

  //
  ivSource?: string;

  //
  keyProviderSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsKeyProviderSettings;

  //
  mode?: string;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'programDateTimePeriod',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'minSegmentLength',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'indexNSegments',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'programDateTime',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'timedMetadataId3Period',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'codecSpecification',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'timedMetadataId3Frame',
      'Indicates ID3 frame that has the timecode.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'keepSegments',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'baseUrlManifest',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'incompleteSegmentBehavior',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'iframeOnlyPlaylists',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'hlsId3SegmentTagging',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'directoryStructure',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'tsFileMode',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'outputSelection',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'keyProviderSettings',
      '',
      () =>
        medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsKeyProviderSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, 'mode', '', () => [], false, false),
    new DynamicUIProps(
      InputType.String,
      'baseUrlManifest1',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'keyFormatVersions',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'segmentsPerSubdirectory',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'captionLanguageSetting',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'ivInManifest',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'programDateTimeClock',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'redundantManifest',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'encryptionType',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'baseUrlContent1',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'baseUrlContent',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'inputLossAction',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'timestampDeltaMilliseconds',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'adMarkers',
      'The ad marker type for this output group.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'ivSource',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'segmentLength',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'captionLanguageMappings',
      '',
      () =>
        medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsCaptionLanguageMapping_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'discontinuityTags',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'manifestCompression',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'constantIv',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'manifestDurationFormat',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'streamInfResolution',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'destination',
      '',
      () =>
        medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsDestination_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'clientCache',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'hlsCdnSettings',
      '',
      () =>
        medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSetting_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'keyFormat',
      '',
      () => [],
      false,
      false,
    ),
  ];
}
