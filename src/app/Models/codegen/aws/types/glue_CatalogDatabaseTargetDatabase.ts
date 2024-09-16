import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface glue_CatalogDatabaseTargetDatabase {
  // Name of the catalog database.
  databaseName?: string;

  // Region of the target database.
  region?: string;

  // ID of the Data Catalog in which the database resides.
  catalogId?: string;
}

export function glue_CatalogDatabaseTargetDatabase_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'databaseName',
      'Name of the catalog database.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'region',
      'Region of the target database.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'catalogId',
      'ID of the Data Catalog in which the database resides.',
      () => [],
      true,
      false,
    ),
  ];
}
