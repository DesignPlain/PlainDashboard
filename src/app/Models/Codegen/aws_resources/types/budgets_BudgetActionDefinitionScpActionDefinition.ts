import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface budgets_BudgetActionDefinitionScpActionDefinition {
  // The policy ID attached.
  policyId?: string;

  // A list of target IDs.
  targetIds?: Array<string>;
}

export function budgets_BudgetActionDefinitionScpActionDefinition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "policyId",
      "The policy ID attached.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "targetIds",
      "A list of target IDs.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
