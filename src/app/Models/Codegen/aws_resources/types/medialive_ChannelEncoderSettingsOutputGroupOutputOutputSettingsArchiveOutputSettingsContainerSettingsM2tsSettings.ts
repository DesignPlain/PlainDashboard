import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettingsDvbNitSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettingsDvbNitSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettingsDvbNitSettings";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettingsDvbTdtSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettingsDvbTdtSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettingsDvbTdtSettings";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettingsDvbSdtSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettingsDvbSdtSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettingsDvbSdtSettings";

export interface medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettings {
  //
  ebif?: string;

  //
  esRateInPes?: string;

  //
  klv?: string;

  //
  segmentationMarkers?: string;

  // PID from which to read SCTE-35 messages.
  scte35Pid?: string;

  //
  segmentationTime?: number;

  //
  timedMetadataPid?: string;

  //
  dvbNitSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettingsDvbNitSettings;

  //
  dvbTeletextPid?: string;

  //
  ebpPlacement?: string;

  //
  programNum?: number;

  //
  audioFramesPerPes?: number;

  //
  ccDescriptor?: string;

  //
  dvbTdtSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettingsDvbTdtSettings;

  //
  ebpLookaheadMs?: number;

  //
  scte35Control?: string;

  //
  etvPlatformPid?: string;

  //
  fragmentTime?: number;

  //
  nielsenId3Behavior?: string;

  //
  pcrPid?: string;

  //
  dvbSdtSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettingsDvbSdtSettings;

  //
  dvbSubPids?: string;

  //
  timedMetadataBehavior?: string;

  //
  absentInputAudioBehavior?: string;

  //
  aribCaptionsPid?: string;

  //
  audioPids?: string;

  //
  audioStreamType?: string;

  //
  etvSignalPid?: string;

  //
  nullPacketBitrate?: number;

  //
  patInterval?: number;

  //
  pcrControl?: string;

  //
  audioBufferModel?: string;

  //
  pmtInterval?: number;

  //
  rateMode?: string;

  //
  videoPid?: string;

  //
  ebpAudioInterval?: string;

  //
  ecmPid?: string;

  //
  klvDataPids?: string;

  //
  pcrPeriod?: number;

  //
  arib?: string;

  //
  aribCaptionsPidControl?: string;

  // Average bitrate in bits/second.
  bitrate?: number;

  //
  bufferModel?: string;

  //
  pmtPid?: string;

  //
  scte27Pids?: string;

  //
  segmentationStyle?: string;

  //
  transportStreamId?: number;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "rateMode", "", [], false, false),
    new DynamicUIProps(
      InputType.Object,
      "dvbNitSettings",
      "",
      medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettingsDvbNitSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dvbTeletextPid",
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
    new DynamicUIProps(InputType.String, "ccDescriptor", "", [], false, false),
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
    new DynamicUIProps(InputType.Number, "pmtInterval", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "aribCaptionsPidControl",
      "",
      [],
      false,
      false,
    ),
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
      "segmentationStyle",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dvbTdtSettings",
      "",
      medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettingsDvbTdtSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "scte35Control", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "audioStreamType",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "videoPid", "", [], false, false),
    new DynamicUIProps(InputType.String, "ecmPid", "", [], false, false),
    new DynamicUIProps(InputType.String, "arib", "", [], false, false),
    new DynamicUIProps(
      InputType.Number,
      "transportStreamId",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "klvDataPids", "", [], false, false),
    new DynamicUIProps(InputType.String, "ebif", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "segmentationMarkers",
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
    new DynamicUIProps(
      InputType.Number,
      "segmentationTime",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.Number, "fragmentTime", "", [], false, false),
    new DynamicUIProps(InputType.String, "pcrPid", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "absentInputAudioBehavior",
      "",
      [],
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
    new DynamicUIProps(
      InputType.String,
      "etvPlatformPid",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "dvbSubPids", "", [], false, false),
    new DynamicUIProps(InputType.String, "audioPids", "", [], false, false),
    new DynamicUIProps(InputType.String, "pcrControl", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "audioBufferModel",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.Number, "pcrPeriod", "", [], false, false),
    new DynamicUIProps(
      InputType.Number,
      "ebpLookaheadMs",
      "",
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
    new DynamicUIProps(InputType.String, "pmtPid", "", [], false, false),
    new DynamicUIProps(InputType.String, "klv", "", [], false, false),
    new DynamicUIProps(InputType.String, "ebpPlacement", "", [], false, false),
    new DynamicUIProps(InputType.Number, "programNum", "", [], false, false),
    new DynamicUIProps(
      InputType.Object,
      "dvbSdtSettings",
      "",
      medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettingsDvbSdtSettings_GetTypes(),
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
    new DynamicUIProps(InputType.String, "esRateInPes", "", [], false, false),
    new DynamicUIProps(InputType.Number, "patInterval", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "ebpAudioInterval",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "scte27Pids", "", [], false, false),
  ];
}
