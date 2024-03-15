import { StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTableOracleColumn } from "./StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTableOracleColumn";

export interface StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTable {
  /*
Oracle columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
Structure is documented below.
*/
  OracleColumns?: Array<StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTableOracleColumn>;

  // Table name.
  Table?: string;
}
