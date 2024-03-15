import { StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabaseMysqlTable } from "./StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabaseMysqlTable";

export interface StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabase {
  /*
Tables in the database.
Structure is documented below.
*/
  MysqlTables?: Array<StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabaseMysqlTable>;

  // Database name.
  Database?: string;
}
