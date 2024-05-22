import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  costexplorer_CostCategoryRuleRuleNotTags,
  costexplorer_CostCategoryRuleRuleNotTags_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleNotTags";
import {
  costexplorer_CostCategoryRuleRuleNotCostCategory,
  costexplorer_CostCategoryRuleRuleNotCostCategory_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleNotCostCategory";
import {
  costexplorer_CostCategoryRuleRuleNotDimension,
  costexplorer_CostCategoryRuleRuleNotDimension_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleNotDimension";

export interface costexplorer_CostCategoryRuleRuleNot {
  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: costexplorer_CostCategoryRuleRuleNotTags;

  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategory?: costexplorer_CostCategoryRuleRuleNotCostCategory;

  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimension?: costexplorer_CostCategoryRuleRuleNotDimension;
}

export function costexplorer_CostCategoryRuleRuleNot_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "costCategory",
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      costexplorer_CostCategoryRuleRuleNotCostCategory_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dimension",
      "Configuration block for the specific `Dimension` to use for `Expression`. See below.",
      costexplorer_CostCategoryRuleRuleNotDimension_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "tags",
      "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
      costexplorer_CostCategoryRuleRuleNotTags_GetTypes(),
      false,
      false,
    ),
  ];
}
