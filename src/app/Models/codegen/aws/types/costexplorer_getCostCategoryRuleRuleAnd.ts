import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  costexplorer_getCostCategoryRuleRuleAndTag,
  costexplorer_getCostCategoryRuleRuleAndTag_GetTypes,
} from "./costexplorer_getCostCategoryRuleRuleAndTag";
import {
  costexplorer_getCostCategoryRuleRuleAndAnd,
  costexplorer_getCostCategoryRuleRuleAndAnd_GetTypes,
} from "./costexplorer_getCostCategoryRuleRuleAndAnd";
import {
  costexplorer_getCostCategoryRuleRuleAndCostCategory,
  costexplorer_getCostCategoryRuleRuleAndCostCategory_GetTypes,
} from "./costexplorer_getCostCategoryRuleRuleAndCostCategory";
import {
  costexplorer_getCostCategoryRuleRuleAndDimension,
  costexplorer_getCostCategoryRuleRuleAndDimension_GetTypes,
} from "./costexplorer_getCostCategoryRuleRuleAndDimension";
import {
  costexplorer_getCostCategoryRuleRuleAndNot,
  costexplorer_getCostCategoryRuleRuleAndNot_GetTypes,
} from "./costexplorer_getCostCategoryRuleRuleAndNot";
import {
  costexplorer_getCostCategoryRuleRuleAndOr,
  costexplorer_getCostCategoryRuleRuleAndOr_GetTypes,
} from "./costexplorer_getCostCategoryRuleRuleAndOr";

export interface costexplorer_getCostCategoryRuleRuleAnd {
  // Return results that match both `Dimension` objects.
  ands?: Array<costexplorer_getCostCategoryRuleRuleAndAnd>;

  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategories?: Array<costexplorer_getCostCategoryRuleRuleAndCostCategory>;

  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimensions?: Array<costexplorer_getCostCategoryRuleRuleAndDimension>;

  // Return results that do not match the `Dimension` object.
  nots?: Array<costexplorer_getCostCategoryRuleRuleAndNot>;

  // Return results that match either `Dimension` object.
  ors?: Array<costexplorer_getCostCategoryRuleRuleAndOr>;

  // Configuration block for the specific `Tag` to use for `Expression`. See below.
  tags?: Array<costexplorer_getCostCategoryRuleRuleAndTag>;
}

export function costexplorer_getCostCategoryRuleRuleAnd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "nots",
      "Return results that do not match the `Dimension` object.",
      () => costexplorer_getCostCategoryRuleRuleAndNot_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ors",
      "Return results that match either `Dimension` object.",
      () => costexplorer_getCostCategoryRuleRuleAndOr_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tags",
      "Configuration block for the specific `Tag` to use for `Expression`. See below.",
      () => costexplorer_getCostCategoryRuleRuleAndTag_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ands",
      "Return results that match both `Dimension` objects.",
      () => costexplorer_getCostCategoryRuleRuleAndAnd_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "costCategories",
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      () => costexplorer_getCostCategoryRuleRuleAndCostCategory_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dimensions",
      "Configuration block for the specific `Dimension` to use for `Expression`. See below.",
      () => costexplorer_getCostCategoryRuleRuleAndDimension_GetTypes(),
      true,
      false,
    ),
  ];
}
