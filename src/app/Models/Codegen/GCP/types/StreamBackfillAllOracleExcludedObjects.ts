import { StreamBackfillAllOracleExcludedObjectsOracleSchema } from "./StreamBackfillAllOracleExcludedObjectsOracleSchema";

export interface StreamBackfillAllOracleExcludedObjects {
  /*
Oracle schemas/databases in the database server
Structure is documented below.
*/
  OracleSchemas?: Array<StreamBackfillAllOracleExcludedObjectsOracleSchema>;
}
