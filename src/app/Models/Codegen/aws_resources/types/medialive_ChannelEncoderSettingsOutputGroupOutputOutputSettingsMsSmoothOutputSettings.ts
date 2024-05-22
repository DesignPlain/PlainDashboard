import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsMsSmoothOutputSettings {
  //
  h265PackagingType?: string;

  // String concatenated to the end of the destination filename. Required for multiple outputs of the same type.
  nameModifier?: string;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsMsSmoothOutputSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "h265PackagingType",
      "",
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
