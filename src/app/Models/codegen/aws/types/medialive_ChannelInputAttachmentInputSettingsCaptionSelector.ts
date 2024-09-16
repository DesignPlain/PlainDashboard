import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettings,
  medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettings_GetTypes,
} from './medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettings';

export interface medialive_ChannelInputAttachmentInputSettingsCaptionSelector {
  //
  languageCode?: string;

  /*
Name of the Channel.

The following arguments are optional:
*/
  name?: string;

  //
  selectorSettings?: medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettings;
}

export function medialive_ChannelInputAttachmentInputSettingsCaptionSelector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'languageCode',
      '',
      () => [],
      false,
      false,
    ),
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
        medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
