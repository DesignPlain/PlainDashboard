import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  costexplorer_getCostCategoryRuleRuleAndDimension,
  costexplorer_getCostCategoryRuleRuleAndDimension_GetTypes,
} from "./costexplorer_getCostCategoryRuleRuleAndDimension";
import {
  costexplorer_getCostCategoryRuleRuleAndTag,
  costexplorer_getCostCategoryRuleRuleAndTag_GetTypes,
} from "./costexplorer_getCostCategoryRuleRuleAndTag";
import {
  costexplorer_getCostCategoryRuleRuleAndCostCategory,
  costexplorer_getCostCategoryRuleRuleAndCostCategory_GetTypes,
} from "./costexplorer_getCostCategoryRuleRuleAndCostCategory";

export interface costexplorer_getCostCategoryRuleRuleAnd {
  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategories?: Array<costexplorer_getCostCategoryRuleRuleAndCostCategory>;

  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimensions?: Array<costexplorer_getCostCategoryRuleRuleAndDimension>;

  // Configuration block for the specific `Tag` to use for `Expression`. See below.
  tags?: Array<costexplorer_getCostCategoryRuleRuleAndTag>;
}

export function costexplorer_getCostCategoryRuleRuleAnd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "dimensions",
      "Configuration block for the specific `Dimension` to use for `Expression`. See below.",
      costexplorer_getCostCategoryRuleRuleAndDimension_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tags",
      "Configuration block for the specific `Tag` to use for `Expression`. See below.",
      costexplorer_getCostCategoryRuleRuleAndTag_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "costCategories",
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      costexplorer_getCostCategoryRuleRuleAndCostCategory_GetTypes(),
      true,
      false,
    ),
  ];
}
