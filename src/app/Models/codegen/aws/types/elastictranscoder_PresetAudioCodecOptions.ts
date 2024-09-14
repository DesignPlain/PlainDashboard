import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface elastictranscoder_PresetAudioCodecOptions {
  // The bit depth of a sample is how many bits of information are included in the audio samples. Valid values are `16` and `24`. (FLAC/PCM Only)
  bitDepth?: string;

  // The order the bits of a PCM sample are stored in. The supported value is LittleEndian. (PCM Only)
  bitOrder?: string;

  // If you specified AAC for Audio:Codec, choose the AAC profile for the output file.
  profile?: string;

  // Whether audio samples are represented with negative and positive numbers (signed) or only positive numbers (unsigned). The supported value is Signed. (PCM Only)
  signed?: string;
}

export function elastictranscoder_PresetAudioCodecOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "profile",
      "If you specified AAC for Audio:Codec, choose the AAC profile for the output file.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "signed",
      "Whether audio samples are represented with negative and positive numbers (signed) or only positive numbers (unsigned). The supported value is Signed. (PCM Only)",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "bitDepth",
      "The bit depth of a sample is how many bits of information are included in the audio samples. Valid values are `16` and `24`. (FLAC/PCM Only)",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "bitOrder",
      "The order the bits of a PCM sample are stored in. The supported value is LittleEndian. (PCM Only)",
      () => [],
      false,
      true,
    ),
  ];
}
