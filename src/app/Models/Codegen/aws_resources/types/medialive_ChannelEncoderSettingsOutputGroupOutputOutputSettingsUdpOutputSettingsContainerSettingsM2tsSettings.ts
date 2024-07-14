import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbNitSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbNitSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbNitSettings";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbTdtSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbTdtSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbTdtSettings";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbSdtSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbSdtSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbSdtSettings";

export interface medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettings {
  //
  audioBufferModel?: string;

  //
  ccDescriptor?: string;

  //
  dvbNitSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbNitSettings;

  // PID from which to read SCTE-35 messages.
  scte35Pid?: string;

  //
  segmentationMarkers?: string;

  //
  dvbTeletextPid?: string;

  //
  etvSignalPid?: string;

  //
  fragmentTime?: number;

  //
  nielsenId3Behavior?: string;

  //
  scte27Pids?: string;

  //
  arib?: string;

  //
  patInterval?: number;

  //
  dvbTdtSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbTdtSettings;

  //
  ebif?: string;

  //
  klvDataPids?: string;

  //
  bufferModel?: string;

  //
  ecmPid?: string;

  //
  nullPacketBitrate?: number;

  //
  pcrPeriod?: number;

  //
  transportStreamId?: number;

  //
  ebpLookaheadMs?: number;

  //
  klv?: string;

  //
  segmentationStyle?: string;

  //
  segmentationTime?: number;

  //
  timedMetadataPid?: string;

  //
  pcrPid?: string;

  //
  pmtInterval?: number;

  //
  pmtPid?: string;

  //
  audioPids?: string;

  //
  audioStreamType?: string;

  //
  dvbSdtSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbSdtSettings;

  //
  ebpAudioInterval?: string;

  //
  ebpPlacement?: string;

  //
  scte35Control?: string;

  //
  timedMetadataBehavior?: string;

  //
  dvbSubPids?: string;

  //
  esRateInPes?: string;

  //
  etvPlatformPid?: string;

  //
  absentInputAudioBehavior?: string;

  //
  aribCaptionsPid?: string;

  //
  aribCaptionsPidControl?: string;

  //
  audioFramesPerPes?: number;

  // Average bitrate in bits/second.
  bitrate?: number;

  //
  pcrControl?: string;

  //
  programNum?: number;

  //
  rateMode?: string;

  //
  videoPid?: string;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "segmentationMarkers",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "arib", "", [], false, false),
    new DynamicUIProps(InputType.Number, "patInterval", "", [], false, false),
    new DynamicUIProps(InputType.Number, "pcrPeriod", "", [], false, false),
    new DynamicUIProps(
      InputType.Number,
      "segmentationTime",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "audioPids", "", [], false, false),
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
      "timedMetadataBehavior",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "dvbSubPids", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "aribCaptionsPidControl",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "klvDataPids", "", [], false, false),
    new DynamicUIProps(
      InputType.Number,
      "ebpLookaheadMs",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.Number, "pmtInterval", "", [], false, false),
    new DynamicUIProps(InputType.String, "scte35Control", "", [], false, false),
    new DynamicUIProps(InputType.String, "esRateInPes", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "nielsenId3Behavior",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "nullPacketBitrate",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "transportStreamId",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dvbSdtSettings",
      "",
      medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbSdtSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "pmtPid", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "absentInputAudioBehavior",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "pcrControl", "", [], false, false),
    new DynamicUIProps(InputType.Number, "programNum", "", [], false, false),
    new DynamicUIProps(InputType.String, "ccDescriptor", "", [], false, false),
    new DynamicUIProps(
      InputType.Object,
      "dvbNitSettings",
      "",
      medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbNitSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "bufferModel", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "timedMetadataPid",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "ecmPid", "", [], false, false),
    new DynamicUIProps(InputType.String, "klv", "", [], false, false),
    new DynamicUIProps(InputType.String, "rateMode", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "audioBufferModel",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "scte35Pid",
      "PID from which to read SCTE-35 messages.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "scte27Pids", "", [], false, false),
    new DynamicUIProps(
      InputType.Object,
      "dvbTdtSettings",
      "",
      medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettingsM2tsSettingsDvbTdtSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "ebpPlacement", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "etvPlatformPid",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "aribCaptionsPid",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "etvSignalPid", "", [], false, false),
    new DynamicUIProps(InputType.Number, "fragmentTime", "", [], false, false),
    new DynamicUIProps(InputType.String, "pcrPid", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "ebpAudioInterval",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "audioFramesPerPes",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "videoPid", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "dvbTeletextPid",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "ebif", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "segmentationStyle",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "audioStreamType",
      "",
      [],
      false,
      false,
    ),
  ];
}
