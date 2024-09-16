import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lakeformation_DataCellsFilterTableDataColumnWildcard,
  lakeformation_DataCellsFilterTableDataColumnWildcard_GetTypes,
} from './lakeformation_DataCellsFilterTableDataColumnWildcard';
import {
  lakeformation_DataCellsFilterTableDataRowFilter,
  lakeformation_DataCellsFilterTableDataRowFilter_GetTypes,
} from './lakeformation_DataCellsFilterTableDataRowFilter';

export interface lakeformation_DataCellsFilterTableData {
  // ID of the data cells filter version.
  versionId?: string;

  // A list of column names and/or nested column attributes.
  columnNames?: Array<string>;

  // A wildcard with exclusions. See Column Wildcard below for details.
  columnWildcard?: lakeformation_DataCellsFilterTableDataColumnWildcard;

  // The name of the database.
  databaseName?: string;

  // The name of the data cells filter.
  name?: string;

  // A PartiQL predicate. See Row Filter below for details.
  rowFilter?: lakeformation_DataCellsFilterTableDataRowFilter;

  // The ID of the Data Catalog.
  tableCatalogId?: string;

  // The name of the table.
  tableName?: string;
}

export function lakeformation_DataCellsFilterTableData_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'versionId',
      'ID of the data cells filter version.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'columnNames',
      'A list of column names and/or nested column attributes.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'columnWildcard',
      'A wildcard with exclusions. See Column Wildcard below for details.',
      () => lakeformation_DataCellsFilterTableDataColumnWildcard_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'databaseName',
      'The name of the database.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the data cells filter.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'rowFilter',
      'A PartiQL predicate. See Row Filter below for details.',
      () => lakeformation_DataCellsFilterTableDataRowFilter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'tableCatalogId',
      'The ID of the Data Catalog.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'tableName',
      'The name of the table.',
      () => [],
      true,
      false,
    ),
  ];
}
