import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264SettingsFilterSettingsTemporalFilterSettings {
  // Post filter sharpening.
  postFilterSharpening?: string;

  // Filter strength.
  strength?: string;
}

export function medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH264SettingsFilterSettingsTemporalFilterSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "postFilterSharpening",
      "Post filter sharpening.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "strength",
      "Filter strength.",
      () => [],
      false,
      false,
    ),
  ];
}
