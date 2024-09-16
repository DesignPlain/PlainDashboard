import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettings {
  // If upconvert, 608 data is both passed through via the “608 compatibility bytes” fields of the 708 wrapper as well as translated into 708. 708 data present in the source content will be discarded.
  convert608To708?: string;

  // Set to “auto” to handle streams with intermittent and/or non-aligned SCTE-20 and Embedded captions.
  scte20Detection?: string;

  // Specifies the 608/708 channel number within the video track from which to extract captions. Unused for passthrough.
  source608ChannelNumber?: number;
}

export function medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'convert608To708',
      'If upconvert, 608 data is both passed through via the “608 compatibility bytes” fields of the 708 wrapper as well as translated into 708. 708 data present in the source content will be discarded.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'scte20Detection',
      'Set to “auto” to handle streams with intermittent and/or non-aligned SCTE-20 and Embedded captions.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'source608ChannelNumber',
      'Specifies the 608/708 channel number within the video track from which to extract captions. Unused for passthrough.',
      () => [],
      false,
      false,
    ),
  ];
}
