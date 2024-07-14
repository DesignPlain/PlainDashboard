import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  budgets_getBudgetCalculatedSpendActualSpend,
  budgets_getBudgetCalculatedSpendActualSpend_GetTypes,
} from "./budgets_getBudgetCalculatedSpendActualSpend";

export interface budgets_getBudgetCalculatedSpend {
  //
  actualSpends?: Array<budgets_getBudgetCalculatedSpendActualSpend>;
}

export function budgets_getBudgetCalculatedSpend_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "actualSpends",
      "",
      budgets_getBudgetCalculatedSpendActualSpend_GetTypes(),
      true,
      false,
    ),
  ];
}
