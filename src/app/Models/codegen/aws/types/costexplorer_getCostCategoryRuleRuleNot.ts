import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  costexplorer_getCostCategoryRuleRuleNotAnd,
  costexplorer_getCostCategoryRuleRuleNotAnd_GetTypes,
} from "./costexplorer_getCostCategoryRuleRuleNotAnd";
import {
  costexplorer_getCostCategoryRuleRuleNotCostCategory,
  costexplorer_getCostCategoryRuleRuleNotCostCategory_GetTypes,
} from "./costexplorer_getCostCategoryRuleRuleNotCostCategory";
import {
  costexplorer_getCostCategoryRuleRuleNotDimension,
  costexplorer_getCostCategoryRuleRuleNotDimension_GetTypes,
} from "./costexplorer_getCostCategoryRuleRuleNotDimension";
import {
  costexplorer_getCostCategoryRuleRuleNotNot,
  costexplorer_getCostCategoryRuleRuleNotNot_GetTypes,
} from "./costexplorer_getCostCategoryRuleRuleNotNot";
import {
  costexplorer_getCostCategoryRuleRuleNotOr,
  costexplorer_getCostCategoryRuleRuleNotOr_GetTypes,
} from "./costexplorer_getCostCategoryRuleRuleNotOr";
import {
  costexplorer_getCostCategoryRuleRuleNotTag,
  costexplorer_getCostCategoryRuleRuleNotTag_GetTypes,
} from "./costexplorer_getCostCategoryRuleRuleNotTag";

export interface costexplorer_getCostCategoryRuleRuleNot {
  // Return results that match either `Dimension` object.
  ors?: Array<costexplorer_getCostCategoryRuleRuleNotOr>;

  // Configuration block for the specific `Tag` to use for `Expression`. See below.
  tags?: Array<costexplorer_getCostCategoryRuleRuleNotTag>;

  // Return results that match both `Dimension` objects.
  ands?: Array<costexplorer_getCostCategoryRuleRuleNotAnd>;

  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategories?: Array<costexplorer_getCostCategoryRuleRuleNotCostCategory>;

  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimensions?: Array<costexplorer_getCostCategoryRuleRuleNotDimension>;

  // Return results that do not match the `Dimension` object.
  nots?: Array<costexplorer_getCostCategoryRuleRuleNotNot>;
}

export function costexplorer_getCostCategoryRuleRuleNot_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ors",
      "Return results that match either `Dimension` object.",
      () => costexplorer_getCostCategoryRuleRuleNotOr_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tags",
      "Configuration block for the specific `Tag` to use for `Expression`. See below.",
      () => costexplorer_getCostCategoryRuleRuleNotTag_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ands",
      "Return results that match both `Dimension` objects.",
      () => costexplorer_getCostCategoryRuleRuleNotAnd_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "costCategories",
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      () => costexplorer_getCostCategoryRuleRuleNotCostCategory_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dimensions",
      "Configuration block for the specific `Dimension` to use for `Expression`. See below.",
      () => costexplorer_getCostCategoryRuleRuleNotDimension_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "nots",
      "Return results that do not match the `Dimension` object.",
      () => costexplorer_getCostCategoryRuleRuleNotNot_GetTypes(),
      true,
      false,
    ),
  ];
}
