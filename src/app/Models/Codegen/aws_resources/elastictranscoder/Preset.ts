import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  elastictranscoder_PresetVideoWatermark,
  elastictranscoder_PresetVideoWatermark_GetTypes,
} from "../types/elastictranscoder_PresetVideoWatermark";
import {
  elastictranscoder_PresetAudio,
  elastictranscoder_PresetAudio_GetTypes,
} from "../types/elastictranscoder_PresetAudio";
import {
  elastictranscoder_PresetThumbnails,
  elastictranscoder_PresetThumbnails_GetTypes,
} from "../types/elastictranscoder_PresetThumbnails";
import {
  elastictranscoder_PresetVideo,
  elastictranscoder_PresetVideo_GetTypes,
} from "../types/elastictranscoder_PresetVideo";
import {
  elastictranscoder_PresetAudioCodecOptions,
  elastictranscoder_PresetAudioCodecOptions_GetTypes,
} from "../types/elastictranscoder_PresetAudioCodecOptions";

export interface PresetArgs {
  // Watermark parameters for the video parameters (documented below)
  videoWatermarks?: Array<elastictranscoder_PresetVideoWatermark>;

  // Audio parameters object (documented below).
  audio?: elastictranscoder_PresetAudio;

  // A description of the preset (maximum 255 characters)
  description?: string;

  // The name of the preset. (maximum 40 characters)
  name?: string;

  // Thumbnail parameters object (documented below)
  thumbnails?: elastictranscoder_PresetThumbnails;

  // Video parameters object (documented below)
  video?: elastictranscoder_PresetVideo;

  // Codec options for the audio parameters (documented below)
  audioCodecOptions?: elastictranscoder_PresetAudioCodecOptions;

  // The container type for the output file. Valid values are `flac`, `flv`, `fmp4`, `gif`, `mp3`, `mp4`, `mpg`, `mxf`, `oga`, `ogg`, `ts`, and `webm`.
  container?: string;

  //
  type?: string;

  // Codec options for the video parameters
  videoCodecOptions?: Map<string, string>;
}
export class Preset extends Resource {
  // Amazon Resource Name (ARN) of the Elastic Transcoder Preset.
  public arn?: string;

  // Audio parameters object (documented below).
  public audio?: elastictranscoder_PresetAudio;

  // The container type for the output file. Valid values are `flac`, `flv`, `fmp4`, `gif`, `mp3`, `mp4`, `mpg`, `mxf`, `oga`, `ogg`, `ts`, and `webm`.
  public container?: string;

  // The name of the preset. (maximum 40 characters)
  public name?: string;

  // Video parameters object (documented below)
  public video?: elastictranscoder_PresetVideo;

  // Codec options for the video parameters
  public videoCodecOptions?: Map<string, string>;

  // Codec options for the audio parameters (documented below)
  public audioCodecOptions?: elastictranscoder_PresetAudioCodecOptions;

  // A description of the preset (maximum 255 characters)
  public description?: string;

  // Thumbnail parameters object (documented below)
  public thumbnails?: elastictranscoder_PresetThumbnails;

  //
  public type?: string;

  // Watermark parameters for the video parameters (documented below)
  public videoWatermarks?: Array<elastictranscoder_PresetVideoWatermark>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "container",
        "The container type for the output file. Valid values are `flac`, `flv`, `fmp4`, `gif`, `mp3`, `mp4`, `mpg`, `mxf`, `oga`, `ogg`, `ts`, and `webm`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(InputType.String, "type", "", [], false, false),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description of the preset (maximum 255 characters)",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the preset. (maximum 40 characters)",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "thumbnails",
        "Thumbnail parameters object (documented below)",
        elastictranscoder_PresetThumbnails_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "video",
        "Video parameters object (documented below)",
        elastictranscoder_PresetVideo_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "audioCodecOptions",
        "Codec options for the audio parameters (documented below)",
        elastictranscoder_PresetAudioCodecOptions_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "videoWatermarks",
        "Watermark parameters for the video parameters (documented below)",
        elastictranscoder_PresetVideoWatermark_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "audio",
        "Audio parameters object (documented below).",
        elastictranscoder_PresetAudio_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "videoCodecOptions",
        "Codec options for the video parameters",
        InputType_Map_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
