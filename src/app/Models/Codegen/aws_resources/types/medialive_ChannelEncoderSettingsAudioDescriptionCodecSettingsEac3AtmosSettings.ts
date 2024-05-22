import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsEac3AtmosSettings {
  // Average bitrate in bits/second.
  bitrate?: number;

  // Mono, Stereo, or 5.1 channel layout.
  codingMode?: string;

  // Sets the dialnorm of the output.
  dialnorm?: number;

  // Sets the Dolby dynamic range compression profile.
  drcLine?: string;

  // Sets the profile for heavy Dolby dynamic range compression.
  drcRf?: string;

  // Height dimensional trim.
  heightTrim?: number;

  // Surround dimensional trim.
  surroundTrim?: number;
}

export function medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsEac3AtmosSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "drcRf",
      "Sets the profile for heavy Dolby dynamic range compression.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "heightTrim",
      "Height dimensional trim.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "surroundTrim",
      "Surround dimensional trim.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "bitrate",
      "Average bitrate in bits/second.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "codingMode",
      "Mono, Stereo, or 5.1 channel layout.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "dialnorm",
      "Sets the dialnorm of the output.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "drcLine",
      "Sets the Dolby dynamic range compression profile.",
      [],
      false,
      false,
    ),
  ];
}
