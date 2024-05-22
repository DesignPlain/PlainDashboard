import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface quicksight_ThemeConfigurationDataColorPalette {
  // List of hexadecimal codes for the colors. Minimum of 8 items and maximum of 20 items.
  colors?: Array<string>;

  // The hexadecimal code of a color that applies to charts where a lack of data is highlighted.
  emptyFillColor?: string;

  // The minimum and maximum hexadecimal codes that describe a color gradient. List of exactly 2 items.
  minMaxGradients?: Array<string>;
}

export function quicksight_ThemeConfigurationDataColorPalette_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "colors",
      "List of hexadecimal codes for the colors. Minimum of 8 items and maximum of 20 items.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "emptyFillColor",
      "The hexadecimal code of a color that applies to charts where a lack of data is highlighted.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "minMaxGradients",
      "The minimum and maximum hexadecimal codes that describe a color gradient. List of exactly 2 items.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
