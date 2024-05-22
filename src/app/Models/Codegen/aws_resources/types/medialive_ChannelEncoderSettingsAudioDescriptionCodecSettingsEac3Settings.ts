import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsEac3Settings {
  //
  loRoCenterMixLevel?: number;

  //
  ltRtSurroundMixLevel?: number;

  //
  surroundExMode?: string;

  // Specifies the bitstream mode (bsmod) for the emitted AC-3 stream.
  bitstreamMode?: string;

  // Sets the dialnorm of the output.
  dialnorm?: number;

  // Sets the profile for heavy Dolby dynamic range compression.
  drcRf?: string;

  //
  loRoSurroundMixLevel?: number;

  //
  ltRtCenterMixLevel?: number;

  //
  passthroughControl?: string;

  // Sets the Dolby dynamic range compression profile.
  drcLine?: string;

  // Metadata control.
  metadataControl?: string;

  //
  phaseControl?: string;

  // Sets the attenuation control.
  attenuationControl?: string;

  // Average bitrate in bits/second.
  bitrate?: number;

  //
  dcFilter?: string;

  //
  stereoDownmix?: string;

  //
  surroundMode?: string;

  // Mono, Stereo, or 5.1 channel layout.
  codingMode?: string;

  //
  lfeControl?: string;

  // When set to enabled, applies a 120Hz lowpass filter to the LFE channel prior to encoding.
  lfeFilter?: string;
}

export function medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsEac3Settings_GetTypes(): DynamicUIProps[] {
  return [
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
      "loRoCenterMixLevel",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bitstreamMode",
      "Specifies the bitstream mode (bsmod) for the emitted AC-3 stream.",
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
      "drcRf",
      "Sets the profile for heavy Dolby dynamic range compression.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "loRoSurroundMixLevel",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "attenuationControl",
      "Sets the attenuation control.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "lfeControl", "", [], false, false),
    new DynamicUIProps(
      InputType.Number,
      "ltRtSurroundMixLevel",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "passthroughControl",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "phaseControl", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "lfeFilter",
      "When set to enabled, applies a 120Hz lowpass filter to the LFE channel prior to encoding.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "surroundMode", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "surroundExMode",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ltRtCenterMixLevel",
      "",
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
    new DynamicUIProps(
      InputType.String,
      "metadataControl",
      "Metadata control.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "dcFilter", "", [], false, false),
    new DynamicUIProps(InputType.String, "stereoDownmix", "", [], false, false),
  ];
}
