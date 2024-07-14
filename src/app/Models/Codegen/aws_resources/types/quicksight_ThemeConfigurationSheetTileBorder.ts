import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface quicksight_ThemeConfigurationSheetTileBorder {
  // The option to enable display of borders for visuals.
  show?: boolean;
}

export function quicksight_ThemeConfigurationSheetTileBorder_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "show",
      "The option to enable display of borders for visuals.",
      [],
      false,
      false,
    ),
  ];
}
