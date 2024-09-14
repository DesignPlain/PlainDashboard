import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsFrameCaptureSettings {
  // The frequency at which to capture frames for inclusion in the output.
  captureInterval?: number;

  // Unit for the frame capture interval.
  captureIntervalUnits?: string;
}

export function medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsFrameCaptureSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "captureInterval",
      "The frequency at which to capture frames for inclusion in the output.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "captureIntervalUnits",
      "Unit for the frame capture interval.",
      () => [],
      false,
      false,
    ),
  ];
}
