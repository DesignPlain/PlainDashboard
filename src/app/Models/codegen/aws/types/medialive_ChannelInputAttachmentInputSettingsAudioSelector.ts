import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettings,
  medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettings_GetTypes,
} from './medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettings';

export interface medialive_ChannelInputAttachmentInputSettingsAudioSelector {
  /*
Name of the Channel.

The following arguments are optional:
*/
  name?: string;

  //
  selectorSettings?: medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettings;
}

export function medialive_ChannelInputAttachmentInputSettingsAudioSelector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the Channel.\n\nThe following arguments are optional:',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'selectorSettings',
      '',
      () =>
        medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
