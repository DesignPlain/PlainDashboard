import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  medialive_ChannelEncoderSettingsVideoDescriptionCodecSettings,
  medialive_ChannelEncoderSettingsVideoDescriptionCodecSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsVideoDescriptionCodecSettings";

export interface medialive_ChannelEncoderSettingsVideoDescription {
  // Indicate how to respond to the AFD values that might be in the input video.
  respondToAfd?: string;

  // Behavior on how to scale.
  scalingBehavior?: string;

  // Changes the strength of the anti-alias filter used for scaling.
  sharpness?: number;

  // Output video width in pixels.
  width?: number;

  // The video codec settings. See Video Codec Settings for more details.
  codecSettings?: medialive_ChannelEncoderSettingsVideoDescriptionCodecSettings;

  // Output video height in pixels.
  height?: number;

  // The name of the video description.
  name?: string;
}

export function medialive_ChannelEncoderSettingsVideoDescription_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "sharpness",
      "Changes the strength of the anti-alias filter used for scaling.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "width",
      "Output video width in pixels.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "codecSettings",
      "The video codec settings. See Video Codec Settings for more details.",
      medialive_ChannelEncoderSettingsVideoDescriptionCodecSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "height",
      "Output video height in pixels.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the video description.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "respondToAfd",
      "Indicate how to respond to the AFD values that might be in the input video.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "scalingBehavior",
      "Behavior on how to scale.",
      [],
      false,
      false,
    ),
  ];
}
