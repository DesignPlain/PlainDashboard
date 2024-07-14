import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface budgets_BudgetCostFilter {
  //
  values?: Array<string>;

  // The name of a budget. Unique within accounts.
  name?: string;
}

export function budgets_BudgetCostFilter_GetTypes(): DynamicUIProps[] {
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
      "The name of a budget. Unique within accounts.",
      [],
      true,
      false,
    ),
  ];
}
