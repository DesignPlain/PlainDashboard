import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface quicksight_getThemeConfigurationSheetTileBorder {
  // This Boolean value controls whether to display sheet margins.
  show?: boolean;
}

export function quicksight_getThemeConfigurationSheetTileBorder_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "show",
      "This Boolean value controls whether to display sheet margins.",
      () => [],
      true,
      false,
    ),
  ];
}
