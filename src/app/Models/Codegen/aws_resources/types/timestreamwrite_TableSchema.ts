import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  timestreamwrite_TableSchemaCompositePartitionKey,
  timestreamwrite_TableSchemaCompositePartitionKey_GetTypes,
} from "./timestreamwrite_TableSchemaCompositePartitionKey";

export interface timestreamwrite_TableSchema {
  // A non-empty list of partition keys defining the attributes used to partition the table data. The order of the list determines the partition hierarchy. The name and type of each partition key as well as the partition key order cannot be changed after the table is created. However, the enforcement level of each partition key can be changed. See Composite Partition Key below for more details.
  compositePartitionKey?: timestreamwrite_TableSchemaCompositePartitionKey;
}

export function timestreamwrite_TableSchema_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "compositePartitionKey",
      "A non-empty list of partition keys defining the attributes used to partition the table data. The order of the list determines the partition hierarchy. The name and type of each partition key as well as the partition key order cannot be changed after the table is created. However, the enforcement level of each partition key can be changed. See Composite Partition Key below for more details.",
      timestreamwrite_TableSchemaCompositePartitionKey_GetTypes(),
      false,
      true,
    ),
  ];
}
