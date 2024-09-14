import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettingsDestination,
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettingsDestination_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettingsDestination";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettings";

export interface medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettings {
  //
  destination?: medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettingsDestination;

  //
  frameCaptureCdnSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettings;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "destination",
      "",
      () =>
        medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettingsDestination_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "frameCaptureCdnSettings",
      "",
      () =>
        medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
