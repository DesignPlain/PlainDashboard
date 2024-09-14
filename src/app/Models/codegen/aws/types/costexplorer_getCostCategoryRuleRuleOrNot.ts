import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  costexplorer_getCostCategoryRuleRuleOrNotTag,
  costexplorer_getCostCategoryRuleRuleOrNotTag_GetTypes,
} from "./costexplorer_getCostCategoryRuleRuleOrNotTag";
import {
  costexplorer_getCostCategoryRuleRuleOrNotCostCategory,
  costexplorer_getCostCategoryRuleRuleOrNotCostCategory_GetTypes,
} from "./costexplorer_getCostCategoryRuleRuleOrNotCostCategory";
import {
  costexplorer_getCostCategoryRuleRuleOrNotDimension,
  costexplorer_getCostCategoryRuleRuleOrNotDimension_GetTypes,
} from "./costexplorer_getCostCategoryRuleRuleOrNotDimension";

export interface costexplorer_getCostCategoryRuleRuleOrNot {
  // Configuration block for the specific `Tag` to use for `Expression`. See below.
  tags?: Array<costexplorer_getCostCategoryRuleRuleOrNotTag>;

  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategories?: Array<costexplorer_getCostCategoryRuleRuleOrNotCostCategory>;

  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimensions?: Array<costexplorer_getCostCategoryRuleRuleOrNotDimension>;
}

export function costexplorer_getCostCategoryRuleRuleOrNot_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "dimensions",
      "Configuration block for the specific `Dimension` to use for `Expression`. See below.",
      () => costexplorer_getCostCategoryRuleRuleOrNotDimension_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tags",
      "Configuration block for the specific `Tag` to use for `Expression`. See below.",
      () => costexplorer_getCostCategoryRuleRuleOrNotTag_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "costCategories",
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      () => costexplorer_getCostCategoryRuleRuleOrNotCostCategory_GetTypes(),
      true,
      false,
    ),
  ];
}
