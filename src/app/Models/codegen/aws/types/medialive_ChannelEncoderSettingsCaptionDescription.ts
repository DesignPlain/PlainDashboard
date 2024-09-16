import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettings,
  medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettings_GetTypes,
} from './medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettings';

export interface medialive_ChannelEncoderSettingsCaptionDescription {
  // Human readable information to indicate captions available for players (eg. English, or Spanish).
  languageDescription?: string;

  // Name of the caption description. Used to associate a caption description with an output. Names must be unique within an event.
  name?: string;

  // Indicates whether the caption track implements accessibility features such as written descriptions of spoken dialog, music, and sounds.
  accessibility?: string;

  // Specifies which input caption selector to use as a caption source when generating output captions. This field should match a captionSelector name.
  captionSelectorName?: string;

  // Additional settings for captions destination that depend on the destination type. See Destination Settings for more details.
  destinationSettings?: medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettings;

  // ISO 639-2 three-digit code.
  languageCode?: string;
}

export function medialive_ChannelEncoderSettingsCaptionDescription_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'languageDescription',
      'Human readable information to indicate captions available for players (eg. English, or Spanish).',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the caption description. Used to associate a caption description with an output. Names must be unique within an event.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'accessibility',
      'Indicates whether the caption track implements accessibility features such as written descriptions of spoken dialog, music, and sounds.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'captionSelectorName',
      'Specifies which input caption selector to use as a caption source when generating output captions. This field should match a captionSelector name.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'destinationSettings',
      'Additional settings for captions destination that depend on the destination type. See Destination Settings for more details.',
      () =>
        medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'languageCode',
      'ISO 639-2 three-digit code.',
      () => [],
      false,
      false,
    ),
  ];
}
