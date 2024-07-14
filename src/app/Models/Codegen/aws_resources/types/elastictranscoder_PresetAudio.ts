import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface elastictranscoder_PresetAudio {
  // The method of organizing audio channels and tracks. Use Audio:Channels to specify the number of channels in your output, and Audio:AudioPackingMode to specify the number of tracks and their relation to the channels. If you do not specify an Audio:AudioPackingMode, Elastic Transcoder uses SingleTrack.
  audioPackingMode?: string;

  // The bit rate of the audio stream in the output file, in kilobits/second. Enter an integer between 64 and 320, inclusive.
  bitRate?: string;

  // The number of audio channels in the output file
  channels?: string;

  // The audio codec for the output file. Valid values are `AAC`, `flac`, `mp2`, `mp3`, `pcm`, and `vorbis`.
  codec?: string;

  // The sample rate of the audio stream in the output file, in hertz. Valid values are: `auto`, `22050`, `32000`, `44100`, `48000`, `96000`
  sampleRate?: string;
}

export function elastictranscoder_PresetAudio_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bitRate",
      "The bit rate of the audio stream in the output file, in kilobits/second. Enter an integer between 64 and 320, inclusive.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "channels",
      "The number of audio channels in the output file",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "codec",
      "The audio codec for the output file. Valid values are `AAC`, `flac`, `mp2`, `mp3`, `pcm`, and `vorbis`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "sampleRate",
      "The sample rate of the audio stream in the output file, in hertz. Valid values are: `auto`, `22050`, `32000`, `44100`, `48000`, `96000`",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "audioPackingMode",
      "The method of organizing audio channels and tracks. Use Audio:Channels to specify the number of channels in your output, and Audio:AudioPackingMode to specify the number of tracks and their relation to the channels. If you do not specify an Audio:AudioPackingMode, Elastic Transcoder uses SingleTrack.",
      [],
      false,
      true,
    ),
  ];
}
