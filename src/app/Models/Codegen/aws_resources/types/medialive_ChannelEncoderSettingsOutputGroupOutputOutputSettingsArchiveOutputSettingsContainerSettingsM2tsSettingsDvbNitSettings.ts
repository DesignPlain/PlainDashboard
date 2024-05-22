import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettingsDvbNitSettings {
  //
  networkId?: number;

  //
  networkName?: string;

  //
  repInterval?: number;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsArchiveOutputSettingsContainerSettingsM2tsSettingsDvbNitSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "repInterval", "", [], false, false),
    new DynamicUIProps(InputType.Number, "networkId", "", [], true, false),
    new DynamicUIProps(InputType.String, "networkName", "", [], true, false),
  ];
}
