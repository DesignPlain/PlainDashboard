import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface glue_getCatalogTableTargetTable {
  // ID of the Glue Catalog and database where the table metadata resides. If omitted, this defaults to the current AWS Account ID.
  catalogId?: string;

  // Name of the metadata database where the table metadata resides.
  databaseName?: string;

  // Name of the table.
  name?: string;

  // Region of the target table.
  region?: string;
}

export function glue_getCatalogTableTargetTable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'catalogId',
      'ID of the Glue Catalog and database where the table metadata resides. If omitted, this defaults to the current AWS Account ID.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'databaseName',
      'Name of the metadata database where the table metadata resides.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the table.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'region',
      'Region of the target table.',
      () => [],
      true,
      false,
    ),
  ];
}
