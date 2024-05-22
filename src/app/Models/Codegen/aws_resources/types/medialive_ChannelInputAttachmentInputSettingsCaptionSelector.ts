import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettings,
  medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettings_GetTypes,
} from "./medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettings";

export interface medialive_ChannelInputAttachmentInputSettingsCaptionSelector {
  // Selects a specific three-letter language code from within an audio source.
  languageCode?: string;

  /*
Name of the Channel.

The following arguments are optional:
*/
  name?: string;

  // The audio selector settings. See Audio Selector Settings for more details.
  selectorSettings?: medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettings;
}

export function medialive_ChannelInputAttachmentInputSettingsCaptionSelector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "languageCode",
      "Selects a specific three-letter language code from within an audio source.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the Channel.\n\nThe following arguments are optional:",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "selectorSettings",
      "The audio selector settings. See Audio Selector Settings for more details.",
      medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
