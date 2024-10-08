import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface quicksight_getThemeConfigurationTypographyFontFamily {
  // Font family name.
  fontFamily?: string;
}

export function quicksight_getThemeConfigurationTypographyFontFamily_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'fontFamily',
      'Font family name.',
      () => [],
      true,
      false,
    ),
  ];
}
