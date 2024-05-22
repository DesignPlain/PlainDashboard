import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface keyspaces_TableSchemaDefinitionPartitionKey {
  // The name of the partition key column.
  name?: string;
}

export function keyspaces_TableSchemaDefinitionPartitionKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the partition key column.",
      [],
      true,
      true,
    ),
  ];
}
