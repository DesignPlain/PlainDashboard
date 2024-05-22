import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface quicksight_AnalysisParametersDateTimeParameter {
  /*
Display name for the analysis.

The following arguments are optional:
*/
  name?: string;

  //
  values?: Array<string>;
}

export function quicksight_AnalysisParametersDateTimeParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Display name for the analysis.\n\nThe following arguments are optional:",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "values",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
