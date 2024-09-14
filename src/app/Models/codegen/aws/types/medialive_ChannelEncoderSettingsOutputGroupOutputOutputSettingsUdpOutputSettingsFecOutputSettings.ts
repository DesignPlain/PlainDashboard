import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsFecOutputSettings {
  // The height of the FEC protection matrix.
  columnDepth?: number;

  // Enables column only or column and row based FEC.
  includeFec?: string;

  // The width of the FEC protection matrix.
  rowLength?: number;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsFecOutputSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "columnDepth",
      "The height of the FEC protection matrix.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "includeFec",
      "Enables column only or column and row based FEC.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "rowLength",
      "The width of the FEC protection matrix.",
      () => [],
      false,
      false,
    ),
  ];
}
