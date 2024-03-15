import { StreamBackfillAllMysqlExcludedObjectsMysqlDatabaseMysqlTable } from "./StreamBackfillAllMysqlExcludedObjectsMysqlDatabaseMysqlTable";

export interface StreamBackfillAllMysqlExcludedObjectsMysqlDatabase {
  /*
Tables in the database.
Structure is documented below.
*/
  MysqlTables?: Array<StreamBackfillAllMysqlExcludedObjectsMysqlDatabaseMysqlTable>;

  // Database name.
  Database?: string;
}
