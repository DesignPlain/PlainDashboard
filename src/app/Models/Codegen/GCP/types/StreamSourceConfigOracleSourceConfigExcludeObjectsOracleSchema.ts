import { StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTable } from "./StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTable";

export interface StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchema {
  /*
Tables in the database.
Structure is documented below.
*/
  OracleTables?: Array<StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTable>;

  // Schema name.
  Schema?: string;
}
