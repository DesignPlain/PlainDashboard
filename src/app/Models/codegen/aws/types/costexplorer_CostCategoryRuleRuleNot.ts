import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  costexplorer_CostCategoryRuleRuleNotCostCategory,
  costexplorer_CostCategoryRuleRuleNotCostCategory_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleNotCostCategory";
import {
  costexplorer_CostCategoryRuleRuleNotDimension,
  costexplorer_CostCategoryRuleRuleNotDimension_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleNotDimension";
import {
  costexplorer_CostCategoryRuleRuleNotNot,
  costexplorer_CostCategoryRuleRuleNotNot_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleNotNot";
import {
  costexplorer_CostCategoryRuleRuleNotOr,
  costexplorer_CostCategoryRuleRuleNotOr_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleNotOr";
import {
  costexplorer_CostCategoryRuleRuleNotTags,
  costexplorer_CostCategoryRuleRuleNotTags_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleNotTags";
import {
  costexplorer_CostCategoryRuleRuleNotAnd,
  costexplorer_CostCategoryRuleRuleNotAnd_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleNotAnd";

export interface costexplorer_CostCategoryRuleRuleNot {
  // Return results that match both `Dimension` objects.
  ands?: Array<costexplorer_CostCategoryRuleRuleNotAnd>;

  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategory?: costexplorer_CostCategoryRuleRuleNotCostCategory;

  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimension?: costexplorer_CostCategoryRuleRuleNotDimension;

  // Return results that match both `Dimension` object.
  not?: costexplorer_CostCategoryRuleRuleNotNot;

  // Return results that match both `Dimension` object.
  ors?: Array<costexplorer_CostCategoryRuleRuleNotOr>;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: costexplorer_CostCategoryRuleRuleNotTags;
}

export function costexplorer_CostCategoryRuleRuleNot_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "costCategory",
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      () => costexplorer_CostCategoryRuleRuleNotCostCategory_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dimension",
      "Configuration block for the specific `Dimension` to use for `Expression`. See below.",
      () => costexplorer_CostCategoryRuleRuleNotDimension_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "not",
      "Return results that match both `Dimension` object.",
      () => costexplorer_CostCategoryRuleRuleNotNot_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ors",
      "Return results that match both `Dimension` object.",
      () => costexplorer_CostCategoryRuleRuleNotOr_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "tags",
      "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
      () => costexplorer_CostCategoryRuleRuleNotTags_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ands",
      "Return results that match both `Dimension` objects.",
      () => costexplorer_CostCategoryRuleRuleNotAnd_GetTypes(),
      false,
      false,
    ),
  ];
}
