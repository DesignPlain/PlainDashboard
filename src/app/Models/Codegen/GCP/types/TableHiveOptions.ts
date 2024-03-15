import { TableHiveOptionsStorageDescriptor } from "./TableHiveOptionsStorageDescriptor";

export interface TableHiveOptions {
  // Hive table type. For example, MANAGED_TABLE, EXTERNAL_TABLE.
  TableType?: string;

  /*
Stores user supplied Hive table parameters. An object containing a
list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
*/
  Parameters?: Map<string, string>;

  /*
Stores physical storage information on the data.
Structure is documented below.
*/
  StorageDescriptor?: TableHiveOptionsStorageDescriptor;
}
