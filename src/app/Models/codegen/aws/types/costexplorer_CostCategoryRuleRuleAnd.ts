import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  costexplorer_CostCategoryRuleRuleAndNot,
  costexplorer_CostCategoryRuleRuleAndNot_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleAndNot";
import {
  costexplorer_CostCategoryRuleRuleAndOr,
  costexplorer_CostCategoryRuleRuleAndOr_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleAndOr";
import {
  costexplorer_CostCategoryRuleRuleAndTags,
  costexplorer_CostCategoryRuleRuleAndTags_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleAndTags";
import {
  costexplorer_CostCategoryRuleRuleAndAnd,
  costexplorer_CostCategoryRuleRuleAndAnd_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleAndAnd";
import {
  costexplorer_CostCategoryRuleRuleAndCostCategory,
  costexplorer_CostCategoryRuleRuleAndCostCategory_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleAndCostCategory";
import {
  costexplorer_CostCategoryRuleRuleAndDimension,
  costexplorer_CostCategoryRuleRuleAndDimension_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleAndDimension";

export interface costexplorer_CostCategoryRuleRuleAnd {
  // Return results that match both `Dimension` object.
  ors?: Array<costexplorer_CostCategoryRuleRuleAndOr>;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: costexplorer_CostCategoryRuleRuleAndTags;

  // Return results that match both `Dimension` objects.
  ands?: Array<costexplorer_CostCategoryRuleRuleAndAnd>;

  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategory?: costexplorer_CostCategoryRuleRuleAndCostCategory;

  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimension?: costexplorer_CostCategoryRuleRuleAndDimension;

  // Return results that match both `Dimension` object.
  not?: costexplorer_CostCategoryRuleRuleAndNot;
}

export function costexplorer_CostCategoryRuleRuleAnd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ors",
      "Return results that match both `Dimension` object.",
      () => costexplorer_CostCategoryRuleRuleAndOr_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "tags",
      "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
      () => costexplorer_CostCategoryRuleRuleAndTags_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ands",
      "Return results that match both `Dimension` objects.",
      () => costexplorer_CostCategoryRuleRuleAndAnd_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "costCategory",
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      () => costexplorer_CostCategoryRuleRuleAndCostCategory_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dimension",
      "Configuration block for the specific `Dimension` to use for `Expression`. See below.",
      () => costexplorer_CostCategoryRuleRuleAndDimension_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "not",
      "Return results that match both `Dimension` object.",
      () => costexplorer_CostCategoryRuleRuleAndNot_GetTypes(),
      false,
      false,
    ),
  ];
}
