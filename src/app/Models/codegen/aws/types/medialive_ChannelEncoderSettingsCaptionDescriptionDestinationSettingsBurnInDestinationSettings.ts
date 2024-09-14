import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsBurnInDestinationSettingsFont,
  medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsBurnInDestinationSettingsFont_GetTypes,
} from "./medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsBurnInDestinationSettingsFont";

export interface medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsBurnInDestinationSettings {
  // Specifies the color of the rectangle behind the captions. All burn-in and DVB-Sub font settings must match.
  backgroundColor?: string;

  // Specifies the opacity of the burned-in captions. 255 is opaque; 0 is transparent. All burn-in and DVB-Sub font settings must match.
  fontOpacity?: number;

  // Specifies the opacity of the shadow. 255 is opaque; 0 is transparent. Leaving this parameter out is equivalent to setting it to 0 (transparent). All burn-in and DVB-Sub font settings must match.
  shadowOpacity?: number;

  // Font resolution in DPI (dots per inch); default is 96 dpi. All burn-in and DVB-Sub font settings must match.
  fontResolution?: number;

  // Specifies font outline color. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
  outlineColor?: string;

  // Specifies the color of the shadow cast by the captions. All burn-in and DVB-Sub font settings must match.
  shadowColor?: string;

  // Controls whether a fixed grid size will be used to generate the output subtitles bitmap. Only applicable for Teletext inputs and DVB-Sub/Burn-in outputs.
  teletextGridControl?: string;

  // Specifies the vertical position of the caption relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit yPosition is provided, the caption will be positioned towards the bottom of the output. All burn-in and DVB-Sub font settings must match.
  yPosition?: number;

  // When set to ‘auto’ fontSize will scale depending on the size of the output. Giving a positive integer will specify the exact font size in points. All burn-in and DVB-Sub font settings must match.
  fontSize?: string;

  // Specifies font outline size in pixels. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
  outlineSize?: number;

  // Specifies the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text. All burn-in and DVB-Sub font settings must match.
  shadowYOffset?: number;

  // Specifies the horizontal position of the caption relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit xPosition is provided, the horizontal caption position will be determined by the alignment parameter. All burn-in and DVB-Sub font settings must match.
  xPosition?: number;

  // Specifies the horizontal offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left. All burn-in and DVB-Sub font settings must match.
  shadowXOffset?: number;

  // If no explicit xPosition or yPosition is provided, setting alignment to centered will place the captions at the bottom center of the output. Similarly, setting a left alignment will align captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. Selecting “smart” justification will left-justify live subtitles and center-justify pre-recorded subtitles. All burn-in and DVB-Sub font settings must match.
  alignment?: string;

  // Specifies the opacity of the background rectangle. 255 is opaque; 0 is transparent. Leaving this parameter out is equivalent to setting it to 0 (transparent). All burn-in and DVB-Sub font settings must match.
  backgroundOpacity?: number;

  // External font file used for caption burn-in. File extension must be ‘ttf’ or ‘tte’. Although the user can select output fonts for many different types of input captions, embedded, STL and teletext sources use a strict grid system. Using external fonts with these caption sources could cause unexpected display of proportional fonts. All burn-in and DVB-Sub font settings must match. See Font for more details.
  font?: medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsBurnInDestinationSettingsFont;

  // Specifies the color of the burned-in captions. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
  fontColor?: string;
}

export function medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsBurnInDestinationSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "yPosition",
      "Specifies the vertical position of the caption relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit yPosition is provided, the caption will be positioned towards the bottom of the output. All burn-in and DVB-Sub font settings must match.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "fontSize",
      "When set to ‘auto’ fontSize will scale depending on the size of the output. Giving a positive integer will specify the exact font size in points. All burn-in and DVB-Sub font settings must match.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "alignment",
      "If no explicit xPosition or yPosition is provided, setting alignment to centered will place the captions at the bottom center of the output. Similarly, setting a left alignment will align captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. Selecting “smart” justification will left-justify live subtitles and center-justify pre-recorded subtitles. All burn-in and DVB-Sub font settings must match.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "shadowOpacity",
      "Specifies the opacity of the shadow. 255 is opaque; 0 is transparent. Leaving this parameter out is equivalent to setting it to 0 (transparent). All burn-in and DVB-Sub font settings must match.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "fontResolution",
      "Font resolution in DPI (dots per inch); default is 96 dpi. All burn-in and DVB-Sub font settings must match.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "shadowXOffset",
      "Specifies the horizontal offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left. All burn-in and DVB-Sub font settings must match.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "backgroundColor",
      "Specifies the color of the rectangle behind the captions. All burn-in and DVB-Sub font settings must match.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "fontOpacity",
      "Specifies the opacity of the burned-in captions. 255 is opaque; 0 is transparent. All burn-in and DVB-Sub font settings must match.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "outlineColor",
      "Specifies font outline color. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "shadowColor",
      "Specifies the color of the shadow cast by the captions. All burn-in and DVB-Sub font settings must match.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "xPosition",
      "Specifies the horizontal position of the caption relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit xPosition is provided, the horizontal caption position will be determined by the alignment parameter. All burn-in and DVB-Sub font settings must match.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "fontColor",
      "Specifies the color of the burned-in captions. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "teletextGridControl",
      "Controls whether a fixed grid size will be used to generate the output subtitles bitmap. Only applicable for Teletext inputs and DVB-Sub/Burn-in outputs.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "outlineSize",
      "Specifies font outline size in pixels. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "shadowYOffset",
      "Specifies the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text. All burn-in and DVB-Sub font settings must match.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "backgroundOpacity",
      "Specifies the opacity of the background rectangle. 255 is opaque; 0 is transparent. Leaving this parameter out is equivalent to setting it to 0 (transparent). All burn-in and DVB-Sub font settings must match.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "font",
      "External font file used for caption burn-in. File extension must be ‘ttf’ or ‘tte’. Although the user can select output fonts for many different types of input captions, embedded, STL and teletext sources use a strict grid system. Using external fonts with these caption sources could cause unexpected display of proportional fonts. All burn-in and DVB-Sub font settings must match. See Font for more details.",
      () =>
        medialive_ChannelEncoderSettingsCaptionDescriptionDestinationSettingsBurnInDestinationSettingsFont_GetTypes(),
      false,
      false,
    ),
  ];
}
