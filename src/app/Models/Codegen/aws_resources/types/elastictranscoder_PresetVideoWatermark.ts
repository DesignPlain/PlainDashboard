import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface elastictranscoder_PresetVideoWatermark {
  // The maximum height of the watermark.
  maxHeight?: string;

  // The maximum width of the watermark.
  maxWidth?: string;

  // A value that controls scaling of the watermark. Valid values are: `Fit`, `Stretch`, `ShrinkToFit`
  sizingPolicy?: string;

  // A value that determines how Elastic Transcoder interprets values that you specified for `video_watermarks.horizontal_offset`, `video_watermarks.vertical_offset`, `video_watermarks.max_width`, and `video_watermarks.max_height`. Valid values are `Content` and `Frame`.
  target?: string;

  // The amount by which you want the vertical position of the watermark to be offset from the position specified by `vertical_align`
  verticalOffset?: string;

  // The horizontal position of the watermark unless you specify a nonzero value for `horzontal_offset`.
  horizontalAlign?: string;

  // The amount by which you want the horizontal position of the watermark to be offset from the position specified by `horizontal_align`.
  horizontalOffset?: string;

  // A unique identifier for the settings for one watermark. The value of Id can be up to 40 characters long. You can specify settings for up to four watermarks.
  id?: string;

  // A percentage that indicates how much you want a watermark to obscure the video in the location where it appears.
  opacity?: string;

  // The vertical position of the watermark unless you specify a nonzero value for `vertical_align`. Valid values are `Top`, `Bottom`, `Center`.
  verticalAlign?: string;
}

export function elastictranscoder_PresetVideoWatermark_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "target",
      "A value that determines how Elastic Transcoder interprets values that you specified for `video_watermarks.horizontal_offset`, `video_watermarks.vertical_offset`, `video_watermarks.max_width`, and `video_watermarks.max_height`. Valid values are `Content` and `Frame`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "verticalOffset",
      "The amount by which you want the vertical position of the watermark to be offset from the position specified by `vertical_align`",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "opacity",
      "A percentage that indicates how much you want a watermark to obscure the video in the location where it appears.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "maxHeight",
      "The maximum height of the watermark.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "maxWidth",
      "The maximum width of the watermark.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "sizingPolicy",
      "A value that controls scaling of the watermark. Valid values are: `Fit`, `Stretch`, `ShrinkToFit`",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "horizontalAlign",
      "The horizontal position of the watermark unless you specify a nonzero value for `horzontal_offset`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "horizontalOffset",
      "The amount by which you want the horizontal position of the watermark to be offset from the position specified by `horizontal_align`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "A unique identifier for the settings for one watermark. The value of Id can be up to 40 characters long. You can specify settings for up to four watermarks.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "verticalAlign",
      "The vertical position of the watermark unless you specify a nonzero value for `vertical_align`. Valid values are `Top`, `Bottom`, `Center`.",
      [],
      false,
      true,
    ),
  ];
}
