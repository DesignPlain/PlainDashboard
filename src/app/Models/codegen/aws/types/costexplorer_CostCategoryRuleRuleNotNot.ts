import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  costexplorer_CostCategoryRuleRuleNotNotCostCategory,
  costexplorer_CostCategoryRuleRuleNotNotCostCategory_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleNotNotCostCategory";
import {
  costexplorer_CostCategoryRuleRuleNotNotDimension,
  costexplorer_CostCategoryRuleRuleNotNotDimension_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleNotNotDimension";
import {
  costexplorer_CostCategoryRuleRuleNotNotTags,
  costexplorer_CostCategoryRuleRuleNotNotTags_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleNotNotTags";

export interface costexplorer_CostCategoryRuleRuleNotNot {
  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategory?: costexplorer_CostCategoryRuleRuleNotNotCostCategory;

  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimension?: costexplorer_CostCategoryRuleRuleNotNotDimension;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: costexplorer_CostCategoryRuleRuleNotNotTags;
}

export function costexplorer_CostCategoryRuleRuleNotNot_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "costCategory",
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      () => costexplorer_CostCategoryRuleRuleNotNotCostCategory_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dimension",
      "Configuration block for the specific `Dimension` to use for `Expression`. See below.",
      () => costexplorer_CostCategoryRuleRuleNotNotDimension_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "tags",
      "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
      () => costexplorer_CostCategoryRuleRuleNotNotTags_GetTypes(),
      false,
      false,
    ),
  ];
}
