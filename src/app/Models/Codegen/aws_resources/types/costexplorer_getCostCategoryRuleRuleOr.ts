import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  costexplorer_getCostCategoryRuleRuleOrCostCategory,
  costexplorer_getCostCategoryRuleRuleOrCostCategory_GetTypes,
} from "./costexplorer_getCostCategoryRuleRuleOrCostCategory";
import {
  costexplorer_getCostCategoryRuleRuleOrDimension,
  costexplorer_getCostCategoryRuleRuleOrDimension_GetTypes,
} from "./costexplorer_getCostCategoryRuleRuleOrDimension";
import {
  costexplorer_getCostCategoryRuleRuleOrTag,
  costexplorer_getCostCategoryRuleRuleOrTag_GetTypes,
} from "./costexplorer_getCostCategoryRuleRuleOrTag";

export interface costexplorer_getCostCategoryRuleRuleOr {
  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategories?: Array<costexplorer_getCostCategoryRuleRuleOrCostCategory>;

  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimensions?: Array<costexplorer_getCostCategoryRuleRuleOrDimension>;

  // Configuration block for the specific `Tag` to use for `Expression`. See below.
  tags?: Array<costexplorer_getCostCategoryRuleRuleOrTag>;
}

export function costexplorer_getCostCategoryRuleRuleOr_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "costCategories",
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      costexplorer_getCostCategoryRuleRuleOrCostCategory_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dimensions",
      "Configuration block for the specific `Dimension` to use for `Expression`. See below.",
      costexplorer_getCostCategoryRuleRuleOrDimension_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tags",
      "Configuration block for the specific `Tag` to use for `Expression`. See below.",
      costexplorer_getCostCategoryRuleRuleOrTag_GetTypes(),
      true,
      false,
    ),
  ];
}
