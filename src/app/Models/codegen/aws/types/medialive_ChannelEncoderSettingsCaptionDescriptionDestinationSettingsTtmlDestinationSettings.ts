import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsTtmlDestinationSettings {
  // This field is not currently supported and will not affect the output styling. Leave the default value.
  styleControl?: string;
}

export function medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsTtmlDestinationSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'styleControl',
      'This field is not currently supported and will not affect the output styling. Leave the default value.',
      () => [],
      true,
      false,
    ),
  ];
}
