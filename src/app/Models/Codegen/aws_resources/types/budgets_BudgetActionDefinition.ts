import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  budgets_BudgetActionDefinitionSsmActionDefinition,
  budgets_BudgetActionDefinitionSsmActionDefinition_GetTypes,
} from "./budgets_BudgetActionDefinitionSsmActionDefinition";
import {
  budgets_BudgetActionDefinitionIamActionDefinition,
  budgets_BudgetActionDefinitionIamActionDefinition_GetTypes,
} from "./budgets_BudgetActionDefinitionIamActionDefinition";
import {
  budgets_BudgetActionDefinitionScpActionDefinition,
  budgets_BudgetActionDefinitionScpActionDefinition_GetTypes,
} from "./budgets_BudgetActionDefinitionScpActionDefinition";

export interface budgets_BudgetActionDefinition {
  // The AWS Systems Manager (SSM) action definition details. See SSM Action Definition.
  ssmActionDefinition?: budgets_BudgetActionDefinitionSsmActionDefinition;

  // The AWS Identity and Access Management (IAM) action definition details. See IAM Action Definition.
  iamActionDefinition?: budgets_BudgetActionDefinitionIamActionDefinition;

  // The service control policies (SCPs) action definition details. See SCP Action Definition.
  scpActionDefinition?: budgets_BudgetActionDefinitionScpActionDefinition;
}

export function budgets_BudgetActionDefinition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ssmActionDefinition",
      "The AWS Systems Manager (SSM) action definition details. See SSM Action Definition.",
      budgets_BudgetActionDefinitionSsmActionDefinition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "iamActionDefinition",
      "The AWS Identity and Access Management (IAM) action definition details. See IAM Action Definition.",
      budgets_BudgetActionDefinitionIamActionDefinition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "scpActionDefinition",
      "The service control policies (SCPs) action definition details. See SCP Action Definition.",
      budgets_BudgetActionDefinitionScpActionDefinition_GetTypes(),
      false,
      false,
    ),
  ];
}
