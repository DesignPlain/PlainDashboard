import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsFilterSettingsTemporalFilterSettings {
  // Post filter sharpening.
  postFilterSharpening?: string;

  // Filter strength.
  strength?: string;
}

export function medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsFilterSettingsTemporalFilterSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "postFilterSharpening",
      "Post filter sharpening.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "strength",
      "Filter strength.",
      [],
      false,
      false,
    ),
  ];
}
