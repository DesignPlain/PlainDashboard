import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface glue_PartitionStorageDescriptorSerDeInfo {
  // Usually the class that implements the SerDe. An example is: org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe.
  serializationLibrary?: string;

  // Name of the SerDe.
  name?: string;

  // A map of initialization parameters for the SerDe, in key-value form.
  parameters?: Map<string, string>;
}

export function glue_PartitionStorageDescriptorSerDeInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "serializationLibrary",
      "Usually the class that implements the SerDe. An example is: org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the SerDe.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "parameters",
      "A map of initialization parameters for the SerDe, in key-value form.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
