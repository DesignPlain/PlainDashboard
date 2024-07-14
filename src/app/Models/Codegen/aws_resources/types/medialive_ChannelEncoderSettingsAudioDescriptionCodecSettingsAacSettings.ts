import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsAacSettings {
  // Use MPEG-2 AAC audio instead of MPEG-4 AAC audio for raw or MPEG-2 Transport Stream containers.
  spec?: string;

  // VBR Quality Level - Only used if rateControlMode is VBR.
  vbrQuality?: string;

  // Average bitrate in bits/second.
  bitrate?: number;

  // Mono, Stereo, or 5.1 channel layout.
  codingMode?: string;

  // Set to "broadcasterMixedAd" when input contains pre-mixed main audio + AD (narration) as a stereo pair.
  inputType?: string;

  // The rate control mode.
  rateControlMode?: string;

  // Sets LATM/LOAS AAC output for raw containers.
  rawFormat?: string;

  // AAC profile.
  profile?: string;

  // Sample rate in Hz.
  sampleRate?: number;
}

export function medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsAacSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "codingMode",
      "Mono, Stereo, or 5.1 channel layout.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "inputType",
      'Set to "broadcasterMixedAd" when input contains pre-mixed main audio + AD (narration) as a stereo pair.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "rateControlMode",
      "The rate control mode.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "rawFormat",
      "Sets LATM/LOAS AAC output for raw containers.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "profile",
      "AAC profile.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "spec",
      "Use MPEG-2 AAC audio instead of MPEG-4 AAC audio for raw or MPEG-2 Transport Stream containers.",
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
      "vbrQuality",
      "VBR Quality Level - Only used if rateControlMode is VBR.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "sampleRate",
      "Sample rate in Hz.",
      [],
      false,
      false,
    ),
  ];
}
