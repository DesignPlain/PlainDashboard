import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsFmp4HlsSettings {
  //
  audioRenditionSets?: string;

  //
  nielsenId3Behavior?: string;

  //
  timedMetadataBehavior?: string;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsHlsOutputSettingsHlsSettingsFmp4HlsSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "audioRenditionSets",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "nielsenId3Behavior",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timedMetadataBehavior",
      "",
      [],
      false,
      false,
    ),
  ];
}
