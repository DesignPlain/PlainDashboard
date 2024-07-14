import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettings {
  // If upconvert, 608 data is both passed through via the “608 compatibility bytes” fields of the 708 wrapper as well as translated into 708. 708 data present in the source content will be discarded.
  convert608To708?: string;

  // Specifies the 608/708 channel number within the video track from which to extract captions. Unused for passthrough.
  source608ChannelNumber?: number;
}

export function medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "convert608To708",
      "If upconvert, 608 data is both passed through via the “608 compatibility bytes” fields of the 708 wrapper as well as translated into 708. 708 data present in the source content will be discarded.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "source608ChannelNumber",
      "Specifies the 608/708 channel number within the video track from which to extract captions. Unused for passthrough.",
      [],
      false,
      false,
    ),
  ];
}
