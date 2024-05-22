import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface quicksight_getThemeConfigurationSheetTileLayoutGutter {
  // This Boolean value controls whether to display sheet margins.
  show?: boolean;
}

export function quicksight_getThemeConfigurationSheetTileLayoutGutter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "show",
      "This Boolean value controls whether to display sheet margins.",
      [],
      true,
      false,
    ),
  ];
}
