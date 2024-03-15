import { TableTableConstraintsForeignKeyColumnReferences } from "./TableTableConstraintsForeignKeyColumnReferences";
import { TableTableConstraintsForeignKeyReferencedTable } from "./TableTableConstraintsForeignKeyReferencedTable";

export interface TableTableConstraintsForeignKey {
  /*
The pair of the foreign key column and primary key column.
Structure is documented below.
*/
  ColumnReferences?: TableTableConstraintsForeignKeyColumnReferences;

  // Set only if the foreign key constraint is named.
  Name?: string;

  /*
The table that holds the primary key
and is referenced by this foreign key.
Structure is documented below.
*/
  ReferencedTable?: TableTableConstraintsForeignKeyReferencedTable;
}
