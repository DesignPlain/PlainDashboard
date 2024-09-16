import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  costexplorer_CostCategoryRuleRuleNotOrCostCategory,
  costexplorer_CostCategoryRuleRuleNotOrCostCategory_GetTypes,
} from './costexplorer_CostCategoryRuleRuleNotOrCostCategory';
import {
  costexplorer_CostCategoryRuleRuleNotOrDimension,
  costexplorer_CostCategoryRuleRuleNotOrDimension_GetTypes,
} from './costexplorer_CostCategoryRuleRuleNotOrDimension';
import {
  costexplorer_CostCategoryRuleRuleNotOrTags,
  costexplorer_CostCategoryRuleRuleNotOrTags_GetTypes,
} from './costexplorer_CostCategoryRuleRuleNotOrTags';

export interface costexplorer_CostCategoryRuleRuleNotOr {
  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategory?: costexplorer_CostCategoryRuleRuleNotOrCostCategory;

  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimension?: costexplorer_CostCategoryRuleRuleNotOrDimension;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: costexplorer_CostCategoryRuleRuleNotOrTags;
}

export function costexplorer_CostCategoryRuleRuleNotOr_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'costCategory',
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      () => costexplorer_CostCategoryRuleRuleNotOrCostCategory_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'dimension',
      'Configuration block for the specific `Dimension` to use for `Expression`. See below.',
      () => costexplorer_CostCategoryRuleRuleNotOrDimension_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'tags',
      'Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
      () => costexplorer_CostCategoryRuleRuleNotOrTags_GetTypes(),
      false,
      false,
    ),
  ];
}
