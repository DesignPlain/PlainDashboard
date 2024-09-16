import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface medialive_ChannelInputAttachmentInputSettingsVideoSelector {
  //
  colorSpace?: string;

  //
  colorSpaceUsage?: string;
}

export function medialive_ChannelInputAttachmentInputSettingsVideoSelector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'colorSpace',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'colorSpaceUsage',
      '',
      () => [],
      false,
      false,
    ),
  ];
}
