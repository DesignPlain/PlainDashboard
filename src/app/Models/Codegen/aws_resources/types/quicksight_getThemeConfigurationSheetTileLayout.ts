import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  quicksight_getThemeConfigurationSheetTileLayoutMargin,
  quicksight_getThemeConfigurationSheetTileLayoutMargin_GetTypes,
} from "./quicksight_getThemeConfigurationSheetTileLayoutMargin";
import {
  quicksight_getThemeConfigurationSheetTileLayoutGutter,
  quicksight_getThemeConfigurationSheetTileLayoutGutter_GetTypes,
} from "./quicksight_getThemeConfigurationSheetTileLayoutGutter";

export interface quicksight_getThemeConfigurationSheetTileLayout {
  // The margin settings that apply around the outside edge of sheets. See margin.
  margins?: Array<quicksight_getThemeConfigurationSheetTileLayoutMargin>;

  // The gutter settings that apply between tiles. See gutter.
  gutters?: Array<quicksight_getThemeConfigurationSheetTileLayoutGutter>;
}

export function quicksight_getThemeConfigurationSheetTileLayout_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "margins",
      "The margin settings that apply around the outside edge of sheets. See margin.",
      quicksight_getThemeConfigurationSheetTileLayoutMargin_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "gutters",
      "The gutter settings that apply between tiles. See gutter.",
      quicksight_getThemeConfigurationSheetTileLayoutGutter_GetTypes(),
      true,
      false,
    ),
  ];
}
