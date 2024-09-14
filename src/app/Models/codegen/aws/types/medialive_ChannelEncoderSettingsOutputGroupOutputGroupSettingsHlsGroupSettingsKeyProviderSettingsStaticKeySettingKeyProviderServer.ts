import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingKeyProviderServer {
  //
  passwordParam?: string;

  //
  uri?: string;

  //
  username?: string;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingKeyProviderServer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "passwordParam",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "uri", "", () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      "username",
      "",
      () => [],
      false,
      false,
    ),
  ];
}
