import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangle {
  // See the description in left\_offset. For height, specify the entire height of the rectangle as a percentage of the underlying frame height. For example, "80" means the rectangle height is 80%!o(MISSING)f the underlying frame height. The top\_offset and rectangle\_height must add up to 100%!o(MISSING)r less. This field corresponds to tts:extent - Y in the TTML standard.
  height?: number;

  // Applies only if you plan to convert these source captions to EBU-TT-D or TTML in an output. (Make sure to leave the default if you don’t have either of these formats in the output.) You can define a display rectangle for the captions that is smaller than the underlying video frame. You define the rectangle by specifying the position of the left edge, top edge, bottom edge, and right edge of the rectangle, all within the underlying video frame. The units for the measurements are percentages. If you specify a value for one of these fields, you must specify a value for all of them. For leftOffset, specify the position of the left edge of the rectangle, as a percentage of the underlying frame width, and relative to the left edge of the frame. For example, "10" means the measurement is 10%!o(MISSING)f the underlying frame width. The rectangle left edge starts at that position from the left edge of the frame. This field corresponds to tts:origin - X in the TTML standard.
  leftOffset?: number;

  // See the description in left\_offset. For top\_offset, specify the position of the top edge of the rectangle, as a percentage of the underlying frame height, and relative to the top edge of the frame. For example, "10" means the measurement is 10%!o(MISSING)f the underlying frame height. The rectangle top edge starts at that position from the top edge of the frame. This field corresponds to tts:origin - Y in the TTML standard.
  topOffset?: number;

  // See the description in left\_offset. For width, specify the entire width of the rectangle as a percentage of the underlying frame width. For example, "80" means the rectangle width is 80%!o(MISSING)f the underlying frame width. The left\_offset and rectangle\_width must add up to 100%!o(MISSING)r less. This field corresponds to tts:extent - X in the TTML standard.
  width?: number;
}

export function medialive_ChannelInputAttachmentInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangle_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "width",
      'See the description in left\\_offset. For width, specify the entire width of the rectangle as a percentage of the underlying frame width. For example, "80" means the rectangle width is 80% of the underlying frame width. The left\\_offset and rectangle\\_width must add up to 100% or less. This field corresponds to tts:extent - X in the TTML standard.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "height",
      'See the description in left\\_offset. For height, specify the entire height of the rectangle as a percentage of the underlying frame height. For example, "80" means the rectangle height is 80% of the underlying frame height. The top\\_offset and rectangle\\_height must add up to 100% or less. This field corresponds to tts:extent - Y in the TTML standard.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "leftOffset",
      'Applies only if you plan to convert these source captions to EBU-TT-D or TTML in an output. (Make sure to leave the default if you don’t have either of these formats in the output.) You can define a display rectangle for the captions that is smaller than the underlying video frame. You define the rectangle by specifying the position of the left edge, top edge, bottom edge, and right edge of the rectangle, all within the underlying video frame. The units for the measurements are percentages. If you specify a value for one of these fields, you must specify a value for all of them. For leftOffset, specify the position of the left edge of the rectangle, as a percentage of the underlying frame width, and relative to the left edge of the frame. For example, "10" means the measurement is 10% of the underlying frame width. The rectangle left edge starts at that position from the left edge of the frame. This field corresponds to tts:origin - X in the TTML standard.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "topOffset",
      'See the description in left\\_offset. For top\\_offset, specify the position of the top edge of the rectangle, as a percentage of the underlying frame height, and relative to the top edge of the frame. For example, "10" means the measurement is 10% of the underlying frame height. The rectangle top edge starts at that position from the top edge of the frame. This field corresponds to tts:origin - Y in the TTML standard.',
      [],
      true,
      false,
    ),
  ];
}
