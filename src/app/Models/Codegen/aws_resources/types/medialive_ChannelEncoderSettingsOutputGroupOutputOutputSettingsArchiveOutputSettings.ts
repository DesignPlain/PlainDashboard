import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettings";

export interface medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettings {
  // Settings specific to the container type of the file. See Container Settings for more details.
  containerSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettings;

  // Output file extension.
  extension?: string;

  // String concatenated to the end of the destination filename. Required for multiple outputs of the same type.
  nameModifier?: string;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "containerSettings",
      "Settings specific to the container type of the file. See Container Settings for more details.",
      medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "extension",
      "Output file extension.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "nameModifier",
      "String concatenated to the end of the destination filename. Required for multiple outputs of the same type.",
      [],
      false,
      false,
    ),
  ];
}
