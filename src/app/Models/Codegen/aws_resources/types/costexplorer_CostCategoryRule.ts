import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  costexplorer_CostCategoryRuleRule,
  costexplorer_CostCategoryRuleRule_GetTypes,
} from "./costexplorer_CostCategoryRuleRule";
import {
  costexplorer_CostCategoryRuleInheritedValue,
  costexplorer_CostCategoryRuleInheritedValue_GetTypes,
} from "./costexplorer_CostCategoryRuleInheritedValue";

export interface costexplorer_CostCategoryRule {
  // Configuration block for the `Expression` object used to categorize costs. See below.
  rule?: costexplorer_CostCategoryRuleRule;

  // You can define the CostCategoryRule rule type as either `REGULAR` or `INHERITED_VALUE`.
  type?: string;

  // Default value for the cost category.
  value?: string;

  // Configuration block for the value the line item is categorized as if the line item contains the matched dimension. See below.
  inheritedValue?: costexplorer_CostCategoryRuleInheritedValue;
}

export function costexplorer_CostCategoryRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "You can define the CostCategoryRule rule type as either `REGULAR` or `INHERITED_VALUE`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "Default value for the cost category.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "inheritedValue",
      "Configuration block for the value the line item is categorized as if the line item contains the matched dimension. See below.",
      costexplorer_CostCategoryRuleInheritedValue_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "rule",
      "Configuration block for the `Expression` object used to categorize costs. See below.",
      costexplorer_CostCategoryRuleRule_GetTypes(),
      false,
      false,
    ),
  ];
}
