import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  costexplorer_CostCategoryRuleRuleOrCostCategory,
  costexplorer_CostCategoryRuleRuleOrCostCategory_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleOrCostCategory";
import {
  costexplorer_CostCategoryRuleRuleOrDimension,
  costexplorer_CostCategoryRuleRuleOrDimension_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleOrDimension";
import {
  costexplorer_CostCategoryRuleRuleOrTags,
  costexplorer_CostCategoryRuleRuleOrTags_GetTypes,
} from "./costexplorer_CostCategoryRuleRuleOrTags";

export interface costexplorer_CostCategoryRuleRuleOr {
  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimension?: costexplorer_CostCategoryRuleRuleOrDimension;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: costexplorer_CostCategoryRuleRuleOrTags;

  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategory?: costexplorer_CostCategoryRuleRuleOrCostCategory;
}

export function costexplorer_CostCategoryRuleRuleOr_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "costCategory",
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      costexplorer_CostCategoryRuleRuleOrCostCategory_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dimension",
      "Configuration block for the specific `Dimension` to use for `Expression`. See below.",
      costexplorer_CostCategoryRuleRuleOrDimension_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "tags",
      "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
      costexplorer_CostCategoryRuleRuleOrTags_GetTypes(),
      false,
      false,
    ),
  ];
}
