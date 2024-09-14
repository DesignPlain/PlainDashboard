import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  costexplorer_CostCategoryRuleRuleOrOr,
  costexplorer_CostCategoryRuleRuleOrOr_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleOrOr";
import {
  costexplorer_CostCategoryRuleRuleOrTags,
  costexplorer_CostCategoryRuleRuleOrTags_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleOrTags";
import {
  costexplorer_CostCategoryRuleRuleOrAnd,
  costexplorer_CostCategoryRuleRuleOrAnd_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleOrAnd";
import {
  costexplorer_CostCategoryRuleRuleOrCostCategory,
  costexplorer_CostCategoryRuleRuleOrCostCategory_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleOrCostCategory";
import {
  costexplorer_CostCategoryRuleRuleOrDimension,
  costexplorer_CostCategoryRuleRuleOrDimension_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleOrDimension";
import {
  costexplorer_CostCategoryRuleRuleOrNot,
  costexplorer_CostCategoryRuleRuleOrNot_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleOrNot";

export interface costexplorer_CostCategoryRuleRuleOr {
  // Return results that match both `Dimension` object.
  ors?: Array<costexplorer_CostCategoryRuleRuleOrOr>;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: costexplorer_CostCategoryRuleRuleOrTags;

  // Return results that match both `Dimension` objects.
  ands?: Array<costexplorer_CostCategoryRuleRuleOrAnd>;

  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategory?: costexplorer_CostCategoryRuleRuleOrCostCategory;

  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimension?: costexplorer_CostCategoryRuleRuleOrDimension;

  // Return results that match both `Dimension` object.
  not?: costexplorer_CostCategoryRuleRuleOrNot;
}

export function costexplorer_CostCategoryRuleRuleOr_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ors",
      "Return results that match both `Dimension` object.",
      () => costexplorer_CostCategoryRuleRuleOrOr_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "tags",
      "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
      () => costexplorer_CostCategoryRuleRuleOrTags_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ands",
      "Return results that match both `Dimension` objects.",
      () => costexplorer_CostCategoryRuleRuleOrAnd_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "costCategory",
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      () => costexplorer_CostCategoryRuleRuleOrCostCategory_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dimension",
      "Configuration block for the specific `Dimension` to use for `Expression`. See below.",
      () => costexplorer_CostCategoryRuleRuleOrDimension_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "not",
      "Return results that match both `Dimension` object.",
      () => costexplorer_CostCategoryRuleRuleOrNot_GetTypes(),
      false,
      false,
    ),
  ];
}
