import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface budgets_getBudgetCostFilter {
  /*
The name of a budget. Unique within accounts.

The following arguments are optional:
*/
  name?: string;

  //
  values?: Array<string>;
}

export function budgets_getBudgetCostFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of a budget. Unique within accounts.\n\nThe following arguments are optional:",
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
