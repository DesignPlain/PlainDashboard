import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface medialive_ChannelEncoderSettingsAudioDescriptionAudioNormalizationSettings {
  // Audio normalization algorithm to use. itu17701 conforms to the CALM Act specification, itu17702 to the EBU R-128 specification.
  algorithm?: string;

  // Algorithm control for the audio description.
  algorithmControl?: string;

  // Target LKFS (loudness) to adjust volume to.
  targetLkfs?: number;
}

export function medialive_ChannelEncoderSettingsAudioDescriptionAudioNormalizationSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "algorithm",
      "Audio normalization algorithm to use. itu17701 conforms to the CALM Act specification, itu17702 to the EBU R-128 specification.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "algorithmControl",
      "Algorithm control for the audio description.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "targetLkfs",
      "Target LKFS (loudness) to adjust volume to.",
      [],
      false,
      false,
    ),
  ];
}
