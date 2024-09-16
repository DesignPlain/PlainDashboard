import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  costexplorer_CostCategoryRuleRuleOrNotTags,
  costexplorer_CostCategoryRuleRuleOrNotTags_GetTypes,
} from './costexplorer_CostCategoryRuleRuleOrNotTags';
import {
  costexplorer_CostCategoryRuleRuleOrNotCostCategory,
  costexplorer_CostCategoryRuleRuleOrNotCostCategory_GetTypes,
} from './costexplorer_CostCategoryRuleRuleOrNotCostCategory';
import {
  costexplorer_CostCategoryRuleRuleOrNotDimension,
  costexplorer_CostCategoryRuleRuleOrNotDimension_GetTypes,
} from './costexplorer_CostCategoryRuleRuleOrNotDimension';

export interface costexplorer_CostCategoryRuleRuleOrNot {
  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: costexplorer_CostCategoryRuleRuleOrNotTags;

  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategory?: costexplorer_CostCategoryRuleRuleOrNotCostCategory;

  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimension?: costexplorer_CostCategoryRuleRuleOrNotDimension;
}

export function costexplorer_CostCategoryRuleRuleOrNot_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'dimension',
      'Configuration block for the specific `Dimension` to use for `Expression`. See below.',
      () => costexplorer_CostCategoryRuleRuleOrNotDimension_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'tags',
      'Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
      () => costexplorer_CostCategoryRuleRuleOrNotTags_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'costCategory',
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      () => costexplorer_CostCategoryRuleRuleOrNotCostCategory_GetTypes(),
      false,
      false,
    ),
  ];
}
