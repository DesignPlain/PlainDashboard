import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  bigquery_TableTableConstraintsPrimaryKey,
  bigquery_TableTableConstraintsPrimaryKey_GetTypes,
} from './bigquery_TableTableConstraintsPrimaryKey';
import {
  bigquery_TableTableConstraintsForeignKey,
  bigquery_TableTableConstraintsForeignKey_GetTypes,
} from './bigquery_TableTableConstraintsForeignKey';

export interface bigquery_TableTableConstraints {
  /*
Represents the primary key constraint
on a table's columns. Present only if the table has a primary key.
The primary key is not enforced.
Structure is documented below.
*/
  primaryKey?: bigquery_TableTableConstraintsPrimaryKey;

  /*
Present only if the table has a foreign key.
The foreign key is not enforced.
Structure is documented below.
*/
  foreignKeys?: Array<bigquery_TableTableConstraintsForeignKey>;
}

export function bigquery_TableTableConstraints_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'primaryKey',
      "Represents the primary key constraint\non a table's columns. Present only if the table has a primary key.\nThe primary key is not enforced.\nStructure is documented below.",
      () => bigquery_TableTableConstraintsPrimaryKey_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'foreignKeys',
      'Present only if the table has a foreign key.\nThe foreign key is not enforced.\nStructure is documented below.',
      () => bigquery_TableTableConstraintsForeignKey_GetTypes(),
      false,
      false,
    ),
  ];
}
