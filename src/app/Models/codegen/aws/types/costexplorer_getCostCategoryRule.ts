import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  costexplorer_getCostCategoryRuleInheritedValue,
  costexplorer_getCostCategoryRuleInheritedValue_GetTypes,
} from "./costexplorer_getCostCategoryRuleInheritedValue";
import {
  costexplorer_getCostCategoryRuleRule,
  costexplorer_getCostCategoryRuleRule_GetTypes,
} from "./costexplorer_getCostCategoryRuleRule";

export interface costexplorer_getCostCategoryRule {
  // Parameter type.
  type?: string;

  // Default value for the cost category.
  value?: string;

  // Configuration block for the value the line item is categorized as if the line item contains the matched dimension. See below.
  inheritedValues?: Array<costexplorer_getCostCategoryRuleInheritedValue>;

  // Configuration block for the `Expression` object used to categorize costs. See below.
  rules?: Array<costexplorer_getCostCategoryRuleRule>;
}

export function costexplorer_getCostCategoryRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "Parameter type.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "Default value for the cost category.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "inheritedValues",
      "Configuration block for the value the line item is categorized as if the line item contains the matched dimension. See below.",
      () => costexplorer_getCostCategoryRuleInheritedValue_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "rules",
      "Configuration block for the `Expression` object used to categorize costs. See below.",
      () => costexplorer_getCostCategoryRuleRule_GetTypes(),
      true,
      false,
    ),
  ];
}
