import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsFrameCaptureOutputSettings {
  // String concatenated to the end of the destination filename. Required for multiple outputs of the same type.
  nameModifier?: string;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsFrameCaptureOutputSettings_GetTypes(): DynamicUIProps[] {
  return [
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
