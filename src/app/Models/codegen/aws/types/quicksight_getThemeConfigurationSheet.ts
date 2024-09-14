import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  quicksight_getThemeConfigurationSheetTileLayout,
  quicksight_getThemeConfigurationSheetTileLayout_GetTypes,
} from "./quicksight_getThemeConfigurationSheetTileLayout";
import {
  quicksight_getThemeConfigurationSheetTile,
  quicksight_getThemeConfigurationSheetTile_GetTypes,
} from "./quicksight_getThemeConfigurationSheetTile";

export interface quicksight_getThemeConfigurationSheet {
  // The layout options for tiles. See tile_layout.
  tileLayouts?: Array<quicksight_getThemeConfigurationSheetTileLayout>;

  // The display options for tiles. See tile.
  tiles?: Array<quicksight_getThemeConfigurationSheetTile>;
}

export function quicksight_getThemeConfigurationSheet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "tileLayouts",
      "The layout options for tiles. See tile_layout.",
      () => quicksight_getThemeConfigurationSheetTileLayout_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tiles",
      "The display options for tiles. See tile.",
      () => quicksight_getThemeConfigurationSheetTile_GetTypes(),
      true,
      false,
    ),
  ];
}
