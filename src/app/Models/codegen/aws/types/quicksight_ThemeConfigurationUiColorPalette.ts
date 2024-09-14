import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface quicksight_ThemeConfigurationUiColorPalette {
  // Color (hexadecimal) that applies to any text or other elements that appear over the accent color.
  accentForeground?: string;

  // Color (hexadecimal) that applies to error messages.
  danger?: string;

  // Color (hexadecimal) that applies to the sheet background and sheet controls.
  secondaryBackground?: string;

  // Color (hexadecimal) that applies to any text or other elements that appear over the success color.
  successForeground?: string;

  // Color (hexadecimal) that applies to the names of fields that are identified as measures.
  measure?: string;

  // Color (hexadecimal) that applies to any text or other elements that appear over the measure color.
  measureForeground?: string;

  // Color (hexadecimal) that applies to any sheet title, sheet control text, or UI that appears over the secondary background.
  secondaryForeground?: string;

  // Color (hexadecimal) that applies to any text or other elements that appear over the warning color.
  warningForeground?: string;

  // Color (hexadecimal) that applies to any text or other elements that appear over the error color.
  dangerForeground?: string;

  // Color (hexadecimal) that applies to any text or other elements that appear over the dimension color.
  dimensionForeground?: string;

  // Color (hexadecimal) of text and other foreground elements that appear over the primary background regions, such as grid lines, borders, table banding, icons, and so on.
  primaryForeground?: string;

  // Color (hexadecimal) that applies to success messages, for example the check mark for a successful download.
  success?: string;

  // Color (hexadecimal) that applies to selected states and buttons.
  accent?: string;

  // Color (hexadecimal) that applies to the names of fields that are identified as dimensions.
  dimension?: string;

  // Color (hexadecimal) that applies to visuals and other high emphasis UI.
  primaryBackground?: string;

  // Color (hexadecimal) that applies to warning and informational messages.
  warning?: string;
}

export function quicksight_ThemeConfigurationUiColorPalette_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "danger",
      "Color (hexadecimal) that applies to error messages.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dimensionForeground",
      "Color (hexadecimal) that applies to any text or other elements that appear over the dimension color.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "warning",
      "Color (hexadecimal) that applies to warning and informational messages.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "secondaryBackground",
      "Color (hexadecimal) that applies to the sheet background and sheet controls.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "measure",
      "Color (hexadecimal) that applies to the names of fields that are identified as measures.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "secondaryForeground",
      "Color (hexadecimal) that applies to any sheet title, sheet control text, or UI that appears over the secondary background.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "warningForeground",
      "Color (hexadecimal) that applies to any text or other elements that appear over the warning color.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "primaryForeground",
      "Color (hexadecimal) of text and other foreground elements that appear over the primary background regions, such as grid lines, borders, table banding, icons, and so on.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dimension",
      "Color (hexadecimal) that applies to the names of fields that are identified as dimensions.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "accentForeground",
      "Color (hexadecimal) that applies to any text or other elements that appear over the accent color.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "successForeground",
      "Color (hexadecimal) that applies to any text or other elements that appear over the success color.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "measureForeground",
      "Color (hexadecimal) that applies to any text or other elements that appear over the measure color.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dangerForeground",
      "Color (hexadecimal) that applies to any text or other elements that appear over the error color.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "success",
      "Color (hexadecimal) that applies to success messages, for example the check mark for a successful download.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "primaryBackground",
      "Color (hexadecimal) that applies to visuals and other high emphasis UI.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "accent",
      "Color (hexadecimal) that applies to selected states and buttons.",
      () => [],
      false,
      false,
    ),
  ];
}
