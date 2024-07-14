import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettings";

export interface medialive_ChannelEncoderSettingsOutputGroupOutput {
  // The names of the audio descriptions used as audio sources for the output.
  audioDescriptionNames?: Array<string>;

  // The names of the caption descriptions used as caption sources for the output.
  captionDescriptionNames?: Array<string>;

  // The name used to identify an output.
  outputName?: string;

  // Settings for output. See Output Settings for more details.
  outputSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettings;

  // The name of the video description used as video source for the output.
  videoDescriptionName?: string;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "outputName",
      "The name used to identify an output.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "outputSettings",
      "Settings for output. See Output Settings for more details.",
      medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettings_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "videoDescriptionName",
      "The name of the video description used as video source for the output.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "audioDescriptionNames",
      "The names of the audio descriptions used as audio sources for the output.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "captionDescriptionNames",
      "The names of the caption descriptions used as caption sources for the output.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
