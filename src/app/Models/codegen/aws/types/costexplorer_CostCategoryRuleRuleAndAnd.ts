import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  costexplorer_CostCategoryRuleRuleAndAndDimension,
  costexplorer_CostCategoryRuleRuleAndAndDimension_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleAndAndDimension";
import {
  costexplorer_CostCategoryRuleRuleAndAndTags,
  costexplorer_CostCategoryRuleRuleAndAndTags_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleAndAndTags";
import {
  costexplorer_CostCategoryRuleRuleAndAndCostCategory,
  costexplorer_CostCategoryRuleRuleAndAndCostCategory_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleAndAndCostCategory";

export interface costexplorer_CostCategoryRuleRuleAndAnd {
  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimension?: costexplorer_CostCategoryRuleRuleAndAndDimension;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: costexplorer_CostCategoryRuleRuleAndAndTags;

  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategory?: costexplorer_CostCategoryRuleRuleAndAndCostCategory;
}

export function costexplorer_CostCategoryRuleRuleAndAnd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "tags",
      "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
      () => costexplorer_CostCategoryRuleRuleAndAndTags_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "costCategory",
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      () => costexplorer_CostCategoryRuleRuleAndAndCostCategory_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dimension",
      "Configuration block for the specific `Dimension` to use for `Expression`. See below.",
      () => costexplorer_CostCategoryRuleRuleAndAndDimension_GetTypes(),
      false,
      false,
    ),
  ];
}
