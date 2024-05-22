import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettingsDestination,
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettingsDestination_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettingsDestination";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettings";

export interface medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettings {
  // A director and base filename where archive files should be written. See Destination for more details.
  destination?: medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettingsDestination;

  //
  frameCaptureCdnSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettings;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "destination",
      "A director and base filename where archive files should be written. See Destination for more details.",
      medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettingsDestination_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "frameCaptureCdnSettings",
      "",
      medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
