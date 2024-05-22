import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSettingHlsBasicPutSettings {
  // Number of seconds to wait before retrying connection to the flash media server if the connection is lost.
  connectionRetryInterval?: number;

  //
  filecacheDuration?: number;

  // Number of retry attempts.
  numRetries?: number;

  // Number of seconds to wait until a restart is initiated.
  restartDelay?: number;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettingsHlsGroupSettingsHlsCdnSettingHlsBasicPutSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "numRetries",
      "Number of retry attempts.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "restartDelay",
      "Number of seconds to wait until a restart is initiated.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "connectionRetryInterval",
      "Number of seconds to wait before retrying connection to the flash media server if the connection is lost.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "filecacheDuration",
      "",
      [],
      false,
      false,
    ),
  ];
}
