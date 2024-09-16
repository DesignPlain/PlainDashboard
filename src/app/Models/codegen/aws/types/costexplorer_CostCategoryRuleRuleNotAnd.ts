import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  costexplorer_CostCategoryRuleRuleNotAndCostCategory,
  costexplorer_CostCategoryRuleRuleNotAndCostCategory_GetTypes,
} from './costexplorer_CostCategoryRuleRuleNotAndCostCategory';
import {
  costexplorer_CostCategoryRuleRuleNotAndDimension,
  costexplorer_CostCategoryRuleRuleNotAndDimension_GetTypes,
} from './costexplorer_CostCategoryRuleRuleNotAndDimension';
import {
  costexplorer_CostCategoryRuleRuleNotAndTags,
  costexplorer_CostCategoryRuleRuleNotAndTags_GetTypes,
} from './costexplorer_CostCategoryRuleRuleNotAndTags';

export interface costexplorer_CostCategoryRuleRuleNotAnd {
  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategory?: costexplorer_CostCategoryRuleRuleNotAndCostCategory;

  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimension?: costexplorer_CostCategoryRuleRuleNotAndDimension;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: costexplorer_CostCategoryRuleRuleNotAndTags;
}

export function costexplorer_CostCategoryRuleRuleNotAnd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'tags',
      'Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
      () => costexplorer_CostCategoryRuleRuleNotAndTags_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'costCategory',
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      () => costexplorer_CostCategoryRuleRuleNotAndCostCategory_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'dimension',
      'Configuration block for the specific `Dimension` to use for `Expression`. See below.',
      () => costexplorer_CostCategoryRuleRuleNotAndDimension_GetTypes(),
      false,
      false,
    ),
  ];
}
