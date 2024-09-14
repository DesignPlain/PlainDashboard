import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangle,
  medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangle_GetTypes,
} from "./medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangle";

export interface medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettings {
  // Optionally defines a region where TTML style captions will be displayed. See Caption Rectangle for more details.
  outputRectangle?: medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangle;

  // Specifies the teletext page number within the data stream from which to extract captions. Range of 0x100 (256) to 0x8FF (2303). Unused for passthrough. Should be specified as a hexadecimal string with no “0x” prefix.
  pageNumber?: string;
}

export function medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "outputRectangle",
      "Optionally defines a region where TTML style captions will be displayed. See Caption Rectangle for more details.",
      () =>
        medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangle_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "pageNumber",
      "Specifies the teletext page number within the data stream from which to extract captions. Range of 0x100 (256) to 0x8FF (2303). Unused for passthrough. Should be specified as a hexadecimal string with no “0x” prefix.",
      () => [],
      false,
      false,
    ),
  ];
}
