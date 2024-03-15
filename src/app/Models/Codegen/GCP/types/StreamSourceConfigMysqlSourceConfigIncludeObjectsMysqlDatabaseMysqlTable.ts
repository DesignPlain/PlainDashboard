import { StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabaseMysqlTableMysqlColumn } from "./StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabaseMysqlTableMysqlColumn";

export interface StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabaseMysqlTable {
  /*
MySQL columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
Structure is documented below.
*/
  MysqlColumns?: Array<StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabaseMysqlTableMysqlColumn>;

  // Table name.
  Table?: string;
}
