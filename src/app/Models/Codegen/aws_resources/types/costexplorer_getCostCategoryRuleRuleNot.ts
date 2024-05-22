import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  costexplorer_getCostCategoryRuleRuleNotDimension,
  costexplorer_getCostCategoryRuleRuleNotDimension_GetTypes,
} from "./costexplorer_getCostCategoryRuleRuleNotDimension";
import {
  costexplorer_getCostCategoryRuleRuleNotTag,
  costexplorer_getCostCategoryRuleRuleNotTag_GetTypes,
} from "./costexplorer_getCostCategoryRuleRuleNotTag";
import {
  costexplorer_getCostCategoryRuleRuleNotCostCategory,
  costexplorer_getCostCategoryRuleRuleNotCostCategory_GetTypes,
} from "./costexplorer_getCostCategoryRuleRuleNotCostCategory";

export interface costexplorer_getCostCategoryRuleRuleNot {
  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategories?: Array<costexplorer_getCostCategoryRuleRuleNotCostCategory>;

  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimensions?: Array<costexplorer_getCostCategoryRuleRuleNotDimension>;

  // Configuration block for the specific `Tag` to use for `Expression`. See below.
  tags?: Array<costexplorer_getCostCategoryRuleRuleNotTag>;
}

export function costexplorer_getCostCategoryRuleRuleNot_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "costCategories",
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      costexplorer_getCostCategoryRuleRuleNotCostCategory_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dimensions",
      "Configuration block for the specific `Dimension` to use for `Expression`. See below.",
      costexplorer_getCostCategoryRuleRuleNotDimension_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tags",
      "Configuration block for the specific `Tag` to use for `Expression`. See below.",
      costexplorer_getCostCategoryRuleRuleNotTag_GetTypes(),
      true,
      false,
    ),
  ];
}
