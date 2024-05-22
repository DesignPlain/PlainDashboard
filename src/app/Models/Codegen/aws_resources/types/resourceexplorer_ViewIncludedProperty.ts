import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface resourceexplorer_ViewIncludedProperty {
  // The name of the property that is included in this view. Valid values: `tags`.
  name?: string;
}

export function resourceexplorer_ViewIncludedProperty_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the property that is included in this view. Valid values: `tags`.",
      [],
      true,
      false,
    ),
  ];
}
