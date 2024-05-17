import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Biglake_TableHiveOptionsStorageDescriptor,
  Biglake_TableHiveOptionsStorageDescriptor_GetTypes,
} from "./Biglake_TableHiveOptionsStorageDescriptor";

export interface Biglake_TableHiveOptions {
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
  StorageDescriptor?: Biglake_TableHiveOptionsStorageDescriptor;

  // Hive table type. For example, MANAGED_TABLE, EXTERNAL_TABLE.
  TableType?: string;
}

export function Biglake_TableHiveOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "Parameters",
      'Stores user supplied Hive table parameters. An object containing a\nlist of "key": value pairs.\nExample: { "name": "wrench", "mass": "1.3kg", "count": "3" }.',
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "StorageDescriptor",
      "Stores physical storage information on the data.\nStructure is documented below.",
      Biglake_TableHiveOptionsStorageDescriptor_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TableType",
      "Hive table type. For example, MANAGED_TABLE, EXTERNAL_TABLE.",
      [],
      false,
      false,
    ),
  ];
}
