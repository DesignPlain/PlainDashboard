import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  quicksight_getThemeConfigurationSheetTileBorder,
  quicksight_getThemeConfigurationSheetTileBorder_GetTypes,
} from './quicksight_getThemeConfigurationSheetTileBorder';

export interface quicksight_getThemeConfigurationSheetTile {
  // The border around a tile. See border.
  borders?: Array<quicksight_getThemeConfigurationSheetTileBorder>;
}

export function quicksight_getThemeConfigurationSheetTile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'borders',
      'The border around a tile. See border.',
      () => quicksight_getThemeConfigurationSheetTileBorder_GetTypes(),
      true,
      false,
    ),
  ];
}
