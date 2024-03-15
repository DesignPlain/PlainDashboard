export interface StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabaseMysqlTableMysqlColumn {
  // The ordinal position of the column in the table.
  OrdinalPosition?: number;

  // Whether or not the column represents a primary key.
  PrimaryKey?: boolean;

  // Column collation.
  Collation?: string;

  // Column name.
  Column?: string;

  /*
The MySQL data type. Full data types list can be found here:
https://dev.mysql.com/doc/refman/8.0/en/data-types.html
*/
  DataType?: string;

  /*
(Output)
Column length.
*/
  Length?: number;

  // Whether or not the column can accept a null value.
  Nullable?: boolean;
}
