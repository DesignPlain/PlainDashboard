export interface StreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemaPostgresqlTablePostgresqlColumn {
  /*
(Output)
Column length.
*/
  Length?: number;

  // Whether or not the column can accept a null value.
  Nullable?: boolean;

  // The ordinal position of the column in the table.
  OrdinalPosition?: number;

  /*
(Output)
Column precision.
*/
  Precision?: number;

  // Whether or not the column represents a primary key.
  PrimaryKey?: boolean;

  /*
(Output)
Column scale.
*/
  Scale?: number;

  // Column name.
  Column?: string;

  /*
The PostgreSQL data type. Full data types list can be found here:
https://www.postgresql.org/docs/current/datatype.html
*/
  DataType?: string;
}
