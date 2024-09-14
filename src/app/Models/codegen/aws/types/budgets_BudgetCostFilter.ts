import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface budgets_BudgetCostFilter {
  // The name of a budget. Unique within accounts.
  name?: string;

  //
  values?: Array<string>;
}

export function budgets_BudgetCostFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of a budget. Unique within accounts.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "values",
      "",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
