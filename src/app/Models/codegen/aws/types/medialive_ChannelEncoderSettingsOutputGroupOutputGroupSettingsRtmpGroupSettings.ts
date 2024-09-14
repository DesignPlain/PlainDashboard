import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsRtmpGroupSettings {
  // Authentication scheme to use when connecting with CDN.
  authenticationScheme?: string;

  // Controls behavior when content cache fills up.
  cacheFullBehavior?: string;

  // Cache length in seconds, is used to calculate buffer size.
  cacheLength?: number;

  // Controls the types of data that passes to onCaptionInfo outputs.
  captionData?: string;

  // Controls the behavior of the RTMP group if input becomes unavailable.
  inputLossAction?: string;

  // Number of seconds to wait until a restart is initiated.
  restartDelay?: number;

  // The ad marker type for this output group.
  adMarkers?: Array<string>;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsRtmpGroupSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "authenticationScheme",
      "Authentication scheme to use when connecting with CDN.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cacheFullBehavior",
      "Controls behavior when content cache fills up.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "cacheLength",
      "Cache length in seconds, is used to calculate buffer size.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "captionData",
      "Controls the types of data that passes to onCaptionInfo outputs.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "inputLossAction",
      "Controls the behavior of the RTMP group if input becomes unavailable.",
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
      InputType.Array,
      "adMarkers",
      "The ad marker type for this output group.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
