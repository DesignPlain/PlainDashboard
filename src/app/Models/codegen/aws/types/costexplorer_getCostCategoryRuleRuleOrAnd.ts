import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  costexplorer_getCostCategoryRuleRuleOrAndCostCategory,
  costexplorer_getCostCategoryRuleRuleOrAndCostCategory_GetTypes,
} from './costexplorer_getCostCategoryRuleRuleOrAndCostCategory';
import {
  costexplorer_getCostCategoryRuleRuleOrAndDimension,
  costexplorer_getCostCategoryRuleRuleOrAndDimension_GetTypes,
} from './costexplorer_getCostCategoryRuleRuleOrAndDimension';
import {
  costexplorer_getCostCategoryRuleRuleOrAndTag,
  costexplorer_getCostCategoryRuleRuleOrAndTag_GetTypes,
} from './costexplorer_getCostCategoryRuleRuleOrAndTag';

export interface costexplorer_getCostCategoryRuleRuleOrAnd {
  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategories?: Array<costexplorer_getCostCategoryRuleRuleOrAndCostCategory>;

  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimensions?: Array<costexplorer_getCostCategoryRuleRuleOrAndDimension>;

  // Configuration block for the specific `Tag` to use for `Expression`. See below.
  tags?: Array<costexplorer_getCostCategoryRuleRuleOrAndTag>;
}

export function costexplorer_getCostCategoryRuleRuleOrAnd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'costCategories',
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      () => costexplorer_getCostCategoryRuleRuleOrAndCostCategory_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'dimensions',
      'Configuration block for the specific `Dimension` to use for `Expression`. See below.',
      () => costexplorer_getCostCategoryRuleRuleOrAndDimension_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'tags',
      'Configuration block for the specific `Tag` to use for `Expression`. See below.',
      () => costexplorer_getCostCategoryRuleRuleOrAndTag_GetTypes(),
      true,
      false,
    ),
  ];
}
