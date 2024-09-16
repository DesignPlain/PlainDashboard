import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  costexplorer_CostCategoryRuleRuleNot,
  costexplorer_CostCategoryRuleRuleNot_GetTypes,
} from './costexplorer_CostCategoryRuleRuleNot';
import {
  costexplorer_CostCategoryRuleRuleOr,
  costexplorer_CostCategoryRuleRuleOr_GetTypes,
} from './costexplorer_CostCategoryRuleRuleOr';
import {
  costexplorer_CostCategoryRuleRuleTags,
  costexplorer_CostCategoryRuleRuleTags_GetTypes,
} from './costexplorer_CostCategoryRuleRuleTags';
import {
  costexplorer_CostCategoryRuleRuleAnd,
  costexplorer_CostCategoryRuleRuleAnd_GetTypes,
} from './costexplorer_CostCategoryRuleRuleAnd';
import {
  costexplorer_CostCategoryRuleRuleCostCategory,
  costexplorer_CostCategoryRuleRuleCostCategory_GetTypes,
} from './costexplorer_CostCategoryRuleRuleCostCategory';
import {
  costexplorer_CostCategoryRuleRuleDimension,
  costexplorer_CostCategoryRuleRuleDimension_GetTypes,
} from './costexplorer_CostCategoryRuleRuleDimension';

export interface costexplorer_CostCategoryRuleRule {
  // Return results that match both `Dimension` object.
  ors?: Array<costexplorer_CostCategoryRuleRuleOr>;

  // Configuration block for the specific `Tag` to use for `Expression`. See below.
  tags?: costexplorer_CostCategoryRuleRuleTags;

  // Return results that match both `Dimension` objects.
  ands?: Array<costexplorer_CostCategoryRuleRuleAnd>;

  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategory?: costexplorer_CostCategoryRuleRuleCostCategory;

  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimension?: costexplorer_CostCategoryRuleRuleDimension;

  // Return results that match both `Dimension` object.
  not?: costexplorer_CostCategoryRuleRuleNot;
}

export function costexplorer_CostCategoryRuleRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'dimension',
      'Configuration block for the specific `Dimension` to use for `Expression`. See below.',
      () => costexplorer_CostCategoryRuleRuleDimension_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'not',
      'Return results that match both `Dimension` object.',
      () => costexplorer_CostCategoryRuleRuleNot_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'ors',
      'Return results that match both `Dimension` object.',
      () => costexplorer_CostCategoryRuleRuleOr_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'tags',
      'Configuration block for the specific `Tag` to use for `Expression`. See below.',
      () => costexplorer_CostCategoryRuleRuleTags_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'ands',
      'Return results that match both `Dimension` objects.',
      () => costexplorer_CostCategoryRuleRuleAnd_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'costCategory',
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      () => costexplorer_CostCategoryRuleRuleCostCategory_GetTypes(),
      false,
      false,
    ),
  ];
}
