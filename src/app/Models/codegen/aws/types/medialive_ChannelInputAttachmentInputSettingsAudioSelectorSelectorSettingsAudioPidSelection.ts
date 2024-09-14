import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioPidSelection {
  // Selects a specific PID from within a source.
  pid?: number;
}

export function medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioPidSelection_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "pid",
      "Selects a specific PID from within a source.",
      () => [],
      true,
      false,
    ),
  ];
}
