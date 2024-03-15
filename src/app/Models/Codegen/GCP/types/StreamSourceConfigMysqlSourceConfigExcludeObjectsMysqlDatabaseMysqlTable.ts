import { StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabaseMysqlTableMysqlColumn } from "./StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabaseMysqlTableMysqlColumn";

export interface StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabaseMysqlTable {
  /*
MySQL columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
Structure is documented below.
*/
  MysqlColumns?: Array<StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabaseMysqlTableMysqlColumn>;

  // Table name.
  Table?: string;
}
