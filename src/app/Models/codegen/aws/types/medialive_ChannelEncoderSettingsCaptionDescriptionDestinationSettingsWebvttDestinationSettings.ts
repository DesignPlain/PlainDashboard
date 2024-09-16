import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsWebvttDestinationSettings {
  // Controls whether the color and position of the source captions is passed through to the WebVTT output captions. PASSTHROUGH - Valid only if the source captions are EMBEDDED or TELETEXT. NO\_STYLE\_DATA - Don’t pass through the style. The output captions will not contain any font styling information.
  styleControl?: string;
}

export function medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsWebvttDestinationSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'styleControl',
      'Controls whether the color and position of the source captions is passed through to the WebVTT output captions. PASSTHROUGH - Valid only if the source captions are EMBEDDED or TELETEXT. NO\\_STYLE\\_DATA - Don’t pass through the style. The output captions will not contain any font styling information.',
      () => [],
      true,
      false,
    ),
  ];
}
