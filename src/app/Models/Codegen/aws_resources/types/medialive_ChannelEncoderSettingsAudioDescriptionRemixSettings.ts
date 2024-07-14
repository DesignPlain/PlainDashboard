import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  medialive_ChannelEncoderSettingsAudioDescriptionRemixSettingsChannelMapping,
  medialive_ChannelEncoderSettingsAudioDescriptionRemixSettingsChannelMapping_GetTypes,
} from "./medialive_ChannelEncoderSettingsAudioDescriptionRemixSettingsChannelMapping";

export interface medialive_ChannelEncoderSettingsAudioDescriptionRemixSettings {
  //
  channelsIn?: number;

  //
  channelsOut?: number;

  //
  channelMappings?: Array<medialive_ChannelEncoderSettingsAudioDescriptionRemixSettingsChannelMapping>;
}

export function medialive_ChannelEncoderSettingsAudioDescriptionRemixSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "channelsIn", "", [], false, false),
    new DynamicUIProps(InputType.Number, "channelsOut", "", [], false, false),
    new DynamicUIProps(
      InputType.Array,
      "channelMappings",
      "",
      medialive_ChannelEncoderSettingsAudioDescriptionRemixSettingsChannelMapping_GetTypes(),
      true,
      false,
    ),
  ];
}
