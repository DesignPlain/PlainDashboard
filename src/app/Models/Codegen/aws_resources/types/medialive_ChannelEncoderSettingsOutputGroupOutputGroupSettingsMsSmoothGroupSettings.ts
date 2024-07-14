import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMsSmoothGroupSettingsDestination,
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMsSmoothGroupSettingsDestination_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMsSmoothGroupSettingsDestination";

export interface medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMsSmoothGroupSettings {
  //
  eventStopBehavior?: string;

  //
  filecacheDuration?: number;

  // Number of seconds to wait until a restart is initiated.
  restartDelay?: number;

  //
  segmentationMode?: string;

  // A director and base filename where archive files should be written. See Destination for more details.
  destination?: medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMsSmoothGroupSettingsDestination;

  //
  eventId?: string;

  //
  fragmentLength?: number;

  // Number of retry attempts.
  numRetries?: number;

  //
  streamManifestBehavior?: string;

  //
  timestampOffsetMode?: string;

  //
  acquisitionPointId?: string;

  //
  eventIdMode?: string;

  // Controls the behavior of the RTMP group if input becomes unavailable.
  inputLossAction?: string;

  //
  sendDelayMs?: number;

  //
  timestampOffset?: string;

  //
  audioOnlyTimecodeControl?: string;

  // Setting to allow self signed or verified RTMP certificates.
  certificateMode?: string;

  // Number of seconds to wait before retrying connection to the flash media server if the connection is lost.
  connectionRetryInterval?: number;

  //
  sparseTrackType?: string;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMsSmoothGroupSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "filecacheDuration",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "destination",
      "A director and base filename where archive files should be written. See Destination for more details.",
      medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsMsSmoothGroupSettingsDestination_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "fragmentLength",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timestampOffsetMode",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "connectionRetryInterval",
      "Number of seconds to wait before retrying connection to the flash media server if the connection is lost.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sparseTrackType",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "numRetries",
      "Number of retry attempts.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "streamManifestBehavior",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "inputLossAction",
      "Controls the behavior of the RTMP group if input becomes unavailable.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.Number, "sendDelayMs", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "audioOnlyTimecodeControl",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "certificateMode",
      "Setting to allow self signed or verified RTMP certificates.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "eventStopBehavior",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "restartDelay",
      "Number of seconds to wait until a restart is initiated.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "segmentationMode",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "acquisitionPointId",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "eventIdMode", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "timestampOffset",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "eventId", "", [], false, false),
  ];
}
