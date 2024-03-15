import { StreamBackfillAllOracleExcludedObjectsOracleSchemaOracleTable } from "./StreamBackfillAllOracleExcludedObjectsOracleSchemaOracleTable";

export interface StreamBackfillAllOracleExcludedObjectsOracleSchema {
  /*
Tables in the database.
Structure is documented below.
*/
  OracleTables?: Array<StreamBackfillAllOracleExcludedObjectsOracleSchemaOracleTable>;

  // Schema name.
  Schema?: string;
}
