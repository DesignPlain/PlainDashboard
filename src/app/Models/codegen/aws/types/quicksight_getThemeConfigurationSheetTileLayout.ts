import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  quicksight_getThemeConfigurationSheetTileLayoutGutter,
  quicksight_getThemeConfigurationSheetTileLayoutGutter_GetTypes,
} from './quicksight_getThemeConfigurationSheetTileLayoutGutter';
import {
  quicksight_getThemeConfigurationSheetTileLayoutMargin,
  quicksight_getThemeConfigurationSheetTileLayoutMargin_GetTypes,
} from './quicksight_getThemeConfigurationSheetTileLayoutMargin';

export interface quicksight_getThemeConfigurationSheetTileLayout {
  // The gutter settings that apply between tiles. See gutter.
  gutters?: Array<quicksight_getThemeConfigurationSheetTileLayoutGutter>;

  // The margin settings that apply around the outside edge of sheets. See margin.
  margins?: Array<quicksight_getThemeConfigurationSheetTileLayoutMargin>;
}

export function quicksight_getThemeConfigurationSheetTileLayout_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'gutters',
      'The gutter settings that apply between tiles. See gutter.',
      () => quicksight_getThemeConfigurationSheetTileLayoutGutter_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'margins',
      'The margin settings that apply around the outside edge of sheets. See margin.',
      () => quicksight_getThemeConfigurationSheetTileLayoutMargin_GetTypes(),
      true,
      false,
    ),
  ];
}
