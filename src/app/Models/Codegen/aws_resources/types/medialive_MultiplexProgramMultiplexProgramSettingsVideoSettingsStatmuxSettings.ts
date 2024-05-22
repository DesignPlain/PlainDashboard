import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface medialive_MultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings {
  // Maximum bitrate.
  maximumBitrate?: number;

  // Minimum bitrate.
  minimumBitrate?: number;

  // Priority value.
  priority?: number;
}

export function medialive_MultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maximumBitrate",
      "Maximum bitrate.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minimumBitrate",
      "Minimum bitrate.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "priority",
      "Priority value.",
      [],
      false,
      false,
    ),
  ];
}
