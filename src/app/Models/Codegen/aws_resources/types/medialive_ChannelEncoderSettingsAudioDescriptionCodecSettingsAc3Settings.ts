import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsAc3Settings {
  // When set to enabled, applies a 120Hz lowpass filter to the LFE channel prior to encoding.
  lfeFilter?: string;

  // Metadata control.
  metadataControl?: string;

  // Average bitrate in bits/second.
  bitrate?: number;

  // Specifies the bitstream mode (bsmod) for the emitted AC-3 stream.
  bitstreamMode?: string;

  // Mono, Stereo, or 5.1 channel layout.
  codingMode?: string;

  // Sets the dialnorm of the output.
  dialnorm?: number;

  // If set to filmStandard, adds dynamic range compression signaling to the output bitstream as defined in the Dolby Digital specification.
  drcProfile?: string;
}

export function medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsAc3Settings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "drcProfile",
      "If set to filmStandard, adds dynamic range compression signaling to the output bitstream as defined in the Dolby Digital specification.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lfeFilter",
      "When set to enabled, applies a 120Hz lowpass filter to the LFE channel prior to encoding.",
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
      "bitstreamMode",
      "Specifies the bitstream mode (bsmod) for the emitted AC-3 stream.",
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
  ];
}
