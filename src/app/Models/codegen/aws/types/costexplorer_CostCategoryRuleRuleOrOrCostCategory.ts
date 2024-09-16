import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface costexplorer_CostCategoryRuleRuleOrOrCostCategory {
  // Unique name of the Cost Category.
  key?: string;

  // Match options that you can use to filter your results. MatchOptions is only applicable for actions related to cost category. The default values for MatchOptions is `EQUALS` and `CASE_SENSITIVE`. Valid values are: `EQUALS`,  `ABSENT`, `STARTS_WITH`, `ENDS_WITH`, `CONTAINS`, `CASE_SENSITIVE`, `CASE_INSENSITIVE`.
  matchOptions?: Array<string>;

  // Specific value of the Cost Category.
  values?: Array<string>;
}

export function costexplorer_CostCategoryRuleRuleOrOrCostCategory_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'key',
      'Unique name of the Cost Category.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'matchOptions',
      'Match options that you can use to filter your results. MatchOptions is only applicable for actions related to cost category. The default values for MatchOptions is `EQUALS` and `CASE_SENSITIVE`. Valid values are: `EQUALS`,  `ABSENT`, `STARTS_WITH`, `ENDS_WITH`, `CONTAINS`, `CASE_SENSITIVE`, `CASE_INSENSITIVE`.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'values',
      'Specific value of the Cost Category.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
