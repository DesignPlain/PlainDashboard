import { StreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemaOracleTableOracleColumn } from "./StreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemaOracleTableOracleColumn";

export interface StreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemaOracleTable {
  /*
Oracle columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
Structure is documented below.
*/
  OracleColumns?: Array<StreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemaOracleTableOracleColumn>;

  // Table name.
  Table?: string;
}
