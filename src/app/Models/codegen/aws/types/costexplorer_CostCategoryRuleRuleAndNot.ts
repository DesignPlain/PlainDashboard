import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  costexplorer_CostCategoryRuleRuleAndNotCostCategory,
  costexplorer_CostCategoryRuleRuleAndNotCostCategory_GetTypes,
} from './costexplorer_CostCategoryRuleRuleAndNotCostCategory';
import {
  costexplorer_CostCategoryRuleRuleAndNotDimension,
  costexplorer_CostCategoryRuleRuleAndNotDimension_GetTypes,
} from './costexplorer_CostCategoryRuleRuleAndNotDimension';
import {
  costexplorer_CostCategoryRuleRuleAndNotTags,
  costexplorer_CostCategoryRuleRuleAndNotTags_GetTypes,
} from './costexplorer_CostCategoryRuleRuleAndNotTags';

export interface costexplorer_CostCategoryRuleRuleAndNot {
  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategory?: costexplorer_CostCategoryRuleRuleAndNotCostCategory;

  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimension?: costexplorer_CostCategoryRuleRuleAndNotDimension;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: costexplorer_CostCategoryRuleRuleAndNotTags;
}

export function costexplorer_CostCategoryRuleRuleAndNot_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'dimension',
      'Configuration block for the specific `Dimension` to use for `Expression`. See below.',
      () => costexplorer_CostCategoryRuleRuleAndNotDimension_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'tags',
      'Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
      () => costexplorer_CostCategoryRuleRuleAndNotTags_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'costCategory',
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      () => costexplorer_CostCategoryRuleRuleAndNotCostCategory_GetTypes(),
      false,
      false,
    ),
  ];
}
