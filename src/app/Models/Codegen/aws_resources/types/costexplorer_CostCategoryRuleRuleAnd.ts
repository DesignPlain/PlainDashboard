import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  costexplorer_CostCategoryRuleRuleAndCostCategory,
  costexplorer_CostCategoryRuleRuleAndCostCategory_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleAndCostCategory";
import {
  costexplorer_CostCategoryRuleRuleAndDimension,
  costexplorer_CostCategoryRuleRuleAndDimension_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleAndDimension";
import {
  costexplorer_CostCategoryRuleRuleAndTags,
  costexplorer_CostCategoryRuleRuleAndTags_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleAndTags";

export interface costexplorer_CostCategoryRuleRuleAnd {
  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategory?: costexplorer_CostCategoryRuleRuleAndCostCategory;

  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimension?: costexplorer_CostCategoryRuleRuleAndDimension;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: costexplorer_CostCategoryRuleRuleAndTags;
}

export function costexplorer_CostCategoryRuleRuleAnd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "costCategory",
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      costexplorer_CostCategoryRuleRuleAndCostCategory_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dimension",
      "Configuration block for the specific `Dimension` to use for `Expression`. See below.",
      costexplorer_CostCategoryRuleRuleAndDimension_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "tags",
      "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
      costexplorer_CostCategoryRuleRuleAndTags_GetTypes(),
      false,
      false,
    ),
  ];
}
