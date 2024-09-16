import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  costexplorer_getCostCategoryRuleRuleOrTag,
  costexplorer_getCostCategoryRuleRuleOrTag_GetTypes,
} from './costexplorer_getCostCategoryRuleRuleOrTag';
import {
  costexplorer_getCostCategoryRuleRuleOrAnd,
  costexplorer_getCostCategoryRuleRuleOrAnd_GetTypes,
} from './costexplorer_getCostCategoryRuleRuleOrAnd';
import {
  costexplorer_getCostCategoryRuleRuleOrCostCategory,
  costexplorer_getCostCategoryRuleRuleOrCostCategory_GetTypes,
} from './costexplorer_getCostCategoryRuleRuleOrCostCategory';
import {
  costexplorer_getCostCategoryRuleRuleOrDimension,
  costexplorer_getCostCategoryRuleRuleOrDimension_GetTypes,
} from './costexplorer_getCostCategoryRuleRuleOrDimension';
import {
  costexplorer_getCostCategoryRuleRuleOrNot,
  costexplorer_getCostCategoryRuleRuleOrNot_GetTypes,
} from './costexplorer_getCostCategoryRuleRuleOrNot';
import {
  costexplorer_getCostCategoryRuleRuleOrOr,
  costexplorer_getCostCategoryRuleRuleOrOr_GetTypes,
} from './costexplorer_getCostCategoryRuleRuleOrOr';

export interface costexplorer_getCostCategoryRuleRuleOr {
  // Return results that match both `Dimension` objects.
  ands?: Array<costexplorer_getCostCategoryRuleRuleOrAnd>;

  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategories?: Array<costexplorer_getCostCategoryRuleRuleOrCostCategory>;

  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimensions?: Array<costexplorer_getCostCategoryRuleRuleOrDimension>;

  // Return results that do not match the `Dimension` object.
  nots?: Array<costexplorer_getCostCategoryRuleRuleOrNot>;

  // Return results that match either `Dimension` object.
  ors?: Array<costexplorer_getCostCategoryRuleRuleOrOr>;

  // Configuration block for the specific `Tag` to use for `Expression`. See below.
  tags?: Array<costexplorer_getCostCategoryRuleRuleOrTag>;
}

export function costexplorer_getCostCategoryRuleRuleOr_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'ands',
      'Return results that match both `Dimension` objects.',
      () => costexplorer_getCostCategoryRuleRuleOrAnd_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'costCategories',
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      () => costexplorer_getCostCategoryRuleRuleOrCostCategory_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'dimensions',
      'Configuration block for the specific `Dimension` to use for `Expression`. See below.',
      () => costexplorer_getCostCategoryRuleRuleOrDimension_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'nots',
      'Return results that do not match the `Dimension` object.',
      () => costexplorer_getCostCategoryRuleRuleOrNot_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'ors',
      'Return results that match either `Dimension` object.',
      () => costexplorer_getCostCategoryRuleRuleOrOr_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'tags',
      'Configuration block for the specific `Tag` to use for `Expression`. See below.',
      () => costexplorer_getCostCategoryRuleRuleOrTag_GetTypes(),
      true,
      false,
    ),
  ];
}
