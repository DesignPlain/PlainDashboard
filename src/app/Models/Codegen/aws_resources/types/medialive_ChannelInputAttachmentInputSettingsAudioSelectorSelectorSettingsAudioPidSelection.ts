import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

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
      [],
      true,
      false,
    ),
  ];
}
