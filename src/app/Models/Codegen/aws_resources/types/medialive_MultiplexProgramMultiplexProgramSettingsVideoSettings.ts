import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  medialive_MultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings,
  medialive_MultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings_GetTypes,
} from "./medialive_MultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings";

export interface medialive_MultiplexProgramMultiplexProgramSettingsVideoSettings {
  // Constant bitrate value.
  constantBitrate?: number;

  // Statmux settings. See Statmux Settings for more details.
  statmuxSettings?: medialive_MultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings;
}

export function medialive_MultiplexProgramMultiplexProgramSettingsVideoSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "constantBitrate",
      "Constant bitrate value.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "statmuxSettings",
      "Statmux settings. See Statmux Settings for more details.",
      medialive_MultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
