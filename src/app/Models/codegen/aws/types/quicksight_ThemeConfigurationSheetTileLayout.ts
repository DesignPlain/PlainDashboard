import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  quicksight_ThemeConfigurationSheetTileLayoutGutter,
  quicksight_ThemeConfigurationSheetTileLayoutGutter_GetTypes,
} from "./quicksight_ThemeConfigurationSheetTileLayoutGutter";
import {
  quicksight_ThemeConfigurationSheetTileLayoutMargin,
  quicksight_ThemeConfigurationSheetTileLayoutMargin_GetTypes,
} from "./quicksight_ThemeConfigurationSheetTileLayoutMargin";

export interface quicksight_ThemeConfigurationSheetTileLayout {
  // The gutter settings that apply between tiles. See gutter.
  gutter?: quicksight_ThemeConfigurationSheetTileLayoutGutter;

  // The margin settings that apply around the outside edge of sheets. See margin.
  margin?: quicksight_ThemeConfigurationSheetTileLayoutMargin;
}

export function quicksight_ThemeConfigurationSheetTileLayout_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "gutter",
      "The gutter settings that apply between tiles. See gutter.",
      () => quicksight_ThemeConfigurationSheetTileLayoutGutter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "margin",
      "The margin settings that apply around the outside edge of sheets. See margin.",
      () => quicksight_ThemeConfigurationSheetTileLayoutMargin_GetTypes(),
      false,
      false,
    ),
  ];
}
