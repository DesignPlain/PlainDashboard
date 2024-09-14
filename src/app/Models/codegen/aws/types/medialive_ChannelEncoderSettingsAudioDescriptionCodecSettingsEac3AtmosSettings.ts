import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsEac3AtmosSettings {
  // Sets the profile for heavy Dolby dynamic range compression.
  drcRf?: string;

  // Height dimensional trim.
  heightTrim?: number;

  // Surround dimensional trim.
  surroundTrim?: number;

  // Average bitrate in bits/second.
  bitrate?: number;

  // Dolby Digital Plus with Dolby Atmos coding mode.
  codingMode?: string;

  // Sets the dialnorm for the output.
  dialnorm?: number;

  // Sets the Dolby dynamic range compression profile.
  drcLine?: string;
}

export function medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsEac3AtmosSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "heightTrim",
      "Height dimensional trim.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "surroundTrim",
      "Surround dimensional trim.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "bitrate",
      "Average bitrate in bits/second.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "codingMode",
      "Dolby Digital Plus with Dolby Atmos coding mode.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "dialnorm",
      "Sets the dialnorm for the output.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "drcLine",
      "Sets the Dolby dynamic range compression profile.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "drcRf",
      "Sets the profile for heavy Dolby dynamic range compression.",
      () => [],
      false,
      false,
    ),
  ];
}
