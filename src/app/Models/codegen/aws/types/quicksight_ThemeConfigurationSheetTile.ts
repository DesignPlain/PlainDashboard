import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  quicksight_ThemeConfigurationSheetTileBorder,
  quicksight_ThemeConfigurationSheetTileBorder_GetTypes,
} from './quicksight_ThemeConfigurationSheetTileBorder';

export interface quicksight_ThemeConfigurationSheetTile {
  // The border around a tile. See border.
  border?: quicksight_ThemeConfigurationSheetTileBorder;
}

export function quicksight_ThemeConfigurationSheetTile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'border',
      'The border around a tile. See border.',
      () => quicksight_ThemeConfigurationSheetTileBorder_GetTypes(),
      false,
      false,
    ),
  ];
}
