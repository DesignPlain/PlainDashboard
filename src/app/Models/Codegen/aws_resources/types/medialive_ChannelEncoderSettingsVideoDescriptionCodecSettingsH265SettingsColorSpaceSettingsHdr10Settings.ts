import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsColorSpaceSettingsHdr10Settings {
  // Sets the MaxCLL value for HDR10.
  maxCll?: number;

  // Sets the MaxFALL value for HDR10.
  maxFall?: number;
}

export function medialive_ChannelEncoderSettingsVideoDescriptionCodecSettingsH265SettingsColorSpaceSettingsHdr10Settings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxCll",
      "Sets the MaxCLL value for HDR10.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxFall",
      "Sets the MaxFALL value for HDR10.",
      [],
      false,
      false,
    ),
  ];
}
