import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface elastictranscoder_PresetThumbnails {
  // The maximum width of thumbnails, in pixels. If you specify auto, Elastic Transcoder uses 1920 (Full HD) as the default value. If you specify a numeric value, enter an even integer between 32 and 4096, inclusive.
  maxWidth?: string;

  // When you set PaddingPolicy to Pad, Elastic Transcoder might add black bars to the top and bottom and/or left and right sides of thumbnails to make the total size of the thumbnails match the values that you specified for thumbnail MaxWidth and MaxHeight settings.
  paddingPolicy?: string;

  // The width and height of thumbnail files in pixels, in the format WidthxHeight, where both values are even integers. The values cannot exceed the width and height that you specified in the Video:Resolution object. (To better control resolution and aspect ratio of thumbnails, we recommend that you use the thumbnail values `max_width`, `max_height`, `sizing_policy`, and `padding_policy` instead of `resolution` and `aspect_ratio`. The two groups of settings are mutually exclusive. Do not use them together)
  resolution?: string;

  // A value that controls scaling of thumbnails. Valid values are: `Fit`, `Fill`, `Stretch`, `Keep`, `ShrinkToFit`, and `ShrinkToFill`.
  sizingPolicy?: string;

  // The aspect ratio of thumbnails. The following values are valid: auto, 1:1, 4:3, 3:2, 16:9
  aspectRatio?: string;

  // The format of thumbnails, if any. Valid formats are jpg and png.
  format?: string;

  // The approximate number of seconds between thumbnails. The value must be an integer. The actual interval can vary by several seconds from one thumbnail to the next.
  interval?: string;

  // The maximum height of thumbnails, in pixels. If you specify auto, Elastic Transcoder uses 1080 (Full HD) as the default value. If you specify a numeric value, enter an even integer between 32 and 3072, inclusive.
  maxHeight?: string;
}

export function elastictranscoder_PresetThumbnails_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'maxWidth',
      'The maximum width of thumbnails, in pixels. If you specify auto, Elastic Transcoder uses 1920 (Full HD) as the default value. If you specify a numeric value, enter an even integer between 32 and 4096, inclusive.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'paddingPolicy',
      'When you set PaddingPolicy to Pad, Elastic Transcoder might add black bars to the top and bottom and/or left and right sides of thumbnails to make the total size of the thumbnails match the values that you specified for thumbnail MaxWidth and MaxHeight settings.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'resolution',
      'The width and height of thumbnail files in pixels, in the format WidthxHeight, where both values are even integers. The values cannot exceed the width and height that you specified in the Video:Resolution object. (To better control resolution and aspect ratio of thumbnails, we recommend that you use the thumbnail values `max_width`, `max_height`, `sizing_policy`, and `padding_policy` instead of `resolution` and `aspect_ratio`. The two groups of settings are mutually exclusive. Do not use them together)',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'sizingPolicy',
      'A value that controls scaling of thumbnails. Valid values are: `Fit`, `Fill`, `Stretch`, `Keep`, `ShrinkToFit`, and `ShrinkToFill`.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'aspectRatio',
      'The aspect ratio of thumbnails. The following values are valid: auto, 1:1, 4:3, 3:2, 16:9',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'format',
      'The format of thumbnails, if any. Valid formats are jpg and png.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'interval',
      'The approximate number of seconds between thumbnails. The value must be an integer. The actual interval can vary by several seconds from one thumbnail to the next.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'maxHeight',
      'The maximum height of thumbnails, in pixels. If you specify auto, Elastic Transcoder uses 1080 (Full HD) as the default value. If you specify a numeric value, enter an even integer between 32 and 3072, inclusive.',
      () => [],
      false,
      true,
    ),
  ];
}
