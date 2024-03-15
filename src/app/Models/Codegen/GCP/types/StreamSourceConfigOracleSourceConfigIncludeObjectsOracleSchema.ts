import { StreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemaOracleTable } from "./StreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemaOracleTable";

export interface StreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchema {
  /*
Tables in the database.
Structure is documented below.
*/
  OracleTables?: Array<StreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemaOracleTable>;

  // Schema name.
  Schema?: string;
}
