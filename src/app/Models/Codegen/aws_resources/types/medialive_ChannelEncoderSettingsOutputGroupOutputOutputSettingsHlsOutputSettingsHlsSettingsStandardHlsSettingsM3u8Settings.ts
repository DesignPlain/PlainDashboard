import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsM3u8Settings {
  //
  audioPids?: string;

  //
  ecmPid?: string;

  //
  pmtPid?: string;

  //
  transportStreamId?: number;

  //
  videoPid?: string;

  //
  pcrPid?: string;

  // PID from which to read SCTE-35 messages.
  scte35Pid?: string;

  //
  audioFramesPerPes?: number;

  //
  nielsenId3Behavior?: string;

  //
  pmtInterval?: number;

  //
  scte35Behavior?: string;

  //
  patInterval?: number;

  //
  pcrControl?: string;

  //
  pcrPeriod?: number;

  //
  programNum?: number;

  //
  timedMetadataBehavior?: string;

  //
  timedMetadataPid?: string;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsM3u8Settings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "pmtPid", "", [], false, false),
    new DynamicUIProps(InputType.String, "ecmPid", "", [], false, false),
    new DynamicUIProps(InputType.String, "pcrPid", "", [], false, false),
    new DynamicUIProps(
      InputType.Number,
      "audioFramesPerPes",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "audioPids", "", [], false, false),
    new DynamicUIProps(InputType.Number, "pmtInterval", "", [], false, false),
    new DynamicUIProps(InputType.Number, "patInterval", "", [], false, false),
    new DynamicUIProps(InputType.Number, "pcrPeriod", "", [], false, false),
    new DynamicUIProps(
      InputType.Number,
      "transportStreamId",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "videoPid", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "scte35Pid",
      "PID from which to read SCTE-35 messages.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "nielsenId3Behavior",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "scte35Behavior",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "pcrControl", "", [], false, false),
    new DynamicUIProps(InputType.Number, "programNum", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "timedMetadataBehavior",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timedMetadataPid",
      "",
      [],
      false,
      false,
    ),
  ];
}
