import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelection {
  // Selects a specific three-letter language code from within an audio source.
  languageCode?: string;

  // When set to “strict”, the transport stream demux strictly identifies audio streams by their language descriptor. If a PMT update occurs such that an audio stream matching the initially selected language is no longer present then mute will be encoded until the language returns. If “loose”, then on a PMT update the demux will choose another audio stream in the program with the same stream type if it can’t find one with the same language.
  languageSelectionPolicy?: string;
}

export function medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelection_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "languageCode",
      "Selects a specific three-letter language code from within an audio source.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "languageSelectionPolicy",
      "When set to “strict”, the transport stream demux strictly identifies audio streams by their language descriptor. If a PMT update occurs such that an audio stream matching the initially selected language is no longer present then mute will be encoded until the language returns. If “loose”, then on a PMT update the demux will choose another audio stream in the program with the same stream type if it can’t find one with the same language.",
      () => [],
      false,
      false,
    ),
  ];
}
