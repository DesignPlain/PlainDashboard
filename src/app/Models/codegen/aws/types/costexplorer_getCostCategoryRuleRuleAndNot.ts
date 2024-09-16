import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  costexplorer_getCostCategoryRuleRuleAndNotCostCategory,
  costexplorer_getCostCategoryRuleRuleAndNotCostCategory_GetTypes,
} from './costexplorer_getCostCategoryRuleRuleAndNotCostCategory';
import {
  costexplorer_getCostCategoryRuleRuleAndNotDimension,
  costexplorer_getCostCategoryRuleRuleAndNotDimension_GetTypes,
} from './costexplorer_getCostCategoryRuleRuleAndNotDimension';
import {
  costexplorer_getCostCategoryRuleRuleAndNotTag,
  costexplorer_getCostCategoryRuleRuleAndNotTag_GetTypes,
} from './costexplorer_getCostCategoryRuleRuleAndNotTag';

export interface costexplorer_getCostCategoryRuleRuleAndNot {
  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimensions?: Array<costexplorer_getCostCategoryRuleRuleAndNotDimension>;

  // Configuration block for the specific `Tag` to use for `Expression`. See below.
  tags?: Array<costexplorer_getCostCategoryRuleRuleAndNotTag>;

  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategories?: Array<costexplorer_getCostCategoryRuleRuleAndNotCostCategory>;
}

export function costexplorer_getCostCategoryRuleRuleAndNot_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'dimensions',
      'Configuration block for the specific `Dimension` to use for `Expression`. See below.',
      () => costexplorer_getCostCategoryRuleRuleAndNotDimension_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'tags',
      'Configuration block for the specific `Tag` to use for `Expression`. See below.',
      () => costexplorer_getCostCategoryRuleRuleAndNotTag_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'costCategories',
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      () => costexplorer_getCostCategoryRuleRuleAndNotCostCategory_GetTypes(),
      true,
      false,
    ),
  ];
}
