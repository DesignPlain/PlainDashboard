import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  costexplorer_getCostCategoryRuleRuleAndAndDimension,
  costexplorer_getCostCategoryRuleRuleAndAndDimension_GetTypes,
} from './costexplorer_getCostCategoryRuleRuleAndAndDimension';
import {
  costexplorer_getCostCategoryRuleRuleAndAndTag,
  costexplorer_getCostCategoryRuleRuleAndAndTag_GetTypes,
} from './costexplorer_getCostCategoryRuleRuleAndAndTag';
import {
  costexplorer_getCostCategoryRuleRuleAndAndCostCategory,
  costexplorer_getCostCategoryRuleRuleAndAndCostCategory_GetTypes,
} from './costexplorer_getCostCategoryRuleRuleAndAndCostCategory';

export interface costexplorer_getCostCategoryRuleRuleAndAnd {
  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimensions?: Array<costexplorer_getCostCategoryRuleRuleAndAndDimension>;

  // Configuration block for the specific `Tag` to use for `Expression`. See below.
  tags?: Array<costexplorer_getCostCategoryRuleRuleAndAndTag>;

  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategories?: Array<costexplorer_getCostCategoryRuleRuleAndAndCostCategory>;
}

export function costexplorer_getCostCategoryRuleRuleAndAnd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'dimensions',
      'Configuration block for the specific `Dimension` to use for `Expression`. See below.',
      () => costexplorer_getCostCategoryRuleRuleAndAndDimension_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'tags',
      'Configuration block for the specific `Tag` to use for `Expression`. See below.',
      () => costexplorer_getCostCategoryRuleRuleAndAndTag_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'costCategories',
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      () => costexplorer_getCostCategoryRuleRuleAndAndCostCategory_GetTypes(),
      true,
      false,
    ),
  ];
}
