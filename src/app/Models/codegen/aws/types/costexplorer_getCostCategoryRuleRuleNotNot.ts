import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  costexplorer_getCostCategoryRuleRuleNotNotDimension,
  costexplorer_getCostCategoryRuleRuleNotNotDimension_GetTypes,
} from './costexplorer_getCostCategoryRuleRuleNotNotDimension';
import {
  costexplorer_getCostCategoryRuleRuleNotNotTag,
  costexplorer_getCostCategoryRuleRuleNotNotTag_GetTypes,
} from './costexplorer_getCostCategoryRuleRuleNotNotTag';
import {
  costexplorer_getCostCategoryRuleRuleNotNotCostCategory,
  costexplorer_getCostCategoryRuleRuleNotNotCostCategory_GetTypes,
} from './costexplorer_getCostCategoryRuleRuleNotNotCostCategory';

export interface costexplorer_getCostCategoryRuleRuleNotNot {
  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimensions?: Array<costexplorer_getCostCategoryRuleRuleNotNotDimension>;

  // Configuration block for the specific `Tag` to use for `Expression`. See below.
  tags?: Array<costexplorer_getCostCategoryRuleRuleNotNotTag>;

  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategories?: Array<costexplorer_getCostCategoryRuleRuleNotNotCostCategory>;
}

export function costexplorer_getCostCategoryRuleRuleNotNot_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'dimensions',
      'Configuration block for the specific `Dimension` to use for `Expression`. See below.',
      () => costexplorer_getCostCategoryRuleRuleNotNotDimension_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'tags',
      'Configuration block for the specific `Tag` to use for `Expression`. See below.',
      () => costexplorer_getCostCategoryRuleRuleNotNotTag_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'costCategories',
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      () => costexplorer_getCostCategoryRuleRuleNotNotCostCategory_GetTypes(),
      true,
      false,
    ),
  ];
}
