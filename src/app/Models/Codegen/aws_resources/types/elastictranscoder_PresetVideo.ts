import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface elastictranscoder_PresetVideo {
  // The display aspect ratio of the video in the output file. Valid values are: `auto`, `1:1`, `4:3`, `3:2`, `16:9`. (Note; to better control resolution and aspect ratio of output videos, we recommend that you use the values `max_width`, `max_height`, `sizing_policy`, `padding_policy`, and `display_aspect_ratio` instead of `resolution` and `aspect_ratio`.)
  aspectRatio?: string;

  // The value that Elastic Transcoder adds to the metadata in the output file. If you set DisplayAspectRatio to auto, Elastic Transcoder chooses an aspect ratio that ensures square pixels. If you specify another option, Elastic Transcoder sets that value in the output file.
  displayAspectRatio?: string;

  // Whether to use a fixed value for Video:FixedGOP. Not applicable for containers of type gif. Valid values are true and false. Also known as, Fixed Number of Frames Between Keyframes.
  fixedGop?: string;

  // If you specify auto for FrameRate, Elastic Transcoder uses the frame rate of the input video for the frame rate of the output video, up to the maximum frame rate. If you do not specify a MaxFrameRate, Elastic Transcoder will use a default of 30.
  maxFrameRate?: string;

  // The maximum height of the output video in pixels. If you specify auto, Elastic Transcoder uses 1080 (Full HD) as the default value. If you specify a numeric value, enter an even integer between 96 and 3072, inclusive.
  maxHeight?: string;

  // The maximum width of the output video in pixels. If you specify auto, Elastic Transcoder uses 1920 (Full HD) as the default value. If you specify a numeric value, enter an even integer between 128 and 4096, inclusive.
  maxWidth?: string;

  // When you set PaddingPolicy to Pad, Elastic Transcoder might add black bars to the top and bottom and/or left and right sides of the output video to make the total size of the output video match the values that you specified for `max_width` and `max_height`.
  paddingPolicy?: string;

  // A value that controls scaling of the output video. Valid values are: `Fit`, `Fill`, `Stretch`, `Keep`, `ShrinkToFit`, `ShrinkToFill`.
  sizingPolicy?: string;

  // The bit rate of the video stream in the output file, in kilobits/second. You can configure variable bit rate or constant bit rate encoding.
  bitRate?: string;

  // The video codec for the output file. Valid values are `gif`, `H.264`, `mpeg2`, `vp8`, and `vp9`.
  codec?: string;

  // The frames per second for the video stream in the output file. The following values are valid: `auto`, `10`, `15`, `23.97`, `24`, `25`, `29.97`, `30`, `50`, `60`.
  frameRate?: string;

  // The maximum number of frames between key frames. Not applicable for containers of type gif.
  keyframesMaxDist?: string;

  // The width and height of the video in the output file, in pixels. Valid values are `auto` and `widthxheight`. (see note for `aspect_ratio`)
  resolution?: string;
}

export function elastictranscoder_PresetVideo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "resolution",
      "The width and height of the video in the output file, in pixels. Valid values are `auto` and `widthxheight`. (see note for `aspect_ratio`)",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "aspectRatio",
      "The display aspect ratio of the video in the output file. Valid values are: `auto`, `1:1`, `4:3`, `3:2`, `16:9`. (Note; to better control resolution and aspect ratio of output videos, we recommend that you use the values `max_width`, `max_height`, `sizing_policy`, `padding_policy`, and `display_aspect_ratio` instead of `resolution` and `aspect_ratio`.)",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "maxWidth",
      "The maximum width of the output video in pixels. If you specify auto, Elastic Transcoder uses 1920 (Full HD) as the default value. If you specify a numeric value, enter an even integer between 128 and 4096, inclusive.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "sizingPolicy",
      "A value that controls scaling of the output video. Valid values are: `Fit`, `Fill`, `Stretch`, `Keep`, `ShrinkToFit`, `ShrinkToFill`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "bitRate",
      "The bit rate of the video stream in the output file, in kilobits/second. You can configure variable bit rate or constant bit rate encoding.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "frameRate",
      "The frames per second for the video stream in the output file. The following values are valid: `auto`, `10`, `15`, `23.97`, `24`, `25`, `29.97`, `30`, `50`, `60`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "codec",
      "The video codec for the output file. Valid values are `gif`, `H.264`, `mpeg2`, `vp8`, and `vp9`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "keyframesMaxDist",
      "The maximum number of frames between key frames. Not applicable for containers of type gif.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "displayAspectRatio",
      "The value that Elastic Transcoder adds to the metadata in the output file. If you set DisplayAspectRatio to auto, Elastic Transcoder chooses an aspect ratio that ensures square pixels. If you specify another option, Elastic Transcoder sets that value in the output file.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "fixedGop",
      "Whether to use a fixed value for Video:FixedGOP. Not applicable for containers of type gif. Valid values are true and false. Also known as, Fixed Number of Frames Between Keyframes.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "maxFrameRate",
      "If you specify auto for FrameRate, Elastic Transcoder uses the frame rate of the input video for the frame rate of the output video, up to the maximum frame rate. If you do not specify a MaxFrameRate, Elastic Transcoder will use a default of 30.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "maxHeight",
      "The maximum height of the output video in pixels. If you specify auto, Elastic Transcoder uses 1080 (Full HD) as the default value. If you specify a numeric value, enter an even integer between 96 and 3072, inclusive.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "paddingPolicy",
      "When you set PaddingPolicy to Pad, Elastic Transcoder might add black bars to the top and bottom and/or left and right sides of the output video to make the total size of the output video match the values that you specified for `max_width` and `max_height`.",
      [],
      false,
      true,
    ),
  ];
}
