import { StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabase } from "./StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabase";

export interface StreamSourceConfigMysqlSourceConfigIncludeObjects {
  /*
MySQL databases on the server
Structure is documented below.
*/
  MysqlDatabases?: Array<StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabase>;
}
