import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioPidSelection,
  medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioPidSelection_GetTypes,
} from './medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioPidSelection';
import {
  medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioTrackSelection,
  medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioTrackSelection_GetTypes,
} from './medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioTrackSelection';
import {
  medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelection,
  medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelection_GetTypes,
} from './medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelection';
import {
  medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelection,
  medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelection_GetTypes,
} from './medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelection';

export interface medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettings {
  // Audio Pid Selection. See Audio PID Selection for more details.
  audioPidSelection?: medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioPidSelection;

  // Audio Track Selection. See Audio Track Selection for more details.
  audioTrackSelection?: medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioTrackSelection;

  // Audio HLS Rendition Selection. See Audio HLS Rendition Selection for more details.
  audioHlsRenditionSelection?: medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelection;

  // Audio Language Selection. See Audio Language Selection for more details.
  audioLanguageSelection?: medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelection;
}

export function medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'audioTrackSelection',
      'Audio Track Selection. See Audio Track Selection for more details.',
      () =>
        medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioTrackSelection_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'audioHlsRenditionSelection',
      'Audio HLS Rendition Selection. See Audio HLS Rendition Selection for more details.',
      () =>
        medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelection_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'audioLanguageSelection',
      'Audio Language Selection. See Audio Language Selection for more details.',
      () =>
        medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelection_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'audioPidSelection',
      'Audio Pid Selection. See Audio PID Selection for more details.',
      () =>
        medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioPidSelection_GetTypes(),
      false,
      false,
    ),
  ];
}
