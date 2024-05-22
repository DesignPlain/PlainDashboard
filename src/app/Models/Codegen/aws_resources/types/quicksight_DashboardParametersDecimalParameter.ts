import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface quicksight_DashboardParametersDecimalParameter {
  // Display name for the dashboard.
  name?: string;

  //
  values?: Array<number>;
}

export function quicksight_DashboardParametersDecimalParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Display name for the dashboard.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "values",
      "",
      InputType_Number_GetTypes(),
      true,
      false,
    ),
  ];
}
