import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  quicksight_ThemeConfigurationSheetTile,
  quicksight_ThemeConfigurationSheetTile_GetTypes,
} from './quicksight_ThemeConfigurationSheetTile';
import {
  quicksight_ThemeConfigurationSheetTileLayout,
  quicksight_ThemeConfigurationSheetTileLayout_GetTypes,
} from './quicksight_ThemeConfigurationSheetTileLayout';

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
      'tile',
      'The display options for tiles. See tile.',
      () => quicksight_ThemeConfigurationSheetTile_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'tileLayout',
      'The layout options for tiles. See tile_layout.',
      () => quicksight_ThemeConfigurationSheetTileLayout_GetTypes(),
      false,
      false,
    ),
  ];
}
