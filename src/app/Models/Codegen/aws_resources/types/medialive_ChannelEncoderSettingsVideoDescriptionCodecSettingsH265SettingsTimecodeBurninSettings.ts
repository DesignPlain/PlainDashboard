import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsTimecodeBurninSettings {
  // Sets the size of the burned in timecode.
  timecodeBurninFontSize?: string;

  // Sets the position of the burned in timecode.
  timecodeBurninPosition?: string;

  // Set a prefix on the burned in timecode.
  prefix?: string;
}

export function medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsTimecodeBurninSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "Set a prefix on the burned in timecode.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timecodeBurninFontSize",
      "Sets the size of the burned in timecode.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timecodeBurninPosition",
      "Sets the position of the burned in timecode.",
      [],
      false,
      false,
    ),
  ];
}
