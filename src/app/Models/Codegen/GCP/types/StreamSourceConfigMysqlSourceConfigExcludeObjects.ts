import { StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabase } from "./StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabase";

export interface StreamSourceConfigMysqlSourceConfigExcludeObjects {
  /*
MySQL databases on the server
Structure is documented below.
*/
  MysqlDatabases?: Array<StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabase>;
}
