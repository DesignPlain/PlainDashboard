import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  costexplorer_getCostCategoryRuleRuleCostCategory,
  costexplorer_getCostCategoryRuleRuleCostCategory_GetTypes,
} from './costexplorer_getCostCategoryRuleRuleCostCategory';
import {
  costexplorer_getCostCategoryRuleRuleDimension,
  costexplorer_getCostCategoryRuleRuleDimension_GetTypes,
} from './costexplorer_getCostCategoryRuleRuleDimension';
import {
  costexplorer_getCostCategoryRuleRuleNot,
  costexplorer_getCostCategoryRuleRuleNot_GetTypes,
} from './costexplorer_getCostCategoryRuleRuleNot';
import {
  costexplorer_getCostCategoryRuleRuleOr,
  costexplorer_getCostCategoryRuleRuleOr_GetTypes,
} from './costexplorer_getCostCategoryRuleRuleOr';
import {
  costexplorer_getCostCategoryRuleRuleTag,
  costexplorer_getCostCategoryRuleRuleTag_GetTypes,
} from './costexplorer_getCostCategoryRuleRuleTag';
import {
  costexplorer_getCostCategoryRuleRuleAnd,
  costexplorer_getCostCategoryRuleRuleAnd_GetTypes,
} from './costexplorer_getCostCategoryRuleRuleAnd';

export interface costexplorer_getCostCategoryRuleRule {
  // Return results that match both `Dimension` objects.
  ands?: Array<costexplorer_getCostCategoryRuleRuleAnd>;

  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategories?: Array<costexplorer_getCostCategoryRuleRuleCostCategory>;

  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimensions?: Array<costexplorer_getCostCategoryRuleRuleDimension>;

  // Return results that do not match the `Dimension` object.
  nots?: Array<costexplorer_getCostCategoryRuleRuleNot>;

  // Return results that match either `Dimension` object.
  ors?: Array<costexplorer_getCostCategoryRuleRuleOr>;

  // Configuration block for the specific `Tag` to use for `Expression`. See below.
  tags?: Array<costexplorer_getCostCategoryRuleRuleTag>;
}

export function costexplorer_getCostCategoryRuleRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'ands',
      'Return results that match both `Dimension` objects.',
      () => costexplorer_getCostCategoryRuleRuleAnd_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'costCategories',
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      () => costexplorer_getCostCategoryRuleRuleCostCategory_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'dimensions',
      'Configuration block for the specific `Dimension` to use for `Expression`. See below.',
      () => costexplorer_getCostCategoryRuleRuleDimension_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'nots',
      'Return results that do not match the `Dimension` object.',
      () => costexplorer_getCostCategoryRuleRuleNot_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'ors',
      'Return results that match either `Dimension` object.',
      () => costexplorer_getCostCategoryRuleRuleOr_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'tags',
      'Configuration block for the specific `Tag` to use for `Expression`. See below.',
      () => costexplorer_getCostCategoryRuleRuleTag_GetTypes(),
      true,
      false,
    ),
  ];
}
