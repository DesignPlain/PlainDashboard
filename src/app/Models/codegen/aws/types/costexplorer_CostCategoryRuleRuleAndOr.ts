import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  costexplorer_CostCategoryRuleRuleAndOrCostCategory,
  costexplorer_CostCategoryRuleRuleAndOrCostCategory_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleAndOrCostCategory";
import {
  costexplorer_CostCategoryRuleRuleAndOrDimension,
  costexplorer_CostCategoryRuleRuleAndOrDimension_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleAndOrDimension";
import {
  costexplorer_CostCategoryRuleRuleAndOrTags,
  costexplorer_CostCategoryRuleRuleAndOrTags_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleAndOrTags";

export interface costexplorer_CostCategoryRuleRuleAndOr {
  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategory?: costexplorer_CostCategoryRuleRuleAndOrCostCategory;

  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimension?: costexplorer_CostCategoryRuleRuleAndOrDimension;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: costexplorer_CostCategoryRuleRuleAndOrTags;
}

export function costexplorer_CostCategoryRuleRuleAndOr_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "costCategory",
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      () => costexplorer_CostCategoryRuleRuleAndOrCostCategory_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dimension",
      "Configuration block for the specific `Dimension` to use for `Expression`. See below.",
      () => costexplorer_CostCategoryRuleRuleAndOrDimension_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "tags",
      "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
      () => costexplorer_CostCategoryRuleRuleAndOrTags_GetTypes(),
      false,
      false,
    ),
  ];
}
