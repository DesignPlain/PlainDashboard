import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMsSmoothGroupSettingsDestination,
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMsSmoothGroupSettingsDestination_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMsSmoothGroupSettingsDestination";

export interface medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMsSmoothGroupSettings {
  //
  audioOnlyTimecodeControl?: string;

  //
  eventIdMode?: string;

  // Number of retry attempts.
  numRetries?: number;

  //
  timestampOffsetMode?: string;

  //
  acquisitionPointId?: string;

  //
  eventId?: string;

  //
  filecacheDuration?: number;

  //
  fragmentLength?: number;

  //
  sendDelayMs?: number;

  // Setting to allow self signed or verified RTMP certificates.
  certificateMode?: string;

  // Number of seconds to wait before retrying connection to the flash media server if the connection is lost.
  connectionRetryInterval?: number;

  //
  inputLossAction?: string;

  // Number of seconds to wait until a restart is initiated.
  restartDelay?: number;

  //
  sparseTrackType?: string;

  //
  timestampOffset?: string;

  //
  destination?: medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMsSmoothGroupSettingsDestination;

  //
  eventStopBehavior?: string;

  //
  segmentationMode?: string;

  //
  streamManifestBehavior?: string;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMsSmoothGroupSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "sendDelayMs",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "connectionRetryInterval",
      "Number of seconds to wait before retrying connection to the flash media server if the connection is lost.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "destination",
      "",
      () =>
        medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMsSmoothGroupSettingsDestination_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "segmentationMode",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "numRetries",
      "Number of retry attempts.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "fragmentLength",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "certificateMode",
      "Setting to allow self signed or verified RTMP certificates.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "restartDelay",
      "Number of seconds to wait until a restart is initiated.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "audioOnlyTimecodeControl",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "acquisitionPointId",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "eventId", "", () => [], false, false),
    new DynamicUIProps(
      InputType.Number,
      "filecacheDuration",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "inputLossAction",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "eventStopBehavior",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "streamManifestBehavior",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "eventIdMode",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timestampOffsetMode",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sparseTrackType",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timestampOffset",
      "",
      () => [],
      false,
      false,
    ),
  ];
}
