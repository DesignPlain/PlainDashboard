import { StreamBackfillAllMysqlExcludedObjectsMysqlDatabase } from "./StreamBackfillAllMysqlExcludedObjectsMysqlDatabase";

export interface StreamBackfillAllMysqlExcludedObjects {
  /*
MySQL databases on the server
Structure is documented below.
*/
  MysqlDatabases?: Array<StreamBackfillAllMysqlExcludedObjectsMysqlDatabase>;
}
