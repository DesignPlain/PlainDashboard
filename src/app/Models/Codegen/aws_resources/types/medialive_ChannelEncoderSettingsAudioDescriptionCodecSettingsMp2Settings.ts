import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsMp2Settings {
  // Average bitrate in bits/second.
  bitrate?: number;

  // Mono, Stereo, or 5.1 channel layout.
  codingMode?: string;

  // Sample rate in Hz.
  sampleRate?: number;
}

export function medialive_ChannelEncoderSettingsAudioDescriptionCodecSettingsMp2Settings_GetTypes(): DynamicUIProps[] {
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
      "sampleRate",
      "Sample rate in Hz.",
      [],
      false,
      false,
    ),
  ];
}
