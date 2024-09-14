import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  quicksight_getThemeConfigurationSheet,
  quicksight_getThemeConfigurationSheet_GetTypes,
} from "./quicksight_getThemeConfigurationSheet";
import {
  quicksight_getThemeConfigurationTypography,
  quicksight_getThemeConfigurationTypography_GetTypes,
} from "./quicksight_getThemeConfigurationTypography";
import {
  quicksight_getThemeConfigurationUiColorPalette,
  quicksight_getThemeConfigurationUiColorPalette_GetTypes,
} from "./quicksight_getThemeConfigurationUiColorPalette";
import {
  quicksight_getThemeConfigurationDataColorPalette,
  quicksight_getThemeConfigurationDataColorPalette_GetTypes,
} from "./quicksight_getThemeConfigurationDataColorPalette";

export interface quicksight_getThemeConfiguration {
  // Display options related to sheets. See sheet.
  sheets?: Array<quicksight_getThemeConfigurationSheet>;

  // Determines the typography options. See typography.
  typographies?: Array<quicksight_getThemeConfigurationTypography>;

  // Color properties that apply to the UI and to charts, excluding the colors that apply to data. See ui_color_palette.
  uiColorPalettes?: Array<quicksight_getThemeConfigurationUiColorPalette>;

  // Color properties that apply to chart data colors. See data_color_palette.
  dataColorPalettes?: Array<quicksight_getThemeConfigurationDataColorPalette>;
}

export function quicksight_getThemeConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "sheets",
      "Display options related to sheets. See sheet.",
      () => quicksight_getThemeConfigurationSheet_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "typographies",
      "Determines the typography options. See typography.",
      () => quicksight_getThemeConfigurationTypography_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "uiColorPalettes",
      "Color properties that apply to the UI and to charts, excluding the colors that apply to data. See ui_color_palette.",
      () => quicksight_getThemeConfigurationUiColorPalette_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dataColorPalettes",
      "Color properties that apply to chart data colors. See data_color_palette.",
      () => quicksight_getThemeConfigurationDataColorPalette_GetTypes(),
      true,
      false,
    ),
  ];
}
