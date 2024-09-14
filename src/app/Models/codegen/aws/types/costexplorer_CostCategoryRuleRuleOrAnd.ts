import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  costexplorer_CostCategoryRuleRuleOrAndCostCategory,
  costexplorer_CostCategoryRuleRuleOrAndCostCategory_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleOrAndCostCategory";
import {
  costexplorer_CostCategoryRuleRuleOrAndDimension,
  costexplorer_CostCategoryRuleRuleOrAndDimension_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleOrAndDimension";
import {
  costexplorer_CostCategoryRuleRuleOrAndTags,
  costexplorer_CostCategoryRuleRuleOrAndTags_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleOrAndTags";

export interface costexplorer_CostCategoryRuleRuleOrAnd {
  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategory?: costexplorer_CostCategoryRuleRuleOrAndCostCategory;

  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimension?: costexplorer_CostCategoryRuleRuleOrAndDimension;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: costexplorer_CostCategoryRuleRuleOrAndTags;
}

export function costexplorer_CostCategoryRuleRuleOrAnd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "costCategory",
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      () => costexplorer_CostCategoryRuleRuleOrAndCostCategory_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dimension",
      "Configuration block for the specific `Dimension` to use for `Expression`. See below.",
      () => costexplorer_CostCategoryRuleRuleOrAndDimension_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "tags",
      "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
      () => costexplorer_CostCategoryRuleRuleOrAndTags_GetTypes(),
      false,
      false,
    ),
  ];
}
