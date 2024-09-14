import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  costexplorer_getCostCategoryRuleRuleOrOrTag,
  costexplorer_getCostCategoryRuleRuleOrOrTag_GetTypes,
} from "./costexplorer_getCostCategoryRuleRuleOrOrTag";
import {
  costexplorer_getCostCategoryRuleRuleOrOrCostCategory,
  costexplorer_getCostCategoryRuleRuleOrOrCostCategory_GetTypes,
} from "./costexplorer_getCostCategoryRuleRuleOrOrCostCategory";
import {
  costexplorer_getCostCategoryRuleRuleOrOrDimension,
  costexplorer_getCostCategoryRuleRuleOrOrDimension_GetTypes,
} from "./costexplorer_getCostCategoryRuleRuleOrOrDimension";

export interface costexplorer_getCostCategoryRuleRuleOrOr {
  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategories?: Array<costexplorer_getCostCategoryRuleRuleOrOrCostCategory>;

  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimensions?: Array<costexplorer_getCostCategoryRuleRuleOrOrDimension>;

  // Configuration block for the specific `Tag` to use for `Expression`. See below.
  tags?: Array<costexplorer_getCostCategoryRuleRuleOrOrTag>;
}

export function costexplorer_getCostCategoryRuleRuleOrOr_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "costCategories",
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      () => costexplorer_getCostCategoryRuleRuleOrOrCostCategory_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dimensions",
      "Configuration block for the specific `Dimension` to use for `Expression`. See below.",
      () => costexplorer_getCostCategoryRuleRuleOrOrDimension_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tags",
      "Configuration block for the specific `Tag` to use for `Expression`. See below.",
      () => costexplorer_getCostCategoryRuleRuleOrOrTag_GetTypes(),
      true,
      false,
    ),
  ];
}
