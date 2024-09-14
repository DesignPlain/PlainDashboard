import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  biglake_TableHiveOptionsStorageDescriptor,
  biglake_TableHiveOptionsStorageDescriptor_GetTypes,
} from "./biglake_TableHiveOptionsStorageDescriptor";

export interface biglake_TableHiveOptions {
  /*
Stores user supplied Hive table parameters. An object containing a
list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
*/
  parameters?: Map<string, string>;

  /*
Stores physical storage information on the data.
Structure is documented below.
*/
  storageDescriptor?: biglake_TableHiveOptionsStorageDescriptor;

  // Hive table type. For example, MANAGED_TABLE, EXTERNAL_TABLE.
  tableType?: string;
}

export function biglake_TableHiveOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "parameters",
      'Stores user supplied Hive table parameters. An object containing a\nlist of "key": value pairs.\nExample: { "name": "wrench", "mass": "1.3kg", "count": "3" }.',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "storageDescriptor",
      "Stores physical storage information on the data.\nStructure is documented below.",
      () => biglake_TableHiveOptionsStorageDescriptor_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tableType",
      "Hive table type. For example, MANAGED_TABLE, EXTERNAL_TABLE.",
      () => [],
      false,
      false,
    ),
  ];
}
