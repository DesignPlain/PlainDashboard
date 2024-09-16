import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lakeformation_DataCellsFilterTableDataRowFilterAllRowsWildcard,
  lakeformation_DataCellsFilterTableDataRowFilterAllRowsWildcard_GetTypes,
} from './lakeformation_DataCellsFilterTableDataRowFilterAllRowsWildcard';

export interface lakeformation_DataCellsFilterTableDataRowFilter {
  // (Optional) A wildcard that matches all rows.
  allRowsWildcard?: lakeformation_DataCellsFilterTableDataRowFilterAllRowsWildcard;

  // (Optional) A filter expression.
  filterExpression?: string;
}

export function lakeformation_DataCellsFilterTableDataRowFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'allRowsWildcard',
      '(Optional) A wildcard that matches all rows.',
      () =>
        lakeformation_DataCellsFilterTableDataRowFilterAllRowsWildcard_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'filterExpression',
      '(Optional) A filter expression.',
      () => [],
      false,
      false,
    ),
  ];
}
