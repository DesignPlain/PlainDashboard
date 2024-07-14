import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  quicksight_getThemeConfigurationTypographyFontFamily,
  quicksight_getThemeConfigurationTypographyFontFamily_GetTypes,
} from "./quicksight_getThemeConfigurationTypographyFontFamily";

export interface quicksight_getThemeConfigurationTypography {
  // Determines the list of font families. Maximum number of 5 items. See font_families.
  fontFamilies?: Array<quicksight_getThemeConfigurationTypographyFontFamily>;
}

export function quicksight_getThemeConfigurationTypography_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "fontFamilies",
      "Determines the list of font families. Maximum number of 5 items. See font_families.",
      quicksight_getThemeConfigurationTypographyFontFamily_GetTypes(),
      true,
      false,
    ),
  ];
}
