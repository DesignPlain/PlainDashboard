export interface TableTableConstraintsForeignKeyColumnReferences {
  /*
The column in the primary key that are
referenced by the referencingColumn
*/
  ReferencedColumn?: string;

  // The column that composes the foreign key.
  ReferencingColumn?: string;
}
