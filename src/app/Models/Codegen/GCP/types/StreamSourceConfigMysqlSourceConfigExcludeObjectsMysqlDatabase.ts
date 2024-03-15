import { StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabaseMysqlTable } from "./StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabaseMysqlTable";

export interface StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabase {
  // Database name.
  Database?: string;

  /*
Tables in the database.
Structure is documented below.
*/
  MysqlTables?: Array<StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabaseMysqlTable>;
}
