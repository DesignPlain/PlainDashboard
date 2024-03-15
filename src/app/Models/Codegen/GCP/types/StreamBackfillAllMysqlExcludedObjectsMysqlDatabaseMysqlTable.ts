import { StreamBackfillAllMysqlExcludedObjectsMysqlDatabaseMysqlTableMysqlColumn } from "./StreamBackfillAllMysqlExcludedObjectsMysqlDatabaseMysqlTableMysqlColumn";

export interface StreamBackfillAllMysqlExcludedObjectsMysqlDatabaseMysqlTable {
  // Table name.
  Table?: string;

  /*
MySQL columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
Structure is documented below.
*/
  MysqlColumns?: Array<StreamBackfillAllMysqlExcludedObjectsMysqlDatabaseMysqlTableMysqlColumn>;
}
