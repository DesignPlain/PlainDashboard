import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  costexplorer_getCostCategoryRuleRuleNotAndDimension,
  costexplorer_getCostCategoryRuleRuleNotAndDimension_GetTypes,
} from './costexplorer_getCostCategoryRuleRuleNotAndDimension';
import {
  costexplorer_getCostCategoryRuleRuleNotAndTag,
  costexplorer_getCostCategoryRuleRuleNotAndTag_GetTypes,
} from './costexplorer_getCostCategoryRuleRuleNotAndTag';
import {
  costexplorer_getCostCategoryRuleRuleNotAndCostCategory,
  costexplorer_getCostCategoryRuleRuleNotAndCostCategory_GetTypes,
} from './costexplorer_getCostCategoryRuleRuleNotAndCostCategory';

export interface costexplorer_getCostCategoryRuleRuleNotAnd {
  // Configuration block for the specific `Tag` to use for `Expression`. See below.
  tags?: Array<costexplorer_getCostCategoryRuleRuleNotAndTag>;

  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategories?: Array<costexplorer_getCostCategoryRuleRuleNotAndCostCategory>;

  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimensions?: Array<costexplorer_getCostCategoryRuleRuleNotAndDimension>;
}

export function costexplorer_getCostCategoryRuleRuleNotAnd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'tags',
      'Configuration block for the specific `Tag` to use for `Expression`. See below.',
      () => costexplorer_getCostCategoryRuleRuleNotAndTag_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'costCategories',
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      () => costexplorer_getCostCategoryRuleRuleNotAndCostCategory_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'dimensions',
      'Configuration block for the specific `Dimension` to use for `Expression`. See below.',
      () => costexplorer_getCostCategoryRuleRuleNotAndDimension_GetTypes(),
      true,
      false,
    ),
  ];
}
