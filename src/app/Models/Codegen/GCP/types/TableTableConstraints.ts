import { TableTableConstraintsForeignKey } from "./TableTableConstraintsForeignKey";
import { TableTableConstraintsPrimaryKey } from "./TableTableConstraintsPrimaryKey";

export interface TableTableConstraints {
  /*
Present only if the table has a foreign key.
The foreign key is not enforced.
Structure is documented below.
*/
  ForeignKeys?: Array<TableTableConstraintsForeignKey>;

  /*
Represents the primary key constraint
on a table's columns. Present only if the table has a primary key.
The primary key is not enforced.
Structure is documented below.
*/
  PrimaryKey?: TableTableConstraintsPrimaryKey;
}
