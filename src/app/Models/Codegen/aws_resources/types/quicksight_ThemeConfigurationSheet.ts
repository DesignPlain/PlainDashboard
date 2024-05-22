import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  quicksight_ThemeConfigurationSheetTileLayout,
  quicksight_ThemeConfigurationSheetTileLayout_GetTypes,
} from "./quicksight_ThemeConfigurationSheetTileLayout";
import {
  quicksight_ThemeConfigurationSheetTile,
  quicksight_ThemeConfigurationSheetTile_GetTypes,
} from "./quicksight_ThemeConfigurationSheetTile";

export interface quicksight_ThemeConfigurationSheet {
  // The display options for tiles. See tile.
  tile?: quicksight_ThemeConfigurationSheetTile;

  // The layout options for tiles. See tile_layout.
  tileLayout?: quicksight_ThemeConfigurationSheetTileLayout;
}

export function quicksight_ThemeConfigurationSheet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "tile",
      "The display options for tiles. See tile.",
      quicksight_ThemeConfigurationSheetTile_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "tileLayout",
      "The layout options for tiles. See tile_layout.",
      quicksight_ThemeConfigurationSheetTileLayout_GetTypes(),
      false,
      false,
    ),
  ];
}
