import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  costexplorer_getCostCategoryRuleRuleNotOrTag,
  costexplorer_getCostCategoryRuleRuleNotOrTag_GetTypes,
} from "./costexplorer_getCostCategoryRuleRuleNotOrTag";
import {
  costexplorer_getCostCategoryRuleRuleNotOrCostCategory,
  costexplorer_getCostCategoryRuleRuleNotOrCostCategory_GetTypes,
} from "./costexplorer_getCostCategoryRuleRuleNotOrCostCategory";
import {
  costexplorer_getCostCategoryRuleRuleNotOrDimension,
  costexplorer_getCostCategoryRuleRuleNotOrDimension_GetTypes,
} from "./costexplorer_getCostCategoryRuleRuleNotOrDimension";

export interface costexplorer_getCostCategoryRuleRuleNotOr {
  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategories?: Array<costexplorer_getCostCategoryRuleRuleNotOrCostCategory>;

  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimensions?: Array<costexplorer_getCostCategoryRuleRuleNotOrDimension>;

  // Configuration block for the specific `Tag` to use for `Expression`. See below.
  tags?: Array<costexplorer_getCostCategoryRuleRuleNotOrTag>;
}

export function costexplorer_getCostCategoryRuleRuleNotOr_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "costCategories",
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      () => costexplorer_getCostCategoryRuleRuleNotOrCostCategory_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dimensions",
      "Configuration block for the specific `Dimension` to use for `Expression`. See below.",
      () => costexplorer_getCostCategoryRuleRuleNotOrDimension_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tags",
      "Configuration block for the specific `Tag` to use for `Expression`. See below.",
      () => costexplorer_getCostCategoryRuleRuleNotOrTag_GetTypes(),
      true,
      false,
    ),
  ];
}
