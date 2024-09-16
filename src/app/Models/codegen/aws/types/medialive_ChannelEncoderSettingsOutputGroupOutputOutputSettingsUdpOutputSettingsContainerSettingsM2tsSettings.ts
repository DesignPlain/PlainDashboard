import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbSdtSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbSdtSettings_GetTypes,
} from './medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbSdtSettings';
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbNitSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbNitSettings_GetTypes,
} from './medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbNitSettings';
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbTdtSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbTdtSettings_GetTypes,
} from './medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbTdtSettings';

export interface medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettings {
  //
  audioFramesPerPes?: number;

  //
  bufferModel?: string;

  //
  dvbTdtSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbTdtSettings;

  //
  dvbTeletextPid?: string;

  //
  pmtPid?: string;

  //
  arib?: string;

  //
  aribCaptionsPid?: string;

  //
  etvSignalPid?: string;

  //
  nullPacketBitrate?: number;

  //
  pmtInterval?: number;

  //
  programNum?: number;

  //
  scte27Pids?: string;

  //
  segmentationStyle?: string;

  //
  bitrate?: number;

  //
  ccDescriptor?: string;

  //
  timedMetadataBehavior?: string;

  //
  klvDataPids?: string;

  //
  videoPid?: string;

  //
  ebif?: string;

  //
  ebpAudioInterval?: string;

  //
  dvbSdtSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbSdtSettings;

  //
  ebpLookaheadMs?: number;

  //
  ebpPlacement?: string;

  //
  ecmPid?: string;

  //
  pcrControl?: string;

  //
  rateMode?: string;

  //
  absentInputAudioBehavior?: string;

  //
  dvbNitSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbNitSettings;

  // PID from which to read SCTE-35 messages.
  scte35Pid?: string;

  //
  segmentationTime?: number;

  //
  klv?: string;

  //
  nielsenId3Behavior?: string;

  //
  pcrPeriod?: number;

  //
  audioStreamType?: string;

  //
  fragmentTime?: number;

  //
  timedMetadataPid?: string;

  //
  dvbSubPids?: string;

  //
  scte35Control?: string;

  //
  esRateInPes?: string;

  //
  etvPlatformPid?: string;

  //
  patInterval?: number;

  //
  aribCaptionsPidControl?: string;

  //
  audioPids?: string;

  //
  segmentationMarkers?: string;

  //
  transportStreamId?: number;

  //
  audioBufferModel?: string;

  //
  pcrPid?: string;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'ecmPid', '', () => [], false, false),
    new DynamicUIProps(
      InputType.String,
      'audioStreamType',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'dvbSubPids',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'esRateInPes',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'transportStreamId',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'audioFramesPerPes',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'dvbTeletextPid',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'klvDataPids',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'scte35Pid',
      'PID from which to read SCTE-35 messages.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'nielsenId3Behavior',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'timedMetadataPid',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'aribCaptionsPidControl',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, 'arib', '', () => [], false, false),
    new DynamicUIProps(
      InputType.Object,
      'dvbSdtSettings',
      '',
      () =>
        medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbSdtSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'ebpLookaheadMs',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'rateMode',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'absentInputAudioBehavior',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'pcrPeriod',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'audioBufferModel',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'programNum',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.Number, 'bitrate', '', () => [], false, false),
    new DynamicUIProps(InputType.String, 'klv', '', () => [], false, false),
    new DynamicUIProps(
      InputType.Number,
      'fragmentTime',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'audioPids',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'dvbTdtSettings',
      '',
      () =>
        medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbTdtSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'nullPacketBitrate',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'segmentationStyle',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'videoPid',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'ebpAudioInterval',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'patInterval',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'aribCaptionsPid',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, 'ebif', '', () => [], false, false),
    new DynamicUIProps(
      InputType.String,
      'ebpPlacement',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'pcrControl',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'segmentationTime',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'etvPlatformPid',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'dvbNitSettings',
      '',
      () =>
        medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbNitSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'segmentationMarkers',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, 'pcrPid', '', () => [], false, false),
    new DynamicUIProps(
      InputType.String,
      'timedMetadataBehavior',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'scte35Control',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'bufferModel',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, 'pmtPid', '', () => [], false, false),
    new DynamicUIProps(
      InputType.String,
      'etvSignalPid',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'pmtInterval',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'scte27Pids',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'ccDescriptor',
      '',
      () => [],
      false,
      false,
    ),
  ];
}
