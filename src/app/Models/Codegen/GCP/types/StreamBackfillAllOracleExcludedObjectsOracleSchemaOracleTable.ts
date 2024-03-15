import { StreamBackfillAllOracleExcludedObjectsOracleSchemaOracleTableOracleColumn } from "./StreamBackfillAllOracleExcludedObjectsOracleSchemaOracleTableOracleColumn";

export interface StreamBackfillAllOracleExcludedObjectsOracleSchemaOracleTable {
  /*
Oracle columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
Structure is documented below.
*/
  OracleColumns?: Array<StreamBackfillAllOracleExcludedObjectsOracleSchemaOracleTableOracleColumn>;

  // Table name.
  Table?: string;
}
