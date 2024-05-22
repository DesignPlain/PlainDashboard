import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface quicksight_DashboardParametersDateTimeParameter {
  //
  values?: Array<string>;

  // Display name for the dashboard.
  name?: string;
}

export function quicksight_DashboardParametersDateTimeParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "values",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Display name for the dashboard.",
      [],
      true,
      false,
    ),
  ];
}
