import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface medialive_ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettings {
  // The amount of time (in milliseconds) that the active input must be silent before automatic input failover occurs. Silence is defined as audio loss or audio quieter than -50 dBFS.
  audioSilenceThresholdMsec?: number;

  // The name of the audio selector used as the source for this AudioDescription.
  audioSelectorName?: string;
}

export function medialive_ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "audioSilenceThresholdMsec",
      "The amount of time (in milliseconds) that the active input must be silent before automatic input failover occurs. Silence is defined as audio loss or audio quieter than -50 dBFS.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "audioSelectorName",
      "The name of the audio selector used as the source for this AudioDescription.",
      [],
      true,
      false,
    ),
  ];
}
