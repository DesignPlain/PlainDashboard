import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  costexplorer_CostCategoryRuleRuleOrOrCostCategory,
  costexplorer_CostCategoryRuleRuleOrOrCostCategory_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleOrOrCostCategory";
import {
  costexplorer_CostCategoryRuleRuleOrOrDimension,
  costexplorer_CostCategoryRuleRuleOrOrDimension_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleOrOrDimension";
import {
  costexplorer_CostCategoryRuleRuleOrOrTags,
  costexplorer_CostCategoryRuleRuleOrOrTags_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleOrOrTags";

export interface costexplorer_CostCategoryRuleRuleOrOr {
  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategory?: costexplorer_CostCategoryRuleRuleOrOrCostCategory;

  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimension?: costexplorer_CostCategoryRuleRuleOrOrDimension;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: costexplorer_CostCategoryRuleRuleOrOrTags;
}

export function costexplorer_CostCategoryRuleRuleOrOr_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "costCategory",
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      () => costexplorer_CostCategoryRuleRuleOrOrCostCategory_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dimension",
      "Configuration block for the specific `Dimension` to use for `Expression`. See below.",
      () => costexplorer_CostCategoryRuleRuleOrOrDimension_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "tags",
      "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
      () => costexplorer_CostCategoryRuleRuleOrOrTags_GetTypes(),
      false,
      false,
    ),
  ];
}
