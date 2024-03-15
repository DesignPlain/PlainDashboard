export interface StreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemaOracleTableOracleColumn {
  // Column name.
  Column?: string;

  /*
The Oracle data type. Full data types list can be found here:
https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Data-Types.html
*/
  DataType?: string;

  /*
(Output)
The ordinal position of the column in the table.
*/
  OrdinalPosition?: number;

  /*
(Output)
Column precision.
*/
  Precision?: number;

  /*
(Output)
Whether or not the column represents a primary key.
*/
  PrimaryKey?: boolean;

  /*
(Output)
Column encoding.
*/
  Encoding?: string;

  /*
(Output)
Column length.
*/
  Length?: number;

  /*
(Output)
Whether or not the column can accept a null value.
*/
  Nullable?: boolean;

  /*
(Output)
Column scale.
*/
  Scale?: number;
}
