import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  costexplorer_getCostCategoryRuleRuleAndOrDimension,
  costexplorer_getCostCategoryRuleRuleAndOrDimension_GetTypes,
} from "./costexplorer_getCostCategoryRuleRuleAndOrDimension";
import {
  costexplorer_getCostCategoryRuleRuleAndOrTag,
  costexplorer_getCostCategoryRuleRuleAndOrTag_GetTypes,
} from "./costexplorer_getCostCategoryRuleRuleAndOrTag";
import {
  costexplorer_getCostCategoryRuleRuleAndOrCostCategory,
  costexplorer_getCostCategoryRuleRuleAndOrCostCategory_GetTypes,
} from "./costexplorer_getCostCategoryRuleRuleAndOrCostCategory";

export interface costexplorer_getCostCategoryRuleRuleAndOr {
  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimensions?: Array<costexplorer_getCostCategoryRuleRuleAndOrDimension>;

  // Configuration block for the specific `Tag` to use for `Expression`. See below.
  tags?: Array<costexplorer_getCostCategoryRuleRuleAndOrTag>;

  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategories?: Array<costexplorer_getCostCategoryRuleRuleAndOrCostCategory>;
}

export function costexplorer_getCostCategoryRuleRuleAndOr_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "tags",
      "Configuration block for the specific `Tag` to use for `Expression`. See below.",
      () => costexplorer_getCostCategoryRuleRuleAndOrTag_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "costCategories",
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      () => costexplorer_getCostCategoryRuleRuleAndOrCostCategory_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dimensions",
      "Configuration block for the specific `Dimension` to use for `Expression`. See below.",
      () => costexplorer_getCostCategoryRuleRuleAndOrDimension_GetTypes(),
      true,
      false,
    ),
  ];
}
