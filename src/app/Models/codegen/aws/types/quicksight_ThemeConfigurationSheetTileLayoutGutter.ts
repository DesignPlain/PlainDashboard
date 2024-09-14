import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface quicksight_ThemeConfigurationSheetTileLayoutGutter {
  // This Boolean value controls whether to display a gutter space between sheet tiles.
  show?: boolean;
}

export function quicksight_ThemeConfigurationSheetTileLayoutGutter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "show",
      "This Boolean value controls whether to display a gutter space between sheet tiles.",
      () => [],
      false,
      false,
    ),
  ];
}
