import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  quicksight_getThemeConfigurationSheetTile,
  quicksight_getThemeConfigurationSheetTile_GetTypes,
} from "./quicksight_getThemeConfigurationSheetTile";
import {
  quicksight_getThemeConfigurationSheetTileLayout,
  quicksight_getThemeConfigurationSheetTileLayout_GetTypes,
} from "./quicksight_getThemeConfigurationSheetTileLayout";

export interface quicksight_getThemeConfigurationSheet {
  // The display options for tiles. See tile.
  tiles?: Array<quicksight_getThemeConfigurationSheetTile>;

  // The layout options for tiles. See tile_layout.
  tileLayouts?: Array<quicksight_getThemeConfigurationSheetTileLayout>;
}

export function quicksight_getThemeConfigurationSheet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "tiles",
      "The display options for tiles. See tile.",
      quicksight_getThemeConfigurationSheetTile_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tileLayouts",
      "The layout options for tiles. See tile_layout.",
      quicksight_getThemeConfigurationSheetTileLayout_GetTypes(),
      true,
      false,
    ),
  ];
}
