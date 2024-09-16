import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  medialive_ChannelEncoderSettingsAvailBlankingAvailBlankingImage,
  medialive_ChannelEncoderSettingsAvailBlankingAvailBlankingImage_GetTypes,
} from './medialive_ChannelEncoderSettingsAvailBlankingAvailBlankingImage';

export interface medialive_ChannelEncoderSettingsAvailBlanking {
  // Blanking image to be used. See Avail Blanking Image for more details.
  availBlankingImage?: medialive_ChannelEncoderSettingsAvailBlankingAvailBlankingImage;

  // When set to enabled, causes video, audio and captions to be blanked when insertion metadata is added.
  state?: string;
}

export function medialive_ChannelEncoderSettingsAvailBlanking_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'availBlankingImage',
      'Blanking image to be used. See Avail Blanking Image for more details.',
      () =>
        medialive_ChannelEncoderSettingsAvailBlankingAvailBlankingImage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'state',
      'When set to enabled, causes video, audio and captions to be blanked when insertion metadata is added.',
      () => [],
      false,
      false,
    ),
  ];
}
