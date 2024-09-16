import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettings {
  //
  convert608To708?: string;

  //
  source608ChannelNumber?: number;
}

export function medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'convert608To708',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'source608ChannelNumber',
      '',
      () => [],
      false,
      false,
    ),
  ];
}
